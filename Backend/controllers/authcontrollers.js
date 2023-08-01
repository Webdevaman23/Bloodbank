const Usermodel = require("../models/Usermodel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// POST || register 
const registerController = async (req , res) =>{
    try {
        const Isexisting  = await Usermodel.findOne({email : req.body.email});
        if(Isexisting){
            return res.status(200).send({
                success : false,
                msg : 'Email already exists'
            })
        }

        // hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password , salt);
        req.body.password = hashedpassword;

        // rest routes
        const user  = new Usermodel(req.body);
        user.save();

        return res.status(200).send({
            success : true,
            msg : 'Email registered successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            msg : 'Error in api',
            error
        })
    }
}

// POST || login
const loginController = async (req , res) =>{
    try {
        const user = await Usermodel.findOne({email : req.body.email});
        if(!user){
            return res.status(404).send({ 
                success : false,
                message : 'Inavlid Email'
            })
        }

        // check role
        if(user.role !== req.body.role){
            return res.status(500).send({
                success : true,
                message : "Role doesnot match"
            });
        }

        const comparepassword  = await bcrypt.compare(req.body.password , user.password);
        if(!comparepassword){
            return res.status(404).send({
                success : false,
                message : 'Invalid password'
            })
        }

        const token = jwt.sign({UserId:user._id} , process.env.SECRET_KEY , {expiresIn : '1d'});

        return res.status(200).send({
            success : true,
            message : 'Login succesfully',
            token,
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            msg : 'Invalid Credentials',
            error
        })
    }
}

// GET || currentUserController
const currentUserController = async(req ,res) =>{
    try {
        const user = await Usermodel.findOne({_id : req.body.UserId});
        res.status(200).send({
            success : true,
            message : 'User fetched Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success : false,
            message : 'Unable to get current user',
            error
        })
    }
}

module.exports = {
    registerController,
    loginController,
    currentUserController
}