import MasterService from "../../service/MasterService";
import Helper from "./helper";
import AuthService from "../../service/AuthService";

class MasterData {
	lookupTypes = {
		PatientGroup: "MDG",
		PatientReferral: "RFL",
		BloodGroup: "BGP",
		PatientRelationship: "REL",
		Ethnicity: "ETH",
		Nationality: "NAT",
		Occupation: "OCC",
		Country: "CNT",
		MedicalHistory: "MDH",
		AppointmentStatus: "APS",
		UserRole: "ROL",
		ItemTypes: "ITY",
		Manufacturers: "MFR",
		ExpenseTypes: "EXP",
		ConsumptionType: "CSM",
		DrugType: "DTY",
		StrengthUnit: "UST",
		CancellationTypes: "CNR",
		Locales: "LLE",
		TimeZones: "TIZ",
		StockingUnit: "UOM",
	};

	recordStatus = {
		update: "UPDATE",
		insert: "INSERT",
		delete: "DELETE",
	};

	pageMode = {
		Add: "ADD",
		Edit: "EDIT",
	};

	paymentModes = [
		{
			companyId: 1,
			id: 1,
			paymentModeName: "Cash",
		},
		{
			companyId: 1,
			id: 2,
			paymentModeName: "Cheque",
		},
		{
			companyId: 1,
			id: 3,
			paymentModeName: "Visa/Master",
		},
		{
			companyId: 1,
			id: 4,
			paymentModeName: "Nets",
		},
	];

