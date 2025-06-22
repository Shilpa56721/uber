const userModel = require('../models/user.models');


module.exports.createUser= async ({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user= await userModel.creater({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}
