const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string()
        .min(10)
        .max(30)
        .required(),
    email: Joi.string()
        .min(5)
        .max(30)
        .required()
        .email(),
    password: Joi.string()
        .min(5)
        .max(30)
        .required(),
})

const login = Joi.object({
    email: Joi.string()
        .min(5)
        .max(30)
        .required(),
    password: Joi.string()
        .min(5)
        .max(30)
        .required(),
})

const register = async (req,res) => {
    // creating a new user.. using mongoose schema..
    // preparation for data acoording the schema rules and to be submitted.
    const { error } = registerSchema.validate(req.body);
if(error) {
    res.send(error);
}

const emailExist = await something.findOne({ email: req.body.email });
if (emailExist) return res.status(400).send('Email already exist');

const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);

const user = new something({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
});
try {
    // submit the data into database  (prepareddata.save())
      const savedUser = await user.save();
    res.send({id: savedUser._id, savedName: savedUser.name});
}catch(err) {
    console.log(err);
    res.status(400).send("error");
    // console.log(err)
}
}

const loginNow = async (req, res) => {
    const { error } = login.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); /// validation is passed

    // find a user with the email address.. pull that user   
    // case 1) User exist. and if user exist then it will return the user data (email, name, password)
    // case 2) If user do not exist. then throw an error. email doesnt exist

    const user = await something.findOne({ email: req.body.email });  /// I am pulling 
    if (!user) return res.status(400).send('Email Does not  exist');

    // password check
    const validPass = await bcrypt.compare(req.body.password, user.password);   // true or false
    if(!validPass) return res.status(400).send("There is something wrong with username and password, please check");

    // create token
    const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
}

module.exports = {register, loginNow}