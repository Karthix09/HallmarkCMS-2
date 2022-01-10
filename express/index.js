const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');
const path = require('path')

app.use(cors())


// //Check for DB errors

// db.on('error', function(err){
//     console.log(err);

// });

//check connection 

// Import Routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const appointmentRoutes = require('./routes/appointment');
const masterRoutes = require('./routes/master');
const patientRoutes = require('./routes/patient');
const userRoutes = require('./routes/user');
const reportRoutes = require('./routes/reports');
const expenseRoutes = require('./routes/expense');
const proceduresRoutes = require('./routes/procedures');
const lookupRoutes = require('./routes/lookup');
const inventoryRoutes = require('./routes/inventory');
const patientNotesRoutes = require('./routes/patientNotes');
const patientProcedureRoutes = require('./routes/patientProcedure');
const patientInvoiceRoutes = require('./routes/patientInvoice');
const patientPaymentRoutes = require('./routes/patientPayment');
const patientLedgerRoutes = require('./routes/patientLedger');
const patientFileRoutes = require('./routes/patientFile');
const patientmcReportRoutes = require('./routes/patientmcReport');



dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected to Database"));


    app.listen(4000, () => console.log('Server is up and running on port 4000'));



//Middlewares
app.use(express.json());
// Route MiddleWares
app.use('/api', authRoutes);
app.use('/token/passwordEmail', employeeRoutes);
app.use('/appointment', appointmentRoutes);
app.use('', masterRoutes);
app.use('', patientRoutes);
app.use('', userRoutes);
app.use('', reportRoutes);
app.use('', expenseRoutes);
app.use('', proceduresRoutes);
app.use('', lookupRoutes);
app.use('', inventoryRoutes);
app.use('', patientNotesRoutes);
app.use('', patientProcedureRoutes);
app.use('', patientInvoiceRoutes);
app.use('', patientPaymentRoutes);
app.use('', patientLedgerRoutes);
app.use('', patientFileRoutes);
app.use('', patientmcReportRoutes);






