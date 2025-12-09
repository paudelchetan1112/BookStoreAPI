require('dotenv').config();
const express=require('express')
const connectToDB=require('./database/db')
const bookRoutes=require('./routes/book-routes')

const app=express();
const PORT=process.env.PORT||3000;
//middleware ->express 
app.use(express.json())

//routes here

app.use('/api/books/', bookRoutes)

app.listen(PORT, ()=>{
   connectToDB();
    console.log(`Server is running at http://localhost:${PORT} `)
    
})