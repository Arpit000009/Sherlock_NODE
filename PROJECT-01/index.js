const express = require("express");
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const app = express();

const PORT = 8000
//middleware -- plugin
app.use(express.urlencoded({extended: false}))

app.use((req,res,next)=>{
    console.log("hello from middleware 1");
    fs.appendFile('log.txt',`\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`,(err,data)=>{
        next();
    })
})


//ROUTES
app.get('/users',(req,res) =>{
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("") }
    </ul>
    `;
    res.send(html)
})

app.get('/api/users',(req,res) =>{
    res.header('X-myName','Arpit Pandey')
    // always add X to custum headers
    // console.log(req.headers);
    return res.json(users);
})

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    if(!user){
       return res.status(404).json({error:"user not found"}) 
    }
    return res.json(user)
}).patch((req,res)=>{
    //Edit user with id
    return res.json({status:'Pending'})
})
.delete((req,res)=>{
    //delete user with id
    return res.json({status:'Pending'})
}); 


app.post('/api/users',(req,res)=>{
    //TODO: Create new user
    const body = req.body;
    if(!body ||!body.first_name || !body.last_name|| !body.email ||!body.gender){
        return res.status(400).json({msg:"all fields are required"})
    }
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status:"success",id: users.length });
    })
});





app.listen(PORT, () => console.log(`Server Started at port:${PORT}`))