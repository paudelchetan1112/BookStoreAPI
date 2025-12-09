
const mongoose=require('mongoose')
require('dotenv').config();
const connectToDB=async()=>{
    try{
        const connectionString=process.env.MONGODBCONNECTIONSTRING;
await mongoose.connect(connectionString);
    console.log("database connected successfully  ")
    }

    catch(error){
        console.error('Mongodb connection failed', error)
        process.exit(1);
    }
}
module.exports=connectToDB;