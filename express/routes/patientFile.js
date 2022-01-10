
const router = require('express').Router();
const { google } = require('googleapis')
const path = require('path')
const fs = require('fs')
const patientFile = require('../model/PatientFile');
require('dotenv/config')
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid'); // COMMENTED THIS BECAUSE RUNNING IT CHANGES NODE MODULE FILES
uuidv4(); 
const multer = require('multer')

//UPLOADING TO AWS

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET

})

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '')
    }
})

const upload = multer({storage}).single('image')

router.post('/patientFile/addPatientFile', upload, (req, res) => {

    let myFile = req.file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]

            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                // Key: `${uuid()}.${fileType}`,         //Commented because using the UUID
                Body: req.file.buffer
            }

            s3.upload(params, (error, data) => { 
                if(error) {
                    res.status(500).send(error)
                }

                res.status(200).send(data)

            })
        })
// });

module.exports = router;