	setMasterData() {
		MasterService.fetchAllLookup(AuthService.getLoggedInUserCompanyId()).then(() => {
			// const resultArray = Array.isArray(response.data) ? response.data : [];
			const resultArray = [{
				"lookupKey": "ADD",
				"lookupValue": "Added",
				"lookupType": "ACT",
				"lookupTypeDesc": "Inventory Actions",
				"companyId": 1
			}, {
				"lookupKey": "CON",
				"lookupValue": "Consumed",
				"lookupType": "ACT",
				"lookupTypeDesc": "Inventory Actions",
				"companyId": 1
			}, {
				"lookupKey": "CAN",
				"lookupValue": "Cancelled",
				"lookupType": "APS",
				"lookupTypeDesc": "Appointment Status",
				"companyId": 1
			}, {
				"lookupKey": "CON",
				"lookupValue": "Confirmed",
				"lookupType": "APS",
				"lookupTypeDesc": "Appointment Status",
				"companyId": 1
			}, {
				"lookupKey": "A",
				"lookupValue": "Appointment",
				"lookupType": "APY",
				"lookupTypeDesc": "Appointment Type",
				"companyId": 1
			}, {
				"lookupKey": "E",
				"lookupValue": "Event",
				"lookupType": "APY",
				"lookupTypeDesc": "Appointment Type",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "O+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "O-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "A+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "A-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "B+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "B-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "AB+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "AB-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "A1+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "A1-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "A1B+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "12",
				"lookupValue": "A1B-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "13",
				"lookupValue": "A2+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "14",
				"lookupValue": "A2-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "15",
				"lookupValue": "A2B+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "16",
				"lookupValue": "A2B-",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "17",
				"lookupValue": "B1+",
				"lookupType": "BGP",
				"lookupTypeDesc": "Blood Groups",
				"companyId": 1
			}, {
				"lookupKey": "CDT",
				"lookupValue": "Cancelled by Doctor",
				"lookupType": "CNR",
				"lookupTypeDesc": "Cancellation Reason",
				"companyId": 1
			}, {
				"lookupKey": "CPT",
				"lookupValue": "Cancelled by Patient",
				"lookupType": "CNR",
				"lookupTypeDesc": "Cancellation Reason",
				"companyId": 1
			}, {
				"lookupKey": "NSW",
				"lookupValue": "No Show Cancellation",
				"lookupType": "CNR",
				"lookupTypeDesc": "Cancellation Reason",
				"companyId": 1
			}, {
				"lookupKey": "MMR",
				"lookupValue": "Myanmar",
				"lookupType": "CNT",
				"lookupTypeDesc": "Countries",
				"companyId": 4
			}, {
				"lookupKey": "MYS",
				"lookupValue": "Malaysia",
				"lookupType": "CNT",
				"lookupTypeDesc": "Countries",
				"companyId": 2   //Changing Company ID to check
			}, {
				"lookupKey": "PHL",
				"lookupValue": "Philippines",
				"lookupType": "CNT",
				"lookupTypeDesc": "Countries",
				"companyId": 3
			}, {
				"lookupKey": "SGP",
				"lookupValue": "Singapore",
				"lookupType": "CNT",
				"lookupTypeDesc": "Countries",
				"companyId": 1
			}, {
				"lookupKey": "ADJ",
				"lookupValue": "Adjustment",
				"lookupType": "CSM",
				"lookupTypeDesc": "Consumption Type",
				"companyId": 1
			}, {
				"lookupKey": "DMG",
				"lookupValue": "Damaged",
				"lookupType": "CSM",
				"lookupTypeDesc": "Consumption Type",
				"companyId": 1
			}, {
				"lookupKey": "RET",
				"lookupValue": "Returned",
				"lookupType": "CSM",
				"lookupTypeDesc": "Consumption Type",
				"companyId": 1
			}, {
				"lookupKey": "SER",
				"lookupValue": "Services",
				"lookupType": "CSM",
				"lookupTypeDesc": "Consumption Type",
				"companyId": 1
			}, {
				"lookupKey": "SLD",
				"lookupValue": "Sold",
				"lookupType": "CSM",
				"lookupTypeDesc": "Consumption Type",
				"companyId": 1
			}, {
				"lookupKey": "BOT",
				"lookupValue": "Bottle",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "CAP",
				"lookupValue": "Capsule",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "CRE",
				"lookupValue": "Cream",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "CUS",
				"lookupValue": "Custom",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "DRO",
				"lookupValue": "Drops",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "FOA",
				"lookupValue": "Foam",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "GAR",
				"lookupValue": "Gargle",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "GEL",
				"lookupValue": "Gel",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "INH",
				"lookupValue": "Inhaler",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "INJ",
				"lookupValue": "Injection",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "LOT",
				"lookupValue": "Lotion",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "MED",
				"lookupValue": "Medirub",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "MOU",
				"lookupValue": "Mouthwash",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "OIN",
				"lookupValue": "Ointment",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "POW",
				"lookupValue": "Powder",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "SHA",
				"lookupValue": "Shampoo",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "SPT",
				"lookupValue": "Spray",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "SUS",
				"lookupValue": "Suspension",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "SYR",
				"lookupValue": "Syringe",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "TAB",
				"lookupValue": "Tablet",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "TOO",
				"lookupValue": "Toothpaste",
				"lookupType": "DTY",
				"lookupTypeDesc": "Drug Type",
				"companyId": 1
			}, {
				"lookupKey": "CH",
				"lookupValue": "Chinese",
				"lookupType": "ETH",
				"lookupTypeDesc": "Ethnicity",
				"companyId": 1
			}, {
				"lookupKey": "IN",
				"lookupValue": "Indian",
				"lookupType": "ETH",
				"lookupTypeDesc": "Ethnicity",
				"companyId": 1
			}, {
				"lookupKey": "ML",
				"lookupValue": "Malay",
				"lookupType": "ETH",
				"lookupTypeDesc": "Ethnicity",
				"companyId": 1
			}, {
				"lookupKey": "OT",
				"lookupValue": "Other",
				"lookupType": "ETH",
				"lookupTypeDesc": "Ethnicity",
				"companyId": 1
			}, {
				"lookupKey": "EBL",
				"lookupValue": "Electricity Bill",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "LAB",
				"lookupValue": "Lab Charges",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "MAT",
				"lookupValue": "Materials",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "MEM",
				"lookupValue": "Membership Expense",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "OTH",
				"lookupValue": "Others",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "PER",
				"lookupValue": "Personal",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "SAL",
				"lookupValue": "Salary",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "TEL",
				"lookupValue": "Telephone Bill",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "WAT",
				"lookupValue": "Water Bill",
				"lookupType": "EXP",
				"lookupTypeDesc": "Expense Types",
				"companyId": 1
			}, {
				"lookupKey": "F",
				"lookupValue": "Female",
				"lookupType": "GEN",
				"lookupTypeDesc": "Gender",
				"companyId": 1
			}, {
				"lookupKey": "M",
				"lookupValue": "Male",
				"lookupType": "GEN",
				"lookupTypeDesc": "Gender",
				"companyId": 1
			}, {
				"lookupKey": "O",
				"lookupValue": "Others",
				"lookupType": "GEN",
				"lookupTypeDesc": "Gender",
				"companyId": 1
			}, {
				"lookupKey": "FEM",
				"lookupValue": "NOVEMBER",
				"lookupType": "INF",
				"lookupTypeDesc": "Invoice Format",
				"companyId": 1
			}, {
				"lookupKey": "FSM",
				"lookupValue": "DECEMBER",
				"lookupType": "INF",
				"lookupTypeDesc": "Invoice Format",
				"companyId": 1
			}, {
				"lookupKey": "MOY",
				"lookupValue": "SEQUENCE",
				"lookupType": "INF",
				"lookupTypeDesc": "Invoice Format",
				"companyId": 1
			}, {
				"lookupKey": "SEQ",
				"lookupValue": "100",
				"lookupType": "INF",
				"lookupTypeDesc": "Invoice Format",
				"companyId": 1
			}, {
				"lookupKey": "60",
				"lookupValue": "Malaysia(+60)",
				"lookupType": "ISD",
				"lookupTypeDesc": "International Dial Codes",
				"companyId": 1
			}, {
				"lookupKey": "63",
				"lookupValue": "Philippines(+63)",
				"lookupType": "ISD",
				"lookupTypeDesc": "International Dial Codes",
				"companyId": 1
			}, {
				"lookupKey": "65",
				"lookupValue": "Singapore(+65)",
				"lookupType": "ISD",
				"lookupTypeDesc": "International Dial Codes",
				"companyId": 1
			}, {
				"lookupKey": "95",
				"lookupValue": "Myanmar(+95)",
				"lookupType": "ISD",
				"lookupTypeDesc": "International Dial Codes",
				"companyId": 1
			}, {
				"lookupKey": "DRG",
				"lookupValue": "Drug",
				"lookupType": "ITY",
				"lookupTypeDesc": "Item Types",
				"companyId": 1
			}, {
				"lookupKey": "EQP",
				"lookupValue": "Equipment",
				"lookupType": "ITY",
				"lookupTypeDesc": "Item Types",
				"companyId": 1
			}, {
				"lookupKey": "SUP",
				"lookupValue": "Supplies",
				"lookupType": "ITY",
				"lookupTypeDesc": "Item Types",
				"companyId": 1
			}, {
				"lookupKey": "ADV",
				"lookupValue": "Advance Payment",
				"lookupType": "LGT",
				"lookupTypeDesc": "Ledger Type",
				"companyId": 1
			}, {
				"lookupKey": "INV",
				"lookupValue": "Invoice",
				"lookupType": "LGT",
				"lookupTypeDesc": "Ledger Type",
				"companyId": 1
			}, {
				"lookupKey": "PYT",
				"lookupValue": "Payment",
				"lookupType": "LGT",
				"lookupTypeDesc": "Ledger Type",
				"companyId": 1
			}, {
				"lookupKey": "MMR",
				"lookupValue": "my",
				"lookupType": "LLE",
				"lookupTypeDesc": "Locales",
				"companyId": 1
			}, {
				"lookupKey": "MYS",
				"lookupValue": "ms-MY",
				"lookupType": "LLE",
				"lookupTypeDesc": "Locales",
				"companyId": 1
			}, {
				"lookupKey": "PHL",
				"lookupValue": "en-PH",
				"lookupType": "LLE",
				"lookupTypeDesc": "Locales",
				"companyId": 1
			}, {
				"lookupKey": "SGP",
				"lookupValue": "en-SG",
				"lookupType": "LLE",
				"lookupTypeDesc": "Locales",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "CIGNA EUROPE INSURANCE",
				"lookupType": "MDG",
				"lookupTypeDesc": "Medical Groups",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "IHP",
				"lookupType": "MDG",
				"lookupTypeDesc": "Medical Groups",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "PILLAY",
				"lookupType": "MDG",
				"lookupTypeDesc": "Medical Groups",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "CSC",
				"lookupType": "MDG",
				"lookupTypeDesc": "Medical Groups",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Hypertension",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Diabetes",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Asthma",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Epilepsy",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Heart Disease",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Allergies",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "Gastric Ulcers",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "Pregnant/Breast Feeding",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "% Body Fat",
				"lookupType": "MDH",
				"lookupTypeDesc": "Medical History",
				"companyId": 1
			}, {
				"lookupKey": "FTC",
				"lookupValue": "Feet Care",
				"lookupType": "MFR",
				"lookupTypeDesc": "Manufacturers",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Ayeyarwady Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Bago Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Chin State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Kachin State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Kayah State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Kayin State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "Magway Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "Mandalay Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "Mon State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "Rakhine State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "Shan State",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "12",
				"lookupValue": "Sagaing Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "13",
				"lookupValue": "Tanintharyi Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "14",
				"lookupValue": "Yangon Region",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "15",
				"lookupValue": "Naypyidaw Union Territory",
				"lookupType": "MMR",
				"lookupTypeDesc": "Myanmar States",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Johor",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Kedah",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Kelantan",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Kuala Lumpur",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Labuan",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Malacca",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "Negeri Sembilan",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "Pahang",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "Penang",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "Perak",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "Perlis",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "12",
				"lookupValue": "Putrajaya",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "13",
				"lookupValue": "Sabah",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "14",
				"lookupValue": "Sarawak",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "15",
				"lookupValue": "Selangor",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "16",
				"lookupValue": "Terengganu",
				"lookupType": "MYS",
				"lookupTypeDesc": "Malaysia States",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Afgan",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Albanian",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Bangladeshi",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Bhutanese",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Burmese",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Cambodian",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "Chinese",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "Filipino",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "Indian",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "Indonesian",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "Malaysian",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "12",
				"lookupValue": "Pakistani",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "13",
				"lookupValue": "South Korean",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "14",
				"lookupValue": "Sri Lankan",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "15",
				"lookupValue": "Taiwanese",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "16",
				"lookupValue": "Thai",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "17",
				"lookupValue": "Vietnamese",
				"lookupType": "NAT",
				"lookupTypeDesc": "Nationality",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Account Collector",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Accountant",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Accounting Clerk",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Actor",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Administrative Assistant",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Others",
				"lookupType": "OCC",
				"lookupTypeDesc": "Occupation",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Abra",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "Agusan del Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "Agusan del Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "Aklan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "Albay",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "Antique",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "Apayao",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "Aurora",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "Basilan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "Bataan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "Batanes",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "12",
				"lookupValue": "Batangas",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "13",
				"lookupValue": "Benguet",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "14",
				"lookupValue": "Biliran",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "15",
				"lookupValue": "Bohol",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "16",
				"lookupValue": "Bukidnon",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "17",
				"lookupValue": "Bulacan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "18",
				"lookupValue": "Cagayan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "19",
				"lookupValue": "Camarines Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "20",
				"lookupValue": "Camarines Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "21",
				"lookupValue": "Camiguin",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "22",
				"lookupValue": "Capiz",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "23",
				"lookupValue": "Catanduanes",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "24",
				"lookupValue": "Cavite",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "25",
				"lookupValue": "Cebu",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "26",
				"lookupValue": "Cotabato",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "27",
				"lookupValue": "Davao de Oro",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "28",
				"lookupValue": "Davao del Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "29",
				"lookupValue": "Davao del Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "30",
				"lookupValue": "Davao Occidental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "31",
				"lookupValue": "Davao Oriental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "32",
				"lookupValue": "Dinagat Islands",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "33",
				"lookupValue": "Eastern Samar",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "34",
				"lookupValue": "Guimaras",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "35",
				"lookupValue": "Ifugao",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "36",
				"lookupValue": "Ilocos Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "37",
				"lookupValue": "Ilocos Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "38",
				"lookupValue": "Iloilo",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "39",
				"lookupValue": "Isabela",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "40",
				"lookupValue": "Kalinga",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "41",
				"lookupValue": "La Union",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "42",
				"lookupValue": "Laguna",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "43",
				"lookupValue": "Lanao del Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "44",
				"lookupValue": "Lanao del Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "45",
				"lookupValue": "Leyte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "46",
				"lookupValue": "Maguindanao",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "47",
				"lookupValue": "Marinduque",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "48",
				"lookupValue": "Masbate",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "49",
				"lookupValue": "Metro Manila",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "50",
				"lookupValue": "Misamis Occidental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "51",
				"lookupValue": "Misamis Oriental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "52",
				"lookupValue": "Mountain Province",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "53",
				"lookupValue": "Negros Occidental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "54",
				"lookupValue": "Negros Oriental",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "55",
				"lookupValue": "Northern Samar",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "56",
				"lookupValue": "Nueva Ecija",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "57",
				"lookupValue": "Nueva Vizcaya",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "58",
				"lookupValue": "Occidental Mindoro",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "59",
				"lookupValue": "Oriental Mindoro",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "60",
				"lookupValue": "Palawan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "61",
				"lookupValue": "Pampanga",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "62",
				"lookupValue": "Pangasinan",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "63",
				"lookupValue": "Quezon",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "64",
				"lookupValue": "Quirino",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "65",
				"lookupValue": "Rizal",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "66",
				"lookupValue": "Romblon",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "67",
				"lookupValue": "Samar",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "68",
				"lookupValue": "Sarangani",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "69",
				"lookupValue": "Siquijor",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "70",
				"lookupValue": "Sorsogon",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "71",
				"lookupValue": "South Cotabato",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "72",
				"lookupValue": "Southern Leyte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "73",
				"lookupValue": "Sultan Kudarat",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "74",
				"lookupValue": "Sulu",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "75",
				"lookupValue": "Surigao del Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "76",
				"lookupValue": "Surigao del Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "77",
				"lookupValue": "Tarlac",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "78",
				"lookupValue": "Tawi-Tawi ",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "79",
				"lookupValue": "Zambales",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "80",
				"lookupValue": "Zamboanga del Norte",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "81",
				"lookupValue": "Zamboanga del Sur",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "82",
				"lookupValue": "Zamboanga Sibugay",
				"lookupType": "PHL",
				"lookupTypeDesc": "Philippines States",
				"companyId": 1
			}, {
				"lookupKey": "CAS",
				"lookupValue": "Cash",
				"lookupType": "PYT",
				"lookupTypeDesc": "Payment Types",
				"companyId": 1
			}, {
				"lookupKey": "CQE",
				"lookupValue": "Cheque",
				"lookupType": "PYT",
				"lookupTypeDesc": "Payment Types",
				"companyId": 1
			}, {
				"lookupKey": "CRD",
				"lookupValue": "Card",
				"lookupType": "PYT",
				"lookupTypeDesc": "Payment Types",
				"companyId": 1
			}, {
				"lookupKey": "NET",
				"lookupValue": "Netbanking",
				"lookupType": "PYT",
				"lookupTypeDesc": "Payment Types",
				"companyId": 1
			}, {
				"lookupKey": "BR",
				"lookupValue": "Brother",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "CH",
				"lookupValue": "Child",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "CO",
				"lookupValue": "Cousin",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "GF",
				"lookupValue": "Grandfather",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "GM",
				"lookupValue": "Grandmother",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "NN",
				"lookupValue": "Nephew/Niece",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "PA",
				"lookupValue": "Parent",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "SI",
				"lookupValue": "Sister",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "SP",
				"lookupValue": "Spouse",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "UA",
				"lookupValue": "Uncle/Aunt",
				"lookupType": "REL",
				"lookupTypeDesc": "Relationship",
				"companyId": 1
			}, {
				"lookupKey": "AP",
				"lookupValue": "Another Patient",
				"lookupType": "RFL",
				"lookupTypeDesc": "Referrals",
				"companyId": 1
			}, {
				"lookupKey": "GL",
				"lookupValue": "Google",
				"lookupType": "RFL",
				"lookupTypeDesc": "Referrals",
				"companyId": 1
			}, {
				"lookupKey": "JD",
				"lookupValue": "Just Dial",
				"lookupType": "RFL",
				"lookupTypeDesc": "Referrals",
				"companyId": 1
			}, {
				"lookupKey": "PIL",
				"lookupValue": "Dr Pillay",
				"lookupType": "RFL",
				"lookupTypeDesc": "Referrals",
				"companyId": 1
			}, {
				"lookupKey": "WL",
				"lookupValue": "Walk-In",
				"lookupType": "RFL",
				"lookupTypeDesc": "Referrals",
				"companyId": 1
			}, {
				"lookupKey": "ADM",
				"lookupValue": "Admin",
				"lookupType": "ROL",
				"lookupTypeDesc": "Roles",
				"companyId": 1
			}, {
				"lookupKey": "DOC",
				"lookupValue": "Doctor",
				"lookupType": "ROL",
				"lookupTypeDesc": "Roles",
				"companyId": 1
			}, {
				"lookupKey": "SAD",
				"lookupValue": "Super Admin",
				"lookupType": "ROL",
				"lookupTypeDesc": "Roles",
				"companyId": 1
			}, {
				"lookupKey": "STF",
				"lookupValue": "Staff",
				"lookupType": "ROL",
				"lookupTypeDesc": "Roles",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "Singapore",
				"lookupType": "SGP",
				"lookupTypeDesc": "Singapore States",
				"companyId": 1
			}, {
				"lookupKey": "PHY",
				"lookupValue": "Physiotherapist",
				"lookupType": "SPL",
				"lookupTypeDesc": "Company Specialization",
				"companyId": 1
			}, {
				"lookupKey": "PMN",
				"lookupValue": "Pain Management",
				"lookupType": "SPL",
				"lookupTypeDesc": "Company Specialization",
				"companyId": 1
			}, {
				"lookupKey": "PTP",
				"lookupValue": "Physical Theraphy",
				"lookupType": "SPL",
				"lookupTypeDesc": "Company Specialization",
				"companyId": 1
			}, {
				"lookupKey": "AC",
				"lookupValue": "Active",
				"lookupType": "STS",
				"lookupTypeDesc": "General Status",
				"companyId": 1
			}, {
				"lookupKey": "IC",
				"lookupValue": "Active",
				"lookupType": "STS",
				"lookupTypeDesc": "General Status",
				"companyId": 1
			}, {
				"lookupKey": "ICT",
				"lookupValue": "Asia/Bangkok",
				"lookupType": "TIZ",
				"lookupTypeDesc": "Timezones",
				"companyId": 1
			}, {
				"lookupKey": "MST",
				"lookupValue": "Asia/Rangoon",
				"lookupType": "TIZ",
				"lookupTypeDesc": "Timezones",
				"companyId": 1
			}, {
				"lookupKey": "MYT",
				"lookupValue": "Asia/Kuala_Lumpur",
				"lookupType": "TIZ",
				"lookupTypeDesc": "Timezones",
				"companyId": 1
			}, {
				"lookupKey": "PHT",
				"lookupValue": "Asia/Manila",
				"lookupType": "TIZ",
				"lookupTypeDesc": "Timezones",
				"companyId": 1
			}, {
				"lookupKey": "SST",
				"lookupValue": "Asia/Singapore",
				"lookupType": "TIZ",
				"lookupTypeDesc": "Timezones",
				"companyId": 1
			}, {
				"lookupKey": "UNT",
				"lookupValue": "Unit",
				"lookupType": "UOM",
				"lookupTypeDesc": "Unit of Measure",
				"companyId": 1
			}, {
				"lookupKey": "01",
				"lookupValue": "gm",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "02",
				"lookupValue": "% w/w",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "03",
				"lookupValue": "% w/v",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "04",
				"lookupValue": "%",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "05",
				"lookupValue": "units",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "06",
				"lookupValue": "IU",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "07",
				"lookupValue": "million spores",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "08",
				"lookupValue": "mg SR",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "09",
				"lookupValue": "mg",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "10",
				"lookupValue": "mcg",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "11",
				"lookupValue": "NA",
				"lookupType": "UST",
				"lookupTypeDesc": "Stregth Unit",
				"companyId": 1
			}, {
				"lookupKey": "NO",
				"lookupValue": "No",
				"lookupType": "YSN",
				"lookupTypeDesc": "Yes / No",
				"companyId": 1
			}, {
				"lookupKey": "YS",
				"lookupValue": "Yes",
				"lookupType": "YSN",
				"lookupTypeDesc": "Yes / No",
				"companyId": 1
			}];

			localStorage.setItem("lookupdata", JSON.stringify(resultArray));
		});
	}

