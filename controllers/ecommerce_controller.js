/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const Product=require('../models/products');
const mongoose = require('mongoose');

/** ------------------ EXPORTING FUNCTIONS IN E#COMMERCE WEBSITE ------------------ **/
//function for view homepage
module.exports.home = async function(req, res){
    try {
        //fetch selected fields from db
        const products = await Product.find({}, 'id name quantity');

        return res.render('api_ecommerce', {
            title: "HOME",
            products: products
        })
    } 
    catch(err) {
        console.log(`Error in finding the product: ${err}`);
        return res.redirect('back');
    }   
}

//function for create product
module.exports.add = async function(req, res){
    try{
        //create product
        let itemTask = await Product.create(req.body);
        if (req.xhr){
            return res.status(200).json({
                data: {
                    itemTask: itemTask
                },
                message: "Product created!"
            });
        }
        req.flash('success', 'Product created!');
        return res.redirect('back');
    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return res.redirect('back');
    }
}

//function for delete product
module.exports.remove = async function(req, res){
    try {
        //remove product
        const deletedProduct = await Product.findByIdAndDelete(req.body.delete_product_id);
        //if product not found then
        if (!deletedProduct) {
            return res.status(404).json({
            error: 'Product not found',
            });
        }

        res.status(200).json({
            data:{
                message:"Product Deleted"
            }
        })
    } catch(err) {
        console.log(`Error in deleting the product: ${err}`);
        return res.status(500).json({
            message: `Error in deleting the product: ${err}`,
        });
    }
}

//function for view product details
module.exports.view = async function(req, res){
    try {
        if(req.params.id){
            // get project data based on od
            let productData = await Product.findById(req.params.id);
            if(productData){
                return res.render('product_detail', {
                    title: "Project details",
                    productData: productData,

                })
            }else{
                req.flash('error', 'No project data avaliable');
                return res.redirect('back');
            }
        }else{
            req.flash('error', 'No project data avaliable');
            return res.redirect('back');
        }
    } catch(err) {
        console.log(`Error in viewing the product: ${err}`);
        return res.status(500).json({
            message: `Error in viewing the product: ${err}`,
        });
    }
}

//function for edit product
module.exports.update = async (req, res) => {
    try {
        const id = req.body.productId; 
        const found = await Product.findById(id);
        //check whether product exist or not
        if (!found) {
            return res.status(404).send({ message: 'Product not found' });
        }
        // Update the product's quantity
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { quantity: req.body.quantity },
            { name: req.body.name } 
        );
        return res.redirect('/ecommerce/home');
       
    } catch (error) {
        console.error(error);
        return res.redirect('back');
    }
};