
const users = require('./MOCK_DATA.json');
const express = require("express")

const { connectMongodb } = require('./views/connection');
const {logReqRes} = require("./middlewares")
const { connect } = require('http2');
const userRouter = require("./routes/user");

const app = express();

const PORT = 8000;

//Connection
connectMongodb('mongodb://127.0.0.1:27017/user-app-1').then(()=>{
    console.log("mongobd connected")
})


// Schema


//middleware -- plugin
app.use(express.urlencoded({extended: false}))
app.use(logReqRes('log.txt'));


//ROUTES
app.use("/api/users",userRouter)



app.listen(PORT, () => console.log(`Server Started at port:${PORT}`))