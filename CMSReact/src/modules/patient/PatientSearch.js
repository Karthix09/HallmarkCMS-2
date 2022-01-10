import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import AutoCompleteSelect from "../../elements/ui/AutoComplete/AutoCompleteSelect";
import AuthService from "../../service/AuthService";
import PatientService from "../../service/PatientService";
import MasterData from "../helper/masterdata";
import classes from "./patient.module.css";
import MasterService from "../../service/MasterService";
import UserService from "../../service/UserService";

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: "25px",
	},
}));

const PatientSearch = (props) => {
	let history = useHistory();
	const classesLocal = useStyles();
	const [patientGroupdata, setPatientGroupData] = useState([]);
	const [selectedGroupId, setSelectedGroupId] = useState("");
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		getGroupData();
		searchPatients();
	}, []);

	const searchParameters = {
			//companyId: AuthService.getLoggedInUserCompanyId(),
			companyId: AuthService.getUserInfo().companyDTO.id,
			groupCode: selectedGroupId.length > 0 ? selectedGroupId : null,
			searchText: searchText.trim().length > 0 ? searchText : null,
		};
	
	const searchPatients = () => {
		// const searchParameters = {
		// 	//companyId: AuthService.getLoggedInUserCompanyId(),
		// 	companyId: AuthService.getUserInfo().companyDTO.id,
		// 	//groupCode: selectedGroupId.length > 0 ? selectedGroupId : null,
		// 	searchText: searchText.trim().length > 0 ? searchText : null,
		// };

		// console.log("companyid " + searchParameters.searchText);	
		console.log("searchPatients " + searchParameters.searchText);	
		PatientService.fetchPatients()
			.then((response) => {
				const patients = Array.isArray(response.data) ? response.data : [];
				//console.log("fetchPatients " );
				props.onSearch(patients);
 			})
			.catch((ex) => {
				console.log(ex);
			});	
		
	};

	const searchPatientsbyName = () => {
		// const searchParameters = {
		// 	//companyId: AuthService.getLoggedInUserCompanyId(),
		// 	companyId: AuthService.getUserInfo().companyDTO.id,
		// 	groupCode: selectedGroupId.length > 0 ? selectedGroupId : null,
		// 	searchText: searchText.trim().length > 0 ? searchText : null,
		// };

		console.log("searchPatientsbyName " + searchParameters.searchText);	
		
		PatientService.fetchPatientByName(searchParameters.searchText)
			.then((response) => {
				const patients = Array.isArray(response.data) ? response.data : [];
				console.log(patients);
				props.onSearch(patients);
 			})
			.catch((ex) => {
				console.log(ex);
			});	
		
	};

	const getGroupData = () => {
		/* const groupData = MasterData.getLookupDataFromType(
	      MasterData.lookupTypes.PatientGroup
    		);
    	  setPatientGroupData(groupData); */
		MasterService.fetchLookupByType(MasterData.lookupTypes.PatientGroup, AuthService.getLoggedInUserCompanyId())
			.then((response) => {
				const groupData = Array.isArray(response.data) ? response.data : [];
				setPatientGroupData(groupData);
			})
			.catch((ex) => {
				console.log(ex);
			});
	};

	const addPatient = () => {
		history.push("/patient/add");
	};

	const onChangeNameValue = (name, value) => {
		setSelectedGroupId(value === null ? "" : value);
	};
	
	return (
		<>
			<div className={classes.PatientSearch}>
				<div className={classes.TopMargin5}>
					<TextField
						label='Patient Name/Patient Id/Mobile'
						id='searchString'
						value={searchText}
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon></SearchIcon>
								</InputAdornment>
							),
						}}
					/>
				</div>
				{/* <div>
					<AutoCompleteSelect
						fullWidth
						data={patientGroupdata}
						label='Medical Group'
						id='medicalGroupId'
						name='medicalGroupId'
						keyValue='lookupKey'
						keyLabel='lookupValue'
						initialValue={selectedGroupId}
						callbackFunction={onChangeNameValue}></AutoCompleteSelect>
				</div> */}
				<div>
					<Button
						variant='contained'
						color='primary'
						size='small'
						className={classesLocal.button}
						onClick={searchPatientsbyName}
						startIcon={<SearchIcon />}>
						Search
					</Button>
				</div>
				<div></div>
				<div className={classes.RightAlign}>
					<Button 
						variant='contained' 
						color='primary' 
						size='small' 
						className={classesLocal.button} 
						onClick={addPatient} 
						startIcon={<AddIcon />}>
						Add Patient
					</Button>
				</div>
			</div>
		</>
	);
};

export default PatientSearch;