const User = require('../models/user')

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res) {
    const user = await User.findById(req.params.id);
    
    if(!user){
       return res.status(404).json({error:"user not found"}) 
    }
    return res.json(user)
}

async function handlefindByIdAndUpdate(req,res){
    //Edit user with id
    await User.findByIdAndUpdate(req.params.id,{ lastName:"Changed"});
    return res.json({status: "Sucess"})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Sucess"})
}

async function handleCreateNewUser(req,res){
     //TODO: Create new user
     const body = req.body;
     if(!body || 
        !body.first_name ||
        !body.last_name||
        !body.email ||
        !body.gender ||
        !body.job_title
     ){
         return res.status(400).json({msg:"all fields are required"});
     }
 
    const result =  await User.create({
         firstName:body.first_name,
         lastName:body.last_name,
         email:body.email,
         gender:body.gender,
         jobTitle:body.job_title
     })
 
    return res.status(201).json({msg:"sucess", id: result._id})
}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handlefindByIdAndUpdate,
    handleDeleteUserById,
    handleCreateNewUser,
}