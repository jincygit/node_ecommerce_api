/** ------------------ IMPORTING PACKAGE ------------------ **/
const express=require('express');
const router=express.Router();


/** ------------------ IMPORTING CONTROLLERS ------------------ **/
//initalizing products controller
const productsController=require('../../../controllers/api/v1/product_controller');


/** ------------------ MAKING ROUTES------------------ **/
//to get all the products
router.get('/',productsController.products);

//to create a product
router.post('/create',productsController.create);

//to delete a product using ID
router.delete('/:id', productsController.delete);

//to update the quantity of a product
router.post('/:id/update_quantity/', productsController.updateQuantity);


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports=router;