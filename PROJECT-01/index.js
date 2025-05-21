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
    return res.json(users);
})

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
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
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id: users.length });
    })
});





app.listen(PORT, () => console.log(`Server Started at port:${PORT}`))