	getLookupValueFromKey(keyName, lookupType) {
		if (keyName == null || keyName === null) return "";
		const lookupArray = JSON.parse(localStorage.getItem("lookupdata"));

		const lookupObj = lookupArray !== null && lookupArray.find((x) => x.lookupKey === keyName && x.lookupType === lookupType);
		return !(lookupObj == null) ? lookupObj.lookupValue : null;
		/*  return (
      lookupArray.find(
        (x) => x.lookupKey === keyName && x.lookupType === lookupType
      ).lookupValue  
    );*/
	}

	getLookupDataFromType(lookupType) {
		if (lookupType == null || lookupType === null) return [];
		const lookupArray = [{
			"lookupKey": "ADD",
			"lookupValue": "Added",
			"lookupType": "ACT",
			"lookupTypeDesc": "Inventory Actions",
			"companyId": 1
		}, {
			"lookupKey": "CON",
			"lookupValue": "Consumed",
			"lookupType": "ACT",
			"lookupTypeDesc": "Inventory Actions",
			"companyId": 1
		}, {
			"lookupKey": "CAN",
			"lookupValue": "Cancelled",
			"lookupType": "APS",
			"lookupTypeDesc": "Appointment Status",
			"companyId": 1
		}, {
			"lookupKey": "CON",
			"lookupValue": "Confirmed",
			"lookupType": "APS",
			"lookupTypeDesc": "Appointment Status",
			"companyId": 1
		}, {
			"lookupKey": "A",
			"lookupValue": "Appointment",
			"lookupType": "APY",
			"lookupTypeDesc": "Appointment Type",
			"companyId": 1
		}, {
			"lookupKey": "E",
			"lookupValue": "Event",
			"lookupType": "APY",
			"lookupTypeDesc": "Appointment Type",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "O+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "O-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "A+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "A-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "B+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "B-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "AB+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "AB-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "A1+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "A1-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "A1B+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "12",
			"lookupValue": "A1B-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "13",
			"lookupValue": "A2+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "14",
			"lookupValue": "A2-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "15",
			"lookupValue": "A2B+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "16",
			"lookupValue": "A2B-",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "17",
			"lookupValue": "B1+",
			"lookupType": "BGP",
			"lookupTypeDesc": "Blood Groups",
			"companyId": 1
		}, {
			"lookupKey": "CDT",
			"lookupValue": "Cancelled by Doctor",
			"lookupType": "CNR",
			"lookupTypeDesc": "Cancellation Reason",
			"companyId": 1
		}, {
			"lookupKey": "CPT",
			"lookupValue": "Cancelled by Patient",
			"lookupType": "CNR",
			"lookupTypeDesc": "Cancellation Reason",
			"companyId": 1
		}, {
			"lookupKey": "NSW",
			"lookupValue": "No Show Cancellation",
			"lookupType": "CNR",
			"lookupTypeDesc": "Cancellation Reason",
			"companyId": 1
		}, {
			"lookupKey": "MMR",
			"lookupValue": "Myanmar",
			"lookupType": "CNT",
			"lookupTypeDesc": "Countries",
			"companyId": 1
		}, {
			"lookupKey": "MYS",
			"lookupValue": "Malaysia",
			"lookupType": "CNT",
			"lookupTypeDesc": "Countries",
			"companyId": 1
		}, {
			"lookupKey": "PHL",
			"lookupValue": "Philippines",
			"lookupType": "CNT",
			"lookupTypeDesc": "Countries",
			"companyId": 1
		}, {
			"lookupKey": "SGP",
			"lookupValue": "Singapore",
			"lookupType": "CNT",
			"lookupTypeDesc": "Countries",
			"companyId": 1
		}, {
			"lookupKey": "ADJ",
			"lookupValue": "Adjustment",
			"lookupType": "CSM",
			"lookupTypeDesc": "Consumption Type",
			"companyId": 1
		}, {
			"lookupKey": "DMG",
			"lookupValue": "Damaged",
			"lookupType": "CSM",
			"lookupTypeDesc": "Consumption Type",
			"companyId": 1
		}, {
			"lookupKey": "RET",
			"lookupValue": "Returned",
			"lookupType": "CSM",
			"lookupTypeDesc": "Consumption Type",
			"companyId": 1
		}, {
			"lookupKey": "SER",
			"lookupValue": "Services",
			"lookupType": "CSM",
			"lookupTypeDesc": "Consumption Type",
			"companyId": 1
		}, {
			"lookupKey": "SLD",
			"lookupValue": "Sold",
			"lookupType": "CSM",
			"lookupTypeDesc": "Consumption Type",
			"companyId": 1
		}, {
			"lookupKey": "BOT",
			"lookupValue": "Bottle",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "CAP",
			"lookupValue": "Capsule",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "CRE",
			"lookupValue": "Cream",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "CUS",
			"lookupValue": "Custom",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "DRO",
			"lookupValue": "Drops",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "FOA",
			"lookupValue": "Foam",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "GAR",
			"lookupValue": "Gargle",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "GEL",
			"lookupValue": "Gel",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "INH",
			"lookupValue": "Inhaler",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "INJ",
			"lookupValue": "Injection",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "LOT",
			"lookupValue": "Lotion",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "MED",
			"lookupValue": "Medirub",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "MOU",
			"lookupValue": "Mouthwash",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "OIN",
			"lookupValue": "Ointment",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "POW",
			"lookupValue": "Powder",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "SHA",
			"lookupValue": "Shampoo",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "SPT",
			"lookupValue": "Spray",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "SUS",
			"lookupValue": "Suspension",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "SYR",
			"lookupValue": "Syringe",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "TAB",
			"lookupValue": "Tablet",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "TOO",
			"lookupValue": "Toothpaste",
			"lookupType": "DTY",
			"lookupTypeDesc": "Drug Type",
			"companyId": 1
		}, {
			"lookupKey": "CH",
			"lookupValue": "Chinese",
			"lookupType": "ETH",
			"lookupTypeDesc": "Ethnicity",
			"companyId": 1
		}, {
			"lookupKey": "IN",
			"lookupValue": "Indian",
			"lookupType": "ETH",
			"lookupTypeDesc": "Ethnicity",
			"companyId": 1
		}, {
			"lookupKey": "ML",
			"lookupValue": "Malay",
			"lookupType": "ETH",
			"lookupTypeDesc": "Ethnicity",
			"companyId": 1
		}, {
			"lookupKey": "OT",
			"lookupValue": "Other",
			"lookupType": "ETH",
			"lookupTypeDesc": "Ethnicity",
			"companyId": 1
		}, {
			"lookupKey": "EBL",
			"lookupValue": "Electricity Bill",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "LAB",
			"lookupValue": "Lab Charges",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "MAT",
			"lookupValue": "Materials",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "MEM",
			"lookupValue": "Membership Expense",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "OTH",
			"lookupValue": "Others",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "PER",
			"lookupValue": "Personal",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "SAL",
			"lookupValue": "Salary",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "TEL",
			"lookupValue": "Telephone Bill",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "WAT",
			"lookupValue": "Water Bill",
			"lookupType": "EXP",
			"lookupTypeDesc": "Expense Types",
			"companyId": 1
		}, {
			"lookupKey": "F",
			"lookupValue": "Female",
			"lookupType": "GEN",
			"lookupTypeDesc": "Gender",
			"companyId": 1
		}, {
			"lookupKey": "M",
			"lookupValue": "Male",
			"lookupType": "GEN",
			"lookupTypeDesc": "Gender",
			"companyId": 1
		}, {
			"lookupKey": "O",
			"lookupValue": "Others",
			"lookupType": "GEN",
			"lookupTypeDesc": "Gender",
			"companyId": 1
		}, {
			"lookupKey": "FEM",
			"lookupValue": "NOVEMBER",
			"lookupType": "INF",
			"lookupTypeDesc": "Invoice Format",
			"companyId": 1
		}, {
			"lookupKey": "FSM",
			"lookupValue": "DECEMBER",
			"lookupType": "INF",
			"lookupTypeDesc": "Invoice Format",
			"companyId": 1
		}, {
			"lookupKey": "MOY",
			"lookupValue": "SEQUENCE",
			"lookupType": "INF",
			"lookupTypeDesc": "Invoice Format",
			"companyId": 1
		}, {
			"lookupKey": "SEQ",
			"lookupValue": "100",
			"lookupType": "INF",
			"lookupTypeDesc": "Invoice Format",
			"companyId": 1
		}, {
			"lookupKey": "60",
			"lookupValue": "Malaysia(+60)",
			"lookupType": "ISD",
			"lookupTypeDesc": "International Dial Codes",
			"companyId": 1
		}, {
			"lookupKey": "63",
			"lookupValue": "Philippines(+63)",
			"lookupType": "ISD",
			"lookupTypeDesc": "International Dial Codes",
			"companyId": 1
		}, {
			"lookupKey": "65",
			"lookupValue": "Singapore(+65)",
			"lookupType": "ISD",
			"lookupTypeDesc": "International Dial Codes",
			"companyId": 1
		}, {
			"lookupKey": "95",
			"lookupValue": "Myanmar(+95)",
			"lookupType": "ISD",
			"lookupTypeDesc": "International Dial Codes",
			"companyId": 1
		}, {
			"lookupKey": "DRG",
			"lookupValue": "Drug",
			"lookupType": "ITY",
			"lookupTypeDesc": "Item Types",
			"companyId": 1
		}, {
			"lookupKey": "EQP",
			"lookupValue": "Equipment",
			"lookupType": "ITY",
			"lookupTypeDesc": "Item Types",
			"companyId": 1
		}, {
			"lookupKey": "SUP",
			"lookupValue": "Supplies",
			"lookupType": "ITY",
			"lookupTypeDesc": "Item Types",
			"companyId": 1
		}, {
			"lookupKey": "ADV",
			"lookupValue": "Advance Payment",
			"lookupType": "LGT",
			"lookupTypeDesc": "Ledger Type",
			"companyId": 1
		}, {
			"lookupKey": "INV",
			"lookupValue": "Invoice",
			"lookupType": "LGT",
			"lookupTypeDesc": "Ledger Type",
			"companyId": 1
		}, {
			"lookupKey": "PYT",
			"lookupValue": "Payment",
			"lookupType": "LGT",
			"lookupTypeDesc": "Ledger Type",
			"companyId": 1
		}, {
			"lookupKey": "MMR",
			"lookupValue": "my",
			"lookupType": "LLE",
			"lookupTypeDesc": "Locales",
			"companyId": 1
		}, {
			"lookupKey": "MYS",
			"lookupValue": "ms-MY",
			"lookupType": "LLE",
			"lookupTypeDesc": "Locales",
			"companyId": 1
		}, {
			"lookupKey": "PHL",
			"lookupValue": "en-PH",
			"lookupType": "LLE",
			"lookupTypeDesc": "Locales",
			"companyId": 1
		}, {
			"lookupKey": "SGP",
			"lookupValue": "en-SG",
			"lookupType": "LLE",
			"lookupTypeDesc": "Locales",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "CIGNA EUROPE INSURANCE",
			"lookupType": "MDG",
			"lookupTypeDesc": "Medical Groups",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "IHP",
			"lookupType": "MDG",
			"lookupTypeDesc": "Medical Groups",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "PILLAY",
			"lookupType": "MDG",
			"lookupTypeDesc": "Medical Groups",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "CSC",
			"lookupType": "MDG",
			"lookupTypeDesc": "Medical Groups",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Hypertension",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Diabetes",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Asthma",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Epilepsy",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Heart Disease",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Allergies",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "Gastric Ulcers",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "Pregnant/Breast Feeding",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "% Body Fat",
			"lookupType": "MDH",
			"lookupTypeDesc": "Medical History",
			"companyId": 1
		}, {
			"lookupKey": "FTC",
			"lookupValue": "Feet Care",
			"lookupType": "MFR",
			"lookupTypeDesc": "Manufacturers",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Ayeyarwady Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Bago Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Chin State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Kachin State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Kayah State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Kayin State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "Magway Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "Mandalay Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "Mon State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "Rakhine State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "Shan State",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "12",
			"lookupValue": "Sagaing Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "13",
			"lookupValue": "Tanintharyi Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "14",
			"lookupValue": "Yangon Region",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "15",
			"lookupValue": "Naypyidaw Union Territory",
			"lookupType": "MMR",
			"lookupTypeDesc": "Myanmar States",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Johor",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Kedah",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Kelantan",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Kuala Lumpur",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Labuan",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Malacca",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "Negeri Sembilan",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "Pahang",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "Penang",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "Perak",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "Perlis",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "12",
			"lookupValue": "Putrajaya",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "13",
			"lookupValue": "Sabah",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "14",
			"lookupValue": "Sarawak",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "15",
			"lookupValue": "Selangor",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "16",
			"lookupValue": "Terengganu",
			"lookupType": "MYS",
			"lookupTypeDesc": "Malaysia States",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Afgan",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Albanian",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Bangladeshi",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Bhutanese",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Burmese",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Cambodian",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "Chinese",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "Filipino",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "Indian",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "Indonesian",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "Malaysian",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "12",
			"lookupValue": "Pakistani",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "13",
			"lookupValue": "South Korean",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "14",
			"lookupValue": "Sri Lankan",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "15",
			"lookupValue": "Taiwanese",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "16",
			"lookupValue": "Thai",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "17",
			"lookupValue": "Vietnamese",
			"lookupType": "NAT",
			"lookupTypeDesc": "Nationality",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Account Collector",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Accountant",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Accounting Clerk",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Actor",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Administrative Assistant",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Others",
			"lookupType": "OCC",
			"lookupTypeDesc": "Occupation",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Abra",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "Agusan del Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "Agusan del Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "Aklan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "Albay",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "Antique",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "Apayao",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "Aurora",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "Basilan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "Bataan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "Batanes",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "12",
			"lookupValue": "Batangas",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "13",
			"lookupValue": "Benguet",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "14",
			"lookupValue": "Biliran",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "15",
			"lookupValue": "Bohol",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "16",
			"lookupValue": "Bukidnon",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "17",
			"lookupValue": "Bulacan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "18",
			"lookupValue": "Cagayan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "19",
			"lookupValue": "Camarines Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "20",
			"lookupValue": "Camarines Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "21",
			"lookupValue": "Camiguin",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "22",
			"lookupValue": "Capiz",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "23",
			"lookupValue": "Catanduanes",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "24",
			"lookupValue": "Cavite",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "25",
			"lookupValue": "Cebu",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "26",
			"lookupValue": "Cotabato",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "27",
			"lookupValue": "Davao de Oro",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "28",
			"lookupValue": "Davao del Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "29",
			"lookupValue": "Davao del Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "30",
			"lookupValue": "Davao Occidental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "31",
			"lookupValue": "Davao Oriental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "32",
			"lookupValue": "Dinagat Islands",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "33",
			"lookupValue": "Eastern Samar",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "34",
			"lookupValue": "Guimaras",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "35",
			"lookupValue": "Ifugao",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "36",
			"lookupValue": "Ilocos Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "37",
			"lookupValue": "Ilocos Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "38",
			"lookupValue": "Iloilo",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "39",
			"lookupValue": "Isabela",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "40",
			"lookupValue": "Kalinga",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "41",
			"lookupValue": "La Union",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "42",
			"lookupValue": "Laguna",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "43",
			"lookupValue": "Lanao del Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "44",
			"lookupValue": "Lanao del Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "45",
			"lookupValue": "Leyte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "46",
			"lookupValue": "Maguindanao",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "47",
			"lookupValue": "Marinduque",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "48",
			"lookupValue": "Masbate",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "49",
			"lookupValue": "Metro Manila",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "50",
			"lookupValue": "Misamis Occidental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "51",
			"lookupValue": "Misamis Oriental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "52",
			"lookupValue": "Mountain Province",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "53",
			"lookupValue": "Negros Occidental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "54",
			"lookupValue": "Negros Oriental",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "55",
			"lookupValue": "Northern Samar",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "56",
			"lookupValue": "Nueva Ecija",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "57",
			"lookupValue": "Nueva Vizcaya",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "58",
			"lookupValue": "Occidental Mindoro",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "59",
			"lookupValue": "Oriental Mindoro",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "60",
			"lookupValue": "Palawan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "61",
			"lookupValue": "Pampanga",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "62",
			"lookupValue": "Pangasinan",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "63",
			"lookupValue": "Quezon",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "64",
			"lookupValue": "Quirino",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "65",
			"lookupValue": "Rizal",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "66",
			"lookupValue": "Romblon",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "67",
			"lookupValue": "Samar",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "68",
			"lookupValue": "Sarangani",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "69",
			"lookupValue": "Siquijor",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "70",
			"lookupValue": "Sorsogon",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "71",
			"lookupValue": "South Cotabato",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "72",
			"lookupValue": "Southern Leyte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "73",
			"lookupValue": "Sultan Kudarat",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "74",
			"lookupValue": "Sulu",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "75",
			"lookupValue": "Surigao del Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "76",
			"lookupValue": "Surigao del Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "77",
			"lookupValue": "Tarlac",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "78",
			"lookupValue": "Tawi-Tawi ",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "79",
			"lookupValue": "Zambales",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "80",
			"lookupValue": "Zamboanga del Norte",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "81",
			"lookupValue": "Zamboanga del Sur",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "82",
			"lookupValue": "Zamboanga Sibugay",
			"lookupType": "PHL",
			"lookupTypeDesc": "Philippines States",
			"companyId": 1
		}, {
			"lookupKey": "CAS",
			"lookupValue": "Cash",
			"lookupType": "PYT",
			"lookupTypeDesc": "Payment Types",
			"companyId": 1
		}, {
			"lookupKey": "CQE",
			"lookupValue": "Cheque",
			"lookupType": "PYT",
			"lookupTypeDesc": "Payment Types",
			"companyId": 1
		}, {
			"lookupKey": "CRD",
			"lookupValue": "Card",
			"lookupType": "PYT",
			"lookupTypeDesc": "Payment Types",
			"companyId": 1
		}, {
			"lookupKey": "NET",
			"lookupValue": "Netbanking",
			"lookupType": "PYT",
			"lookupTypeDesc": "Payment Types",
			"companyId": 1
		}, {
			"lookupKey": "BR",
			"lookupValue": "Brother",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "CH",
			"lookupValue": "Child",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "CO",
			"lookupValue": "Cousin",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "GF",
			"lookupValue": "Grandfather",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "GM",
			"lookupValue": "Grandmother",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "NN",
			"lookupValue": "Nephew/Niece",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "PA",
			"lookupValue": "Parent",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "SI",
			"lookupValue": "Sister",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "SP",
			"lookupValue": "Spouse",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "UA",
			"lookupValue": "Uncle/Aunt",
			"lookupType": "REL",
			"lookupTypeDesc": "Relationship",
			"companyId": 1
		}, {
			"lookupKey": "AP",
			"lookupValue": "Another Patient",
			"lookupType": "RFL",
			"lookupTypeDesc": "Referrals",
			"companyId": 1
		}, {
			"lookupKey": "GL",
			"lookupValue": "Google",
			"lookupType": "RFL",
			"lookupTypeDesc": "Referrals",
			"companyId": 1
		}, {
			"lookupKey": "JD",
			"lookupValue": "Just Dial",
			"lookupType": "RFL",
			"lookupTypeDesc": "Referrals",
			"companyId": 1
		}, {
			"lookupKey": "PIL",
			"lookupValue": "Dr Pillay",
			"lookupType": "RFL",
			"lookupTypeDesc": "Referrals",
			"companyId": 1
		}, {
			"lookupKey": "WL",
			"lookupValue": "Walk-In",
			"lookupType": "RFL",
			"lookupTypeDesc": "Referrals",
			"companyId": 1
		}, {
			"lookupKey": "ADM",
			"lookupValue": "Admin",
			"lookupType": "ROL",
			"lookupTypeDesc": "Roles",
			"companyId": 1
		}, {
			"lookupKey": "DOC",
			"lookupValue": "Doctor",
			"lookupType": "ROL",
			"lookupTypeDesc": "Roles",
			"companyId": 1
		}, {
			"lookupKey": "SAD",
			"lookupValue": "Super Admin",
			"lookupType": "ROL",
			"lookupTypeDesc": "Roles",
			"companyId": 1
		}, {
			"lookupKey": "STF",
			"lookupValue": "Staff",
			"lookupType": "ROL",
			"lookupTypeDesc": "Roles",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "Singapore",
			"lookupType": "SGP",
			"lookupTypeDesc": "Singapore States",
			"companyId": 1
		}, {
			"lookupKey": "PHY",
			"lookupValue": "Physiotherapist",
			"lookupType": "SPL",
			"lookupTypeDesc": "Company Specialization",
			"companyId": 1
		}, {
			"lookupKey": "PMN",
			"lookupValue": "Pain Management",
			"lookupType": "SPL",
			"lookupTypeDesc": "Company Specialization",
			"companyId": 1
		}, {
			"lookupKey": "PTP",
			"lookupValue": "Physical Theraphy",
			"lookupType": "SPL",
			"lookupTypeDesc": "Company Specialization",
			"companyId": 1
		}, {
			"lookupKey": "AC",
			"lookupValue": "Active",
			"lookupType": "STS",
			"lookupTypeDesc": "General Status",
			"companyId": 1
		}, {
			"lookupKey": "IC",
			"lookupValue": "Active",
			"lookupType": "STS",
			"lookupTypeDesc": "General Status",
			"companyId": 1
		}, {
			"lookupKey": "ICT",
			"lookupValue": "Asia/Bangkok",
			"lookupType": "TIZ",
			"lookupTypeDesc": "Timezones",
			"companyId": 1
		}, {
			"lookupKey": "MST",
			"lookupValue": "Asia/Rangoon",
			"lookupType": "TIZ",
			"lookupTypeDesc": "Timezones",
			"companyId": 1
		}, {
			"lookupKey": "MYT",
			"lookupValue": "Asia/Kuala_Lumpur",
			"lookupType": "TIZ",
			"lookupTypeDesc": "Timezones",
			"companyId": 1
		}, {
			"lookupKey": "PHT",
			"lookupValue": "Asia/Manila",
			"lookupType": "TIZ",
			"lookupTypeDesc": "Timezones",
			"companyId": 1
		}, {
			"lookupKey": "SST",
			"lookupValue": "Asia/Singapore",
			"lookupType": "TIZ",
			"lookupTypeDesc": "Timezones",
			"companyId": 1
		}, {
			"lookupKey": "UNT",
			"lookupValue": "Unit",
			"lookupType": "UOM",
			"lookupTypeDesc": "Unit of Measure",
			"companyId": 1
		}, {
			"lookupKey": "01",
			"lookupValue": "gm",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "02",
			"lookupValue": "% w/w",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "03",
			"lookupValue": "% w/v",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "04",
			"lookupValue": "%",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "05",
			"lookupValue": "units",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "06",
			"lookupValue": "IU",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "07",
			"lookupValue": "million spores",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "08",
			"lookupValue": "mg SR",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "09",
			"lookupValue": "mg",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "10",
			"lookupValue": "mcg",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "11",
			"lookupValue": "NA",
			"lookupType": "UST",
			"lookupTypeDesc": "Stregth Unit",
			"companyId": 1
		}, {
			"lookupKey": "NO",
			"lookupValue": "No",
			"lookupType": "YSN",
			"lookupTypeDesc": "Yes / No",
			"companyId": 1
		}, {
			"lookupKey": "YS",
			"lookupValue": "Yes",
			"lookupType": "YSN",
			"lookupTypeDesc": "Yes / No",
			"companyId": 1
		}];
		return lookupArray.filter((x) => x.lookupType === lookupType);
	}

