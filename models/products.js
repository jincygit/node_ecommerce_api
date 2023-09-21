const mongoose=require('mongoose');

//Creating the product schema
const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    quantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

//creating a new model called Product
const Product=mongoose.model('Product',productSchema);

module.exports=Product;