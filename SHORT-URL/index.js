const express = require("express");
const path = require('path')
const { connectToMongoDB} = require("./connect")

const URL = require('./model/url');

//routes
const urlRoute = require('./routes/url')
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("Mongodb connected"))

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/url",urlRoute);
app.use('/',staticRoute)

// app.get("/test",async(req,res)=>{
//     const allUrls = await URL.find({});
//     return res.render('home',{
//         urls:allUrls,
        
//     })
// });

app.use("/url",urlRoute)
app.use("/user",userRoute)
app.use("/",staticRoute)

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId: shortId }, // Use correct filter
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );


  return res.redirect(entry.redirectURL);
});


app.listen(PORT, () => console.log(`server started at port ${PORT}:`))