	getLookupObjectFromKey(keyName, lookupType) {
		if (keyName == null || keyName === null) return "";
		const lookupArray = JSON.parse(localStorage.getItem("lookupdata"));
		return lookupArray.find((x) => x.lookupKey === keyName && x.lookupType === lookupType);
	}

	getRolesAsString(roleArray) { // Getting the roles as String from the lookup 
		let roleString = "";
		roleArray.map((item) => {
			roleString = roleString + item.roleDesc + ", ";
		});

		return Helper.removeEndComma(roleString);
	}

	getCompanyAsString(companyArray) { //Getting the companies as String from the lookup

		let companyString = "";
		companyArray.map((item) => {
			companyString = companyString + item.companyDesc + ", ";
		});

		return Helper.removeEndComma(companyString);
	}

	reportsListArr = [
		{ lookupKey: "INCRPT", lookupValue: "Income" },
		{ lookupKey: "APPRPT", lookupValue: "Appointment" },

		{ lookupKey: "PYMTRPT", lookupValue: "Payments" },
		{ lookupKey: "PATNRPT", lookupValue: "Patients" },
		{ lookupKey: "AMNTDUERPT", lookupValue: "Amount Due" },
		{ lookupKey: "INVNTRYRPT", lookupValue: "Inventory" },
		{ lookupKey: "EXPNSRPT", lookupValue: "Expense" },
		{ lookupKey: "DILYSMRYRPT", lookupValue: "Daily Summary" },
	];

