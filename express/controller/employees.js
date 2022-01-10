const findUserWithEmail = (req, res) =>  {
    // res.send(req.user);
    res.send({
            "success": false,
            "message": "Unable to find user with email address Karthik@gmail.com"
        })
        
    }

    module.exports = {findUserWithEmail}