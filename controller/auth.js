const bcrypt = require("bcrypt");
const passwordModel = require("../model/auth");
const jwt = require("jsonwebtoken");
const jwt_Secret_Key = "Random_blog_app";

const onSignUpfn = async (req, res) => {
    //just storing password in hash form by creating salt and hash using bcrypt
    // steps-> salt(bcrypt.gensaltSync())->hash(bcrypt.hashsync(password,salt))->save in database
    const salt = bcrypt.genSaltSync(10);
  
    const passwordhash = bcrypt.hashSync(req.body.password, salt);
    // console.log(passwordhash);
    const newmodel = new passwordModel({ ...req.body, password: passwordhash })
    await newmodel.save();
    res.json({
        message: "sign up api called",
    })

}

const onLoginfn = async (req, res) => {
    //  steps->
    // 1.to find a user.
    // 2.make a payload
    // 3.creating a token using jwt.sign
    // 4.comparing password using bcrypt.compareSync

    const user = await passwordModel.findOne({ email: req.body.email });
    if (!user) {
        res.json({
            message: "User not found please log in first",
        })
    }
    const expdate = new Date().getTime() + 9000;
    const payload = {
        userid: user._id,
        name: user.name,
        exp:expdate,
    }
    const token = jwt.sign(payload, jwt_Secret_Key);
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (isPasswordValid) {
        return res.json({
            message: "LOGIN SUCCESFULL",
            token
        })
    }
    
    res.json({
        success: true,
        messsage:"Incorrect username or password"
    })
   
}

const authcontrollers = {
    onSignUpfn,
    onLoginfn
}

module.exports = authcontrollers;