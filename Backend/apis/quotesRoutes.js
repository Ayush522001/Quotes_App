const quotes = require('../models/quotes');

const router=require('express').Router();




router.get('/allQuotes',async(req,res) =>{
    try {
        const AllQuotes=await quotes.find();
        res.status(200).json(AllQuotes);
    } catch (error) {
        
        res.status(400).json({msg:'Something went wrong'});
    }
})


router.post('/addQuotes',async(req,res)=> {
    const {author,text}=req.body;

    await quotes.create({author,text});

    res.status(200).json({ msg: 'New Quote Created Successfully' });

});

router.get('/quotes/:id',async(req,res) =>{
    const quote=await quotes.findById(req.params.id);

    res.status(200).json(quote);
})


module.exports=router;