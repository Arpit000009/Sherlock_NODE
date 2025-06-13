const User = require('../model/user')

async function handleUserSignup(req, res) {
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render('home');
}


async function handleUserLogin(req, res) {
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    console.log("User",user)
    if(!user) 
        return res.render('login',{
        error:"invalid Username or password",
    });
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}