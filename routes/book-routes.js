const express=require('express')
//create express router
const router=express.Router();
const {getAllBooks, addNewBook, updateBook, deleteBook, getSingleBookById}=require('../controller/book-controller')


//all the routes that are related to the books only

router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBookById)
router.post('/add',addNewBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)


module.exports=router;