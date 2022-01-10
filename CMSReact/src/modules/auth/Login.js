import React, { useState } from "react";
import useAuthForm from "./useAuthForm";
import { validateauth, fields } from "./validateAuth";
import Featured from "../../assets/images/featured.jpg";
import hallacademylogo from "../../assets/images/hallmark-physio-logo.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./auth.scss";
import TextField from "@material-ui/core/TextField";

import AuthService from "../../service/AuthService";
import { useHistory } from "react-router-dom";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import MasterData from "../helper/masterdata";

const Login = () => {
	let history = useHistory();

	const [showPassword, setShowPassword] = useState(false);

	const { handleChange, handleSubmit, values, errors } = useAuthForm(submit, validateauth, fields);
	const [msg, setMsg] = useState("");

	function submit() {
		const credentials = { userEmail: values.email, password: values.password };
		AuthService.login(credentials).then(
			() => {
				let res = {};
				res["status"] = 200;
				res["data"] = {"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXZpQGhhbGxtYXJrcGh5c2lvLmNvbSIsInNjb3BlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaXNzIjoiaHR0cDovL3d3dy5za2l5YXRlY2hub2xvZ2llcy5jb20iLCJpYXQiOjE2MTk3MDc3NjQsImV4cCI6MTYxOTcyNTc2NH0.RBH_arMfHag7BZkSB3AXVXiMEZFI42GjBsEYdzzkscwFMBMFmtL0OZc2pbi4g61jeeHu_QOJX5QgwsQx5LjT4A","userEmail":"ravi@hallmarkphysio.com","userRoles":[{"recordStatus":null,"id":2,"loginId":null,"userId":1,"roleType":"ADM","roleDesc":"Admin"},{"recordStatus":null,"id":1,"loginId":null,"userId":1,"roleType":"SAD","roleDesc":"Super Admin"},{"recordStatus":null,"id":3,"loginId":null,"userId":1,"roleType":"DOC","roleDesc":"Doctor"}],"companyDTO":{"recordStatus":null,"id":1,"loginId":null,"companyName":"Hallmark Physiotherapy - Singapore","companySpecialization":"PHY","addressId":1,"companyContactPerson":"Mr Ravi","companyContactNo":"6258 8707","companyEmail":"sales@hallmarkphysio.com","companyWebsite":"https://hallmarkphysio.com/","companyRegNo":"200401172N","companyStatus":"AC","companyTimezone":"SST","companyBaseCurrency":"SGD","companyLogo":null,"parentCompanyId":null,"calendarTimeslot":"15","isTodayCalendarStartDate":"NO","companyTimezoneText":"Asia/Singapore","companyDialCode":"65","addressDTO":{"recordStatus":null,"id":1,"loginId":null,"addressLine1":"320 Thomson Road","addressLine2":null,"addressLine3":null,"postalCode":"307663","city":"Singapore","state":"01","country":"SGP","latitude":null,"longtitude":null},"customSchedules":[{"weeklyScheduleId":1,"weekDay":"MON","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":2,"weekDay":"TUE","isOpen":"YS","operatingTime":"08:00-20:00"},{"weeklyScheduleId":3,"weekDay":"WED","isOpen":"YS","operatingTime":"08:00-20:00"},{"weeklyScheduleId":4,"weekDay":"THU","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":5,"weekDay":"FRI","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":6,"weekDay":"SAT","isOpen":"YS","operatingTime":"08:00-13:00"},{"weeklyScheduleId":7,"weekDay":"SUN","isOpen":"NO","operatingTime":null}],"weeklyScheduleDTOs":[]},"companyDTOs":[{"recordStatus":null,"id":1,"loginId":null,"companyName":"Hallmark Physiotherapy - Singapore","companySpecialization":"PHY","addressId":1,"companyContactPerson":"Mr Ravi","companyContactNo":"6258 8707","companyEmail":"sales@hallmarkphysio.com","companyWebsite":"https://hallmarkphysio.com/","companyRegNo":"200401172N","companyStatus":"AC","companyTimezone":"SST","companyBaseCurrency":"SGD","companyLogo":null,"parentCompanyId":null,"calendarTimeslot":"15","isTodayCalendarStartDate":"NO","companyTimezoneText":"Asia/Singapore","companyDialCode":"65","addressDTO":{"recordStatus":null,"id":1,"loginId":null,"addressLine1":"320 Thomson Road","addressLine2":null,"addressLine3":null,"postalCode":"307663","city":"Singapore","state":"01","country":"SGP","latitude":null,"longtitude":null},"customSchedules":[{"weeklyScheduleId":1,"weekDay":"MON","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":2,"weekDay":"TUE","isOpen":"YS","operatingTime":"08:00-20:00"},{"weeklyScheduleId":3,"weekDay":"WED","isOpen":"YS","operatingTime":"08:00-20:00"},{"weeklyScheduleId":4,"weekDay":"THU","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":5,"weekDay":"FRI","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":6,"weekDay":"SAT","isOpen":"YS","operatingTime":"08:00-13:00"},{"weeklyScheduleId":7,"weekDay":"SUN","isOpen":"NO","operatingTime":null}],"weeklyScheduleDTOs":[]},{"recordStatus":null,"id":3,"loginId":null,"companyName":"Hallmark Physiotherapy - Ilo Ilo","companySpecialization":"PHY","addressId":3,"companyContactPerson":"Ms Rona","companyContactNo":"33322995","companyEmail":"info.iloilo@hallmarkphysio.com","companyWebsite":"https://hallmarkphysio.com/","companyRegNo":"1297809","companyStatus":"AC","companyTimezone":"PHT","companyBaseCurrency":"PHP","companyLogo":null,"parentCompanyId":null,"calendarTimeslot":"15","isTodayCalendarStartDate":"NO","companyTimezoneText":"Asia/Manila","companyDialCode":"63","addressDTO":{"recordStatus":null,"id":3,"loginId":null,"addressLine1":"Unit No 2, The Galleria","addressLine2":"Pacencia Pison Ave. Brgy. San","addressLine3":"Rafael Mandurriao","postalCode":"5000","city":"Ilo Ilo City","state":"38","country":"PHL","latitude":null,"longtitude":null},"customSchedules":[{"weeklyScheduleId":15,"weekDay":"MON","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":16,"weekDay":"TUE","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":17,"weekDay":"WED","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":18,"weekDay":"THU","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":19,"weekDay":"FRI","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":20,"weekDay":"SAT","isOpen":"YS","operatingTime":"09:00-17:00"},{"weeklyScheduleId":21,"weekDay":"SUN","isOpen":"NO","operatingTime":null}],"weeklyScheduleDTOs":[]},{"recordStatus":null,"id":4,"loginId":null,"companyName":"Hallmark Physiotherapy - Myanmar","companySpecialization":"PHY","addressId":4,"companyContactPerson":"Ms Khine","companyContactNo":"9453774354","companyEmail":"sales.mmr@hallmarkphysio.com","companyWebsite":"https://hallmarkphysio.com/","companyRegNo":"Pagaka/Htwekamala/13/16","companyStatus":"AC","companyTimezone":"MST","companyBaseCurrency":"MMK","companyLogo":null,"parentCompanyId":null,"calendarTimeslot":"15","isTodayCalendarStartDate":"NO","companyTimezoneText":"Asia/Rangoon","companyDialCode":"95","addressDTO":{"recordStatus":null,"id":4,"loginId":null,"addressLine1":"290 D4, Uwisara Road","addressLine2":"Kamaryut Township","addressLine3":null,"postalCode":"11041","city":"Yangon","state":"14","country":"MMR","latitude":null,"longtitude":null},"customSchedules":[{"weeklyScheduleId":22,"weekDay":"MON","isOpen":"YS","operatingTime":"10:00-17:00"},{"weeklyScheduleId":23,"weekDay":"TUE","isOpen":"YS","operatingTime":"10:00-17:00"},{"weeklyScheduleId":24,"weekDay":"WED","isOpen":"YS","operatingTime":"10:00-17:00"},{"weeklyScheduleId":25,"weekDay":"THU","isOpen":"YS","operatingTime":"10:00-17:00"},{"weeklyScheduleId":26,"weekDay":"FRI","isOpen":"YS","operatingTime":"10:00-17:00"},{"weeklyScheduleId":27,"weekDay":"SAT","isOpen":"YS","operatingTime":"09:00-13:00"},{"weeklyScheduleId":28,"weekDay":"SUN","isOpen":"NO","operatingTime":null}],"weeklyScheduleDTOs":[]},{"recordStatus":null,"id":2,"loginId":null,"companyName":"Hallmark physiotherapy - Johor Bahru","companySpecialization":"PHY","addressId":2,"companyContactPerson":"Ms Vaishu","companyContactNo":"7-220 0099","companyEmail":"info.jb@hallmarkphysio.com","companyWebsite":"https://hallmarkphysio.com/","companyRegNo":"201904003704 (LLP0022516-LGN)","companyStatus":"AC","companyTimezone":"MYT","companyBaseCurrency":"MYR","companyLogo":null,"parentCompanyId":null,"calendarTimeslot":"15","isTodayCalendarStartDate":"NO","companyTimezoneText":"Asia/Kuala_Lumpur","companyDialCode":"60","addressDTO":{"recordStatus":null,"id":2,"loginId":null,"addressLine1":"No 23, Level 1 Block B, Wisma Maria","addressLine2":"Jalan Ngee Heng","addressLine3":null,"postalCode":"80000","city":"Johor Bahru","state":"01","country":"MYS","latitude":null,"longtitude":null},"customSchedules":[{"weeklyScheduleId":8,"weekDay":"MON","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":9,"weekDay":"TUE","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":10,"weekDay":"WED","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":11,"weekDay":"THU","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":12,"weekDay":"FRI","isOpen":"YS","operatingTime":"08:00-18:00"},{"weeklyScheduleId":13,"weekDay":"SAT","isOpen":"YS","operatingTime":"08:00-13:00"},{"weeklyScheduleId":14,"weekDay":"SUN","isOpen":"YS","operatingTime":"08:00-18:00"}],"weeklyScheduleDTOs":[]}],success:true}

				// // res["data"]["success"] = true;
				// res["status"] === 200;
				if (res.status === 200 && res.data.success !== false) {
					localStorage.setItem("userInfo", JSON.stringify(res.data));
					MasterData.setMasterData();
					// PLace to get User Roles
					let roles = res.data.userRoles;

					let issuperadmin = roles.find((o) => o.roleType === "SAD");
					let isadmin = roles.find((o) => o.roleType === "ADM");

					
					if (issuperadmin != null || issuperadmin !== undefined) {
						AuthService.setIsSuperAdmin(true);
					} else {
						console.error(issuperadmin);
						AuthService.setIsSuperAdmin(false);
					}

					if (isadmin != null || isadmin !== undefined) {
						AuthService.setIsAdmin(true);
					} else {
						AuthService.setIsAdmin(false);
					}

					history.push("/dash-admin");

					// if (AuthService.getRole() === "Admin") {
					// 	localStorage.setItem("nav", "admindash");
					// 	history.push("/dash-admin");
					// } else if (AuthService.getRole() === "SuperAdmin") {
					// 	history.push("/dash-admin");
					// } else if (AuthService.getRole() === "Doctor") {
					// 	history.push("patient/index");
					// }
				} else {
					setMsg(res.data.message);
				}
			},
			(error) => {
				console.log(error);
				setMsg("Authentical Failed, possible bad credentials");
				history.push("/");
			},
		);
	}

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<div className='login_wrap'>
				<div className='login_left'>
					<img src={Featured} alt='hallmark academy logo' className='left_img' />
				</div>
				<div className='login_right'>
					<div className='form_block'>
						<form onSubmit={handleSubmit} noValidate autoComplete='off'>
							<div className='login_flex_container'>
								<div className='login_caps'>
									<img src={hallacademylogo} alt='hallmark academy logo' className='imgstyle' />
									<div className='academy__name'>Hallmark Client Management System</div>
								</div>
								<div>
									<TextField
										type='text'
										label='Enter Email'
										fullWidth
										margin='dense'
										name='email'
										value={values.email}
										onChange={handleChange}
									/>
									{errors.email && <p className='error'>{errors.email}</p>}
								</div>
								<div>
									<FormControl fullWidth>
										<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
										<Input
											id='standard-adornment-password'
											type={showPassword ? "text" : "password"}
											name='password'
											fullWidth
											margin='dense'
											value={values.password}
											onChange={handleChange}
											endAdornment={
												<InputAdornment position='end'>
													<IconButton
														aria-label='toggle password visibility'
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}>
														{showPassword ? <Visibility /> : <VisibilityOff />}
													</IconButton>
												</InputAdornment>
											}
										/>
									</FormControl>

									{errors.password && <p className='error'>{errors.password}</p>}
								</div>
								<div className='fgt_pass'>
									<div className='login_rememberme'>&nbsp;</div>
									<div className='login_forgotpass'>
										<Link to='/forgot-pass'>Forgot Password?</Link>
									</div>
								</div>
								<div className='error'>{msg}</div>

								<div className='styl--center'>
									<Button type='submit' variant='contained' color='primary'>
										Sign In
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
