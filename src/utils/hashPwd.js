import bcrypt from "bcryptjs";

const hashPassword = async (inputPassword) => {
    const saltRounds = 10;

    try {
     let hashedPassword = await bcrypt.hash(
        inputPassword,
         saltRounds,
        )
        return hashedPassword
    } catch (error) {
        return error
}    
}
export default hashPassword;

