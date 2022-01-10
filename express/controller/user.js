const CmsUser = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const addUser =  async (req, res) => {

    const userNewRolesList = req.body.userRolesList.map((roles) => {
        if (roles.roleType === 'SAD') {
            return {
                ...roles,
                roleDesc: "Super Admin"
            }
        } 
        else if (roles.roleType === 'DOC') {
            return{
                ...roles,
                roleDesc: "Doctor"
            }
        }
        else if (roles.roleType === 'ADM') {
            return{
                ...roles,
                roleDesc: "Admin"
            }
        }
        else if (roles.roleType === 'STF') {
            return{
                ...roles,
                roleDesc: "Staff"
            }
        } 
        return roles;
    })

    const bcrypt = require('bcryptjs');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.userPassword, salt);

    const user = new CmsUser({...req.body, userPassword:hashPassword, userRolesList: userNewRolesList, id: Math.floor(Math.random() * 10000000) + 1}, companyId=2)

    // save user in the database
    user.save()
        .then(data => {
            res.send(
                {
                    "success": true,
                    "message": "User with id 7 created successfully."
                }
            )
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });
}

const editUser = (req, res) => {

    const userRolesList = req.body.userRolesList.filter((userList) => {
            if(userList.recordStatus === 'DELETE') {
                return false;
            }
            return true
    })

    const bodyData = req.body;
    const updatedBodyData = {...bodyData, userRolesList}


    CmsUser.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: updatedBodyData }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })

}

const getAllSGUsers = (req, res) => {

    CmsUser.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
    
}

const getUser =  (req, res) => {

    CmsUser.findOne({ id: req.params.id })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const getAllSGDocs = (req, res) => {
        CmsUser.find({"userRolesList.roleType" : "DOC", companyId : 1})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const getAllILODocs = (req, res) => {
        CmsUser.find({"userRolesList.roleType" : "DOC", companyId : 2})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const getAllMMDocs =  (req, res) => {
        CmsUser.find({"userRolesList.roleType" : "DOC", companyId : 3})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const getAllJBDocs = (req, res) => {
        CmsUser.find({"userRolesList.roleType" : "DOC", companyId : 4})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const deleteUser = (req, res) => {

    CmsUser.deleteOne({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        
        res.send("success")
        req.redirect('/#' + req.originalUrl)
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
    
}

const checkPasswordAndGenerateToken = async (req, res) => {

    const user = await CmsUser.findOne({ userEmail: req.body.userEmail });  /// I am pulling 
    if (!user) return res.status(400).send('Email Does not exist');

    // password check
    const validPass = await bcrypt.compare(req.body.password, user.userPassword);   // true or false
    if(!validPass) return res.status(400).send("There is something wrong with username and password, please check");

    // create token
    const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    res.header('auth-token', token);

    req.body.companyId = 2;
    
    res.send(user)
    console.log(user);

    // res.send(req.user);
}

module.exports = {
    addUser, 
    editUser, 
    getAllSGUsers, 
    getUser, 
    getAllSGDocs, 
    getAllILODocs, 
    getAllMMDocs, 
    getAllJBDocs,
    deleteUser,
    checkPasswordAndGenerateToken
}