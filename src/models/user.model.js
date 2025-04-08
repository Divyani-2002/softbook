import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String, //data type of value
        required: true, //value is compulsaory / required
        unnique: true, // value should be unique / nno two users can have the same email
        trim: true
    },
    password: {
        type: String,
        required:true,
        minlength: 8
    },
    isVerified: {
        type: Boolean,
        default:false //default value of the field
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        length:10 
    },
    gender: {
        required:true,
        type: String,
        enum: ['male', 'female','other'] //accepts only these value 
    },
    bio: {
        type: String,
        maxlength: 200,
        trim:true
    },
    avatar: String,
    DOB: Date
})
const User = mongoose.model('User', userSchema)    //User is the name of collection
export default User