const express=require('express');
const app=express();
const mongooose=require('mongoose');
const seedDB=require('./seed');
const allQuotesRoutes=require('./apis/quotesRoutes');
const cors=require('cors');


mongooose.connect('mongodb://127.0.0.1:27017/quote-db')
.then(() =>{
    console.log('DB Connected');
})
.catch((err) =>{
    console.log(err);
})

app.use(cors());

app.use(express.json());

// seedDB  ();
app.use(allQuotesRoutes);

app.get('/hello',(req,res) =>{
    res.status(200).json({msg:'Hello from Quotes App'});
})





const port=process.env.PORT ||8000;

app.listen(port,() =>{
    console.log('Connection successful');
})