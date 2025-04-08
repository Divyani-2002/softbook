import mongoose from "mongoose";
import User from '../models/user.model.js'
import hashPassword from "../utils/hashPwd.js";
import uploadOnCloudinary from "../config/cloudinary.js";

const createuser = async (req, res) => {
    const { name, email, password, mobile, gender } = req.body

    const mobileNumber = Number(mobile)

    //  console.log('req.body', req.body)
    //  console.log('req.files', req.files)
    if (!(name && email && password && gender && mobileNumber))
        return res.json(400)
            .json({
                sucess: false,
                message: "all feilds are required"
            })

    if (password.length < 8)
        return res.json(400)
            .json({
                sucess: false,
                message: "password must be at least 8 character long"
            })
    if (!email.match())
        return res.status(400)
            .json({
                success: false,
                message: "Invalid email id "
            })
    const hashedPwd = await hashPassword(password)

    try {
        const existingUser = await User.findOne({ email: email })

        if (existingUser)
            res.status(400)
                .json({
                    success: false,
                    message: "user with this email already exists"
                })
        
        let imagePath = req.file.path 
        const imageURL = await uploadOnCloudinary(imagePath)

        if (!imageURL)
            return res.status(400)
                .json({
                    success: false,
                    message:"image upload failed"
        })

        const user = new User({
            name: name,
            email: email,
            password: password,
            hashedPwd: hashedPwd,
            mobile: mobileNumber,
            gender: gender,
            avatar: imageURL
        })
        user.save()

        res
            .status(200)
            .json({
                success: true,
                message: "user created successfully",
                user: user
            })
    } catch (error) {
        res.status(400)
            .json({
                success: false,
                message: error
            })
    }

}
const getallusers = (req, res) => {
    // business logic for getting all user 
    res.send('list of all users reterived successfully');
}
const getuser = (req, res) => {
    // business logic for getting a single user 
    res.send('one user reterived successfully');
}
const deleteuser = (req, res) => {
    // business logic for deleting a user 
    res.send('user deleted successfully');
}
const updateuser = (req, res) => {
    // business logic for updating a user 
    res.send('user updated successfully');
}
const logoutuser = (req, res) => {
    // business logic for updating a user 
    res.send('user logged out successfully');
}
export { createuser, getallusers, getuser, deleteuser, updateuser, logoutuser };
