/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const Product=require('../../../models/products');
const mongoose = require('mongoose');


/** ------------------ EXPORTING FUNCTION RESPONSIBLE FOR API ------------------ **/
//function to create the product
module.exports.create = async function(req, res) {
    try {
        //create new product
        const {  name, quantity } = req.body;
        const newProduct = new Product({
            name,
            quantity
        });
        await newProduct.save();

        res.status(201).json({
            data:{
                product:{
                    name: newProduct.name,
                    quantity: newProduct.quantity
                }
            }
        })
    }catch(err) {
        console.log(`Error in creating a product: ${err}`);
        return res.status(500).json({message: `Error in creating a product: ${err}`});
    }
}

//function to show the product
module.exports.products = async function(req, res) {
    try {
        //fetch selected fields from db      
        const products = await Product.find({},'id name quantity')
            .select({
                _id: 0, // Exclude the default _id field
                //name: 1, // Include the name field as is
                id: '$_id' //rename field name
        });
        res.status(200).json({
            data:{
                products: products
            }
        })
    } 
    catch(err) {
        console.log(`Error in finding the product: ${err}`);
        return res.status(500).json({message: `Error in finding the product: ${err}`});
    }
}

//function to delete a product according to id
module.exports.delete = async function (req, res) {
    try {
        const _id = req.params.id; 
        //check if the id is a valid ObjectId
        if (!mongoose.isValidObjectId(_id)) {
            // Handle the case where id is not a valid ObjectId (e.g., send an error response)
            return res.status(400).json({
              error: 'Invalid product ID',
            });
        }
        //delete particular product
        const deletedProduct = await Product.findByIdAndDelete(_id);
        if (!deletedProduct) {
            return res.status(404).json({
              error: 'Product not found',
            });
        }

        res.status(200).json({
            data:{
                message:"product Deleted"
            }
        })
    } catch (err) {
        console.log(`Error in deleting the product: ${err}`);
        return res.status(500).json({
            message: `Error in deleting the product: ${err}`,
        });
    }
};

//update the quantity of product of selected id
module.exports.updateQuantity = async (req, res) => {
    try {
        //found data before update
        const id = req.params.id; 
        const found = await Product.findById(id);

        if (!found) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Note - To increment the quantity of the product, put a positive number in the query,
        // and to decrement the quantity, put a negative number in the query.
        const newQty = parseInt(found.quantity) + parseInt(req.query.number);

        // Update the product's quantity
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { quantity: newQty },
            { new: true } // This ensures that you get the updated product as a result
        );
        //get product data
        const products = await Product.findById(id,'id name quantity')
            .select({
                _id: 0, // Exclude the default _id field
                //name: 1, // Include the name field as is
                id: '$_id' //rename field name
        });

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.send({
            product: products,
            message: 'Updated successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};