	subReportsListArr = {
		INCRPT: [
			{ lookupKey: "ALLINVRPT", lookupValue: "All invoice" },
			{ lookupKey: "MONINVRPT", lookupValue: "Monthly invoice" },
		],
		PYMTRPT: [
			{ lookupKey: "ALLPYMTRPT", lookupValue: "All payments" },
			{ lookupKey: "PYMTMODERPT", lookupValue: "Mode of payments" },
			{ lookupKey: "PYMTRCVDRPT", lookupValue: "Payments received per day" },
		],
		APPRPT: [
			{ lookupKey: "ALLAPMTRPT", lookupValue: "All appointmnets" },
			{ lookupKey: "CNLAPMTRPT", lookupValue: "Cancelled appointments" },
			{ lookupKey: "MTLYAPMTRPT", lookupValue: "Monthly appointmnets count" },
		],
		PATNRPT: [
			{ lookupKey: "NEWPATNRPT", lookupValue: "New patient" },
			{ lookupKey: "MTLYNEWPATNRPT", lookupValue: "Monthly new patient" },
		],
		AMNTDUERPT: [{ lookupKey: "UNSTLINVRPT", lookupValue: "Unsetted invoices" }],
		EXPNSRPT: [
			{ lookupKey: "ALLEXPRPT", lookupValue: "All expenses" },
			{ lookupKey: "MTLYEXPRPT", lookupValue: "Monthly expenses" },
		],
		INVNTRYRPT: [{ lookupKey: "ALLSTKUPHISRPT", lookupValue: "All stock update history" }],
		DILYSMRYRPT: [{ lookupKey: "DILYSMRYRPT", lookupValue: "Daily Summary Report" }],
	};

