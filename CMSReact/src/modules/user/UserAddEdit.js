import React, { useState, useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "react-select";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";

import AuthService from "../../service/AuthService";
import UserService from "../../service/UserService";
import MasterData from "../helper/masterdata";
import classes from "./user.module.css";
import Helper from "../helper/helper";
import * as UserObjects from "./UserObjects";
import BackdropLoader from "../../elements/ui/BackdropLoader/BackdropLoader";
import NotificationDialog from "../../elements/ui/Dialog/NotificationDialog";
/* to be removed */
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const initialUserState = UserObjects.userObject;
const initialErrorState = UserObjects.userErrorObject;
const initialPageState = UserObjects.UserPageObject;

const useStyles = makeStyles((theme) => ({
  readOnlyColor: {
    background: "#f0f0f0",
  },
  normalColor: {
    background: "transparent",
  },
}));

const UserAddEdit = (props) => {
  const localClasses = useStyles();
  let history = useHistory();
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const [rolesList, setRolesList] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [mode, setMode] = useState("ADD");
  const [isLoading, setIsLoading] = useState(false);
  const [errorWarning, setErrorWarning] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [previousEmail, setPreviousEmail] = useState("");

  const [openNotification, setOpenNotification] = React.useState(false);

  const [userState, dispatch] = useReducer(Helper.reducer, initialUserState);
  const [errorState, errDispatch] = useReducer(
    Helper.reducer,
    initialErrorState
  );

  const [pageState, pageDispatch] = useReducer(Helper.reducer,initialPageState );

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onChangeRoles = (e) => {
    setSelectedRoles(e);
    console.error(e);
  };


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const {
    id,
    firstName,
    lastName,
    middleName,
    userEmail,
    userPhone,
    userPassword,
    userStatus,
  } = userState;

  const {
    firstNameError,
    lastNameError,
    userEmailError,
    userPhoneError,
    userPasswordError,
    userRoleError,
  } = errorState;

   const {
    openSnackMessage,
    isTaxListLoading,
    isParentUserLoading,
    isMainDataLoading,
  } = pageState;

  useEffect(() => {
    if (!(userId == null) && userId !== null) {
      setMode(MasterData.pageMode.Edit);
      setIsLoading(true);

      UserService.fetchUserById(userId).then((res) => {
        setUserInfo(res.data);

        Object.entries(res.data).forEach(([key, val]) => {
          dispatch({
            field: `${key}`,
            value: val,
          });
        });

        //Setting the roles
        if (Array.isArray(res.data.userRolesList)) {
          const rolesArray = [];
          res.data.userRolesList.map((item) => {
            const roleObject = MasterData.getLookupObjectFromKey(
              item.roleType,
              MasterData.lookupTypes.UserRole
            );
            rolesArray.push(roleObject);
            console.log(roleObject);
          });
          setSelectedRoles(rolesArray);
          console.error(rolesArray);
        }


        setPreviousEmail(res.data.userEmail);

        setIsLoading(false);
      });
    }
    
  }, [userId]);


    useEffect(() => {
    getMasterData(MasterData.lookupTypes.UserRole);
  }, []);

  const getMasterData = (lookupType) => {
    const resultArray = MasterData.getLookupDataFromType(lookupType);

    switch (lookupType) {
      case MasterData.lookupTypes.UserRole:
        setRolesList(resultArray);
        break;

      default:
        console.log("Sorry");
    }
  };

  // Verify if all necessary fields are entered before form submission
  const isRequiredFieldsAvailable = () => {
    let submitForm = true;
    const validationState = { ...errorState };

    validationState.firstNameError =
      firstName.trim().length === 0 ? "Please enter First Name" : "";

    validationState.lastNameError =
      lastName.trim().length === 0 ? "Please enter Last Name" : "";

    if (validationState.userEmailError.trim().length === 0) {
      validationState.userEmailError =
        userEmail.trim().length === 0 ? "Please enter Email" : "";
    }

    /*  validationState.userPhoneError =
      userPhone.trim().length === 0 ? "Please enter Mobile No." : ""; */

    validationState.userPhoneError = "";
    if (userPhone.trim().length === 0) {
      validationState.userPhoneError = "Please enter Mobile No.";
    } else if (
      !Helper.validatePhoneNumber(
        AuthService.getUserInfo().companyDTO.companyDialCode,
        userPhone
      )
    ) {
      validationState.userPhoneError = "Please enter valid Mobile No.";
    }

    validationState.userPasswordError = "";
    if (mode === MasterData.pageMode.Add) {
      if (userPassword.trim().length === 0) {
        validationState.userPasswordError = "Please enter Password";
      } else if (userPassword.trim().length < 6) {
        validationState.userPasswordError =
          "Password must be minimum 6 characters";
      }
    }

    validationState.userRoleError =
      selectedRoles === null || selectedRoles.length === 0
        ? "Please select atleast one role"
        : "";


    //Check if there is any form errors
    Object.entries(validationState).forEach(([key, value]) => {
      if (value.length > 0) {
        submitForm = false;
        errDispatch({
          field: `${key}`,
          value: `${value}`,
        });
      } else {
        errDispatch({
          field: `${key}`,
          value: "",
        });
      }
    });

    pageDispatch({
      field: "errorWarning",
      value: submitForm ? "" : "Highlighted fields must be corrected.",
    });
    return submitForm;
  };

  const handleClose = (event, reason) => {
    pageDispatch({
      field: "openSnackMessage",
      value: false,
    });
    history.goBack();
  };

  const handleCancel = () => {
    history.goBack();
  };
// if it works remove later ******
  const handleEmailBlur = (e) => {
    const isValidFormat = Helper.validateEmail(e.target.value);

    errDispatch({
      field: "userEmailError",
      value: isValidFormat ? "" : "Please enter valid email addess",
    });

    if (isValidFormat && userEmail !== previousEmail) {
      checkEmailUnique(userEmail);
    }
  };
// const handleEmailBlur = (e) => {
//     if (e.target.value !== null && e.target.value.length > 0) {
//       errDispatch({
//         field: "emailError",
//         value: Helper.validateEmail(e.target.value)
//           ? ""
//           : "Please enter valid email addess",
//       });
//     } else {
//       errDispatch({
//         field: "emailError",
//         value: "",
//       });
//     }
//   };
  const checkEmailUnique = (email) => {
    setDisableSubmit(true);
    UserService.fetchUserByEmail(email)
      .then((response) => {
        errDispatch({
          field: "userEmailError",
          value: response.data.hasOwnProperty("id")
            ? "User with this email id exists already"
            : "",
        });
      })
      .finally(() => {
        setDisableSubmit(false);
      });
  };

  const checkBoxHandler = () => {
    const status = userStatus === "AC" ? "IC" : "AC";
    dispatch({
      field: "userStatus",
      value: status,
    });
  };

  const getUserRoleList = (stateObj) => {
    const roleList = [...stateObj.userRolesList];

    roleList.map((option) => {
      option.recordStatus = MasterData.recordStatus.delete;
    });

    selectedRoles.map((option) => {
      //Check if already exists
      let objIndex = -1;



      if (Array.isArray(roleList)) {
        objIndex = roleList.findIndex((x) => x.roleType === option.lookupKey);
      }

      if (objIndex === -1) {
        const roleObject = {
          ...UserObjects.userRolesObject,
        };
        roleObject.id = null;
        roleObject.roleType = option.lookupKey;
        roleObject.userId = null;
        roleObject.recordStatus = MasterData.recordStatus.insert;
        roleList.push(roleObject);
      } else {
        roleList[objIndex].recordStatus = MasterData.recordStatus.update;
      }
    });
    return roleList;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!isRequiredFieldsAvailable()) {
      return;
    }

    //disable the submit button
    //setDisableSubmit(true); ****
     pageDispatch({
      field: "disableSubmit",
      value: true,
    });

    const submitState = { ...userState };

    if (mode === MasterData.pageMode.Add) {
      submitState.companyId = AuthService.getLoggedInUserCompanyId();
      submitState.loginId = AuthService.getLoggedInUserId();
      submitState.userStatus = "AC";
    } else {
      submitState.userPassword = null;
    }

    submitState.userRolesList = getUserRoleList(submitState);
    console.log(submitState);

    if (mode === MasterData.pageMode.Add) { 
          console.error(submitState);
          UserService.addUser(submitState)
        .then((response) => {
          //setOpen(true); ****
          pageDispatch({
            field: "openSnackMessage",
            value: true,
          });
        })
        .catch((ex) => {
          console.log(ex);
          //setDisableSubmit(false); ****
          pageDispatch({
            field: "disableSubmit",
            value: false,
          });
        });
    } else {
      UserService.editUser(submitState)
        .then((response) => {
          //setOpen(true);
          pageDispatch({
            field: "openSnackMessage",
            value: true,
          });
        })
        .catch((ex) => {
          console.log(ex);
          //setDisableSubmit(false);
          pageDispatch({
            field: "openSnackMessage",
            value: true,
          });
        });
    }
  };
 const handleEditProfile = () => {
    history.push("/user/edit/" + userId);
  };

  //Delete user handler. Called when user confirms deletions
  const handleUserDelete = () => {
    setOpen(false);
    deleteUser(userId);
  };

  const deleteUser = (id) => {
    UserService.deleteUser(id)
      .then((response) => {
        setOpenNotification(true);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  //Close handler for delete notification
  const handleDeleteConfirmationClose = (event) => {
    setOpen(false);
  };

  //handler for opening delete notification
  const handleDeleteConfirmationOpen = (event) => {
    setOpen(true);
  };

  //Close handler for delete notification complete
  const handleNotificationClose = (event) => {
    setOpenNotification(false);
    history.push("/admin/users");
    console.log("Hello")
  };
// to be deleted ****
  
// Getting selected value from dropDwon
function getSelectedValue() {
  let selectedValue = document.getElementById("countryList").value;
  console.log(selectedValue);
  if (selectedValue=null) {
    selectedValue = "SG";
  }
}
// getSelectedValue();

  return (
    <>
      {isLoading === false ? (
        <div>
          <Typography variant="h5" gutterBottom>
            User
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please fill in user information (fields with * are mandatory)
          </Typography>
          {errorWarning.length > 0 ? (
            <Typography variant="subtitle1" gutterBottom>
              <span className={`${classes.LeftMargin5} ${classes.ErrorText}`}>
                {errorWarning}
              </span>
            </Typography>
          ) : (
            ""
          )}
          <form onSubmit={submitForm} noValidate>
            <div className={classes.UserAddEditLayout}>
              <div className={classes.UserAddEditFormSection}>
                {/* Basic Information */}
                <Paper style={{ padding: "15px" }} elevation={3}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.HeadingColor}
                  >
                    Basic Information
                  </Typography>
                  <div className={classes.ThreeColumnGrid}>
                    <div>
                      <TextField
                        className={
                          mode === MasterData.pageMode.Edit
                            ? localClasses.readOnlyColor
                            : localClasses.normalColor
                        }
                        label="Email"
                        id="userEmail"
                        name="userEmail"
                        size="small"
                        margin="dense"
                        fullWidth
                        variant="standard"
                        required
                        inputProps={{ maxLength: 320 }}
                        type="email"
                        value={userEmail}
                        onChange={onChange}
                        error={userEmailError.length > 0 ? true : false}
                        helperText={userEmailError}
                        onBlur={handleEmailBlur}
                        InputProps={{
                          readOnly:
                            mode === MasterData.pageMode.Add ? false : true,
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        size="small"
                        margin="dense"
                        fullWidth
                        variant="standard"
                        required
                        value={firstName}
                        onChange={onChange}
                        inputProps={{ maxLength: 100 }}
                        error={firstNameError.length > 0 ? true : false}
                        helperText={firstNameError}
                      />
                    </div>
                    <div>
                      <TextField
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        size="small"
                        margin="dense"
                        fullWidth
                        variant="standard"
                        required
                        value={lastName}
                        onChange={onChange}
                        inputProps={{ maxLength: 100 }}
                        error={lastNameError.length > 0 ? true : false}
                        helperText={lastNameError}
                      />
                    </div>
                    <div>
                      <TextField
                        label="Middle Name"
                        id="middleName"
                        name="middleName"
                        size="small"
                        margin="dense"
                        fullWidth
                        variant="standard"
                        value={middleName !== null ? middleName : ""}
                        onChange={onChange}
                        inputProps={{ maxLength: 100 }}
                      />
                    </div>
                    <div>
                      <TextField
                        label="Mobile"
                        id="userPhone"
                        name="userPhone"
                        size="small"
                        margin="dense"
                        fullWidth
                        variant="standard"
                        required
                        value={userPhone}
                        onChange={onChange}
                        inputProps={{ maxLength: 50 }}
                        error={userPhoneError.length > 0 ? true : false}
                        helperText={userPhoneError}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {"+" +
                                AuthService.getUserInfo().companyDTO
                                  .companyDialCode}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>

                    {mode === MasterData.pageMode.Add ? (
                      <div>
                        <FormControl
                          fullWidth
                          margin="dense"
                          required
                          error={userPasswordError.length > 0 ? true : false}
                        >
                          <InputLabel htmlFor="userPassword">
                            Password
                          </InputLabel>
                          <Input
                            id="userPassword"
                            name="userPassword"
                            type={showPassword ? "text" : "password"}
                            value={userPassword}
                            fullWidth
                            onChange={onChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <FormHelperText id="userPasswordHelperText">
                            {userPasswordError.length > 0
                              ? userPasswordError
                              : "Minimum 6 characters"}
                          </FormHelperText>
                        </FormControl>
                      </div>
                    ) : (
                      <div className={classes.CheckboxAlign}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={userStatus === "AC" ? true : false}
                              onChange={checkBoxHandler}
                              value="AC"
                              color="primary"
                              name="userStatus"
                            />
                          }
                          label="Active?"
                          labelPlacement="start"
                        />
                      </div>
                    )}
                  </div>
                </Paper>

                {/* End Basic Information */}

                {/* Roles */}
                <Paper style={{ padding: "15px" }} elevation={3}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.HeadingColor}
                  >
                    User Role(s)*
                  </Typography>
                  <div className={classes.ThreeColumnGrid}>
                    <div className={classes.ThreeColumnOverride}>
                      <Select
                        options={rolesList}
                        id="rolesList"
                        menuPlacement="auto"
                        isMulti="true"
                        getOptionLabel={(option) => option.lookupValue}
                        getOptionValue={(option) => option.lookupKey}
                        onChange={onChangeRoles}
                        value={selectedRoles}
                      />
                      {userRoleError.length > 0 ? (
                        <Typography variant="body2" gutterBottom>
                          <span
                            className={`${classes.LeftMargin5} ${classes.ErrorText}`}
                          >
                            {userRoleError}
                          </span>
                        </Typography>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Paper>



                {/* Roles123 */}
                <Paper style={{ padding: "15px" }} elevation={3}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.HeadingColor}
                  >
                    User Country*
                  </Typography>
                  <div className={classes.ThreeColumnGrid}>
                    <div className={classes.ThreeColumnOverride}>
                      <select id="countryList" onChange={getSelectedValue}>
                        <option value={"SG"}>Singapore</option>
                        <option value={"ILL"}>Illo Illo</option>
                        <option value={"MYM"}>Myanmar</option>
                        <option value={"JB"}>Johor Bharu</option>
                      </select>
                        {/* /* // options={rolesList}
                        //  */ }
                        
                      {/* {userRoleError.length > 0 ? ( */}
                        {/* // <Typography variant="body2" gutterBottom> */}
                       {/* <span
                        //     className={`${classes.LeftMargin5} ${classes.ErrorText}`}
                        //   >
                        //     {userRoleError}
                        //   </span> */}
                        {/* // </Typography> */}
                        {/* ""
                      // )} */}
                    </div>
                  </div>
                </Paper>


                {/* End Medical Group */}
              </div>
              <div className={classes.AddEditButtonSection}>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    disabled={disableSubmit ? true : false}
                    fullWidth
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    //type="submit"
                    disabled={disableSubmit ? true : false}
                    fullWidth
                    onClick={handleDeleteConfirmationOpen}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    size="small"
                    fullWidth
                    onClick={handleCancel}
                    startIcon={<CancelIcon />}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <BackdropLoader open={true}></BackdropLoader>
      )}
       {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {mode === "ADD"
            ? "User added successfully!!"
            : "User updated successfully"}
        </Alert>
      </Snackbar> */}


      <NotificationDialog 
      open={openSnackMessage} 
      handleClose={handleClose} 
      title="Users"
      >
        <span>
          {mode ===  "MasterData.pageMode.Add" // to be checked ****
            ? "User added successfully!!"
            : "User updated successfully"}
        </span>
      </NotificationDialog>
      
      <Dialog
        open={open}
        onClose={handleDeleteConfirmationClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"User Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to delete user with name {firstName}. Do you wish
            to go ahead?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmationClose} color="primary">
            No
          </Button>
          <Button onClick={handleUserDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <NotificationDialog
        open={openNotification}
        handleClose={handleNotificationClose}
        title="Users"
      >
        <span>User deleted successfully !!!</span>
      </NotificationDialog>

    </>
  );
};

export default UserAddEdit;
