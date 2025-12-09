const Book=require('../models/book')

const getAllBooks=async(req, res)=>{
    try{
const allBook=await Book.find({})
if(allBook?.length>0){
    res.status(200).json({
        success:true, 
        message:'List of books fetched successfully', 
        data:allBook,
    })

}
else{
    res.status(404).json({
        success:false,
        message:'No Books found in collection'
    })
}
    }
    catch(e){
        console.log(e)
        res.status(500).json(
            {
                success:false, 
                message:'no books found in collection '
            }
        )
    }

}



const getSingleBookById=async(req, res)=>{
try{
const getCurrentBookId=req.params.id;
const bookDetailsById=await Book.findById(getCurrentBookId)
if(!bookDetailsById){
    return res.status(404).json({
        success:false,
        message:'Book with the current Id is not found! please Try with different id ',

    });

}
res.status(200).json({
    success:true, 
    message:'sucessfully found book ', 
    data:bookDetailsById,
})
}
catch(error){
    console.log(error);
     res.status(500).json(
            {
                success:false, 
                message:'no books found in collection '
            }
        )
}
}

const addNewBook=async(req, res)=>{
try{
const newBookFormData=req.body;
const newlyCreatedBook=await Book.create(newBookFormData)
if(newBookFormData){
    res.status(200).json({
        success:true, 
        message:"book added successfully",
        data:newlyCreatedBook,
    })
}
}
catch(e){
console.log(error)
}
}


const updateBook=async(req, res)=>{
try{
const updatedBookFormData=req.body;
const getCurrentBookId=req.params.id;
const updatedBook=await Book.findByIdAndUpdate(getCurrentBookId, updatedBookFormData,{new:true});
if(!updatedBook){
    return res.status(404).json({
        success:false, 
        message:"Bokk is not found for this current id"
    })
    
}
res.status(200).json({
    success:true, 
    message:"Book update successfully ", 
    data:updatedBook,
})

}
catch(error){
      console.log(error);
     res.status(500).json(
            {
                success:false, 
                message:'no books found in collection '
            }
        ) 
}
}
const deleteBook=async(req, res)=>{
try{
const getCurrentBookId=req.params.id;
const deletedBook=await Book.findByIdAndDelete(getCurrentBookId);
if(!deletedBook){
    res.status(404).json({
        success:false,
        message:'Book is not tound with this id', 
    })
}
res.status(200).json({
    success:true,
    message:deletedBook,
})
}
catch(error){
    console.log(error);
     res.status(500).json(
            {
                success:false, 
                message:'no books found in collection '
            }
        )
}
}



module.exports={getAllBooks, addNewBook, updateBook, deleteBook, getSingleBookById}