	getLocaleBasedOnCountry(cntryCode) {
		return this.getLookupValueFromKey(cntryCode, this.lookupTypes.Locales) || "en";
	}

	//Actions for the menu in Invoice Index page
	invoiceMenuActions = {
		edit: "EDIT",
		cancel: "CANCEL",
		email: "EMAIL",
		print: "PRINT",
		pay: "PAY",
	};

	//Actions for the menu in payment Index page
	paymentMenuActions = {
		cancel: "CANCEL",
		email: "EMAIL",
		print: "PRINT",
	};

	getLookupList(companyId, type, promiseFunc, finallyFunc) {
		MasterService.fetchLookupByType(type, companyId)
			.then(promiseFunc)
			.catch((ex) => {
				console.log(ex);
			})
			.finally(finallyFunc);
	}

	getValueFromLookupList(list, key) {
		const lookupRow = list.find((x) => x.lookupKey === key);
		return !(lookupRow == null) && lookupRow !== null ? lookupRow.lookupValue : null;
	}

	settingLookupListArr = [
		{ lookupType: "DTY", lookupTypeDesc: "Drug Type" },
		{ lookupType: "ETH", lookupTypeDesc: "Ethnicity" },
		{ lookupType: "EXP", lookupTypeDesc: "Expense Types" },
		{ lookupType: "MFR", lookupTypeDesc: "Manufacturers" },
		{ lookupType: "MDH", lookupTypeDesc: "Medical History" },
		{ lookupType: "MDG", lookupTypeDesc: "Medical Groups" },
		{ lookupType: "NAT", lookupTypeDesc: "Nationality" },
		{ lookupType: "OCC", lookupTypeDesc: "Occupation" },
		{ lookupType: "RFL", lookupTypeDesc: "Referrals" },
		{ lookupType: "UST", lookupTypeDesc: "Stregth Unit" },
		{ lookupType: "UOM", lookupTypeDesc: "Unit of Measure" },
	];
}

export default new MasterData();
