const mongoose = require("mongoose");

const database = mongoose.connect("mongodb+srv://abhi:abhi@cluster0.drajh.mongodb.net/ultimed",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Database Connected Succesfully");
}).catch((e)=>{
    console.log("Something went wrong i.e ",e)
});

module.exports = database;