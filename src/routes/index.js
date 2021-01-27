const express=require('express');
const router = express.Router();

//routes
router.get('/',(req,res)=>{
    res.render('index.html',{title: 'salcedo'});
});

//rutas de pagina
router.get('/contact',(req,res)=>{
    res.render('contact.html',{title: 'CONTACTO'});
});

module.exports=router;