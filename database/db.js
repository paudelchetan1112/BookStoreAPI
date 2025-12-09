
const mongoose=require('mongoose')
const connectToDB=async()=>{
    try{
await mongoose.connect('mongodb+srv://paudelchetan1112:%40Chetan123@cluster0.iikgbua.mongodb.net/?appName=Cluster0');
    console.log("database connected successfully  ")
    }

    catch(error){
        console.error('Mongodb connection failed', error)
        process.exit(1);
    }
}
module.exports=connectToDB;