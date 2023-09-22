/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();


/** ------------------ IMPORTING CONTROLLERS ------------------ **/
const ecommerceController = require('../controllers/ecommerce_controller');


/** ------------------ MAKING ROUTES TO CONTROLLERS------------------ **/
router.get('/home', ecommerceController.home);
router.post('/create', ecommerceController.add);
router.post('/delete', ecommerceController.remove);
router.get('/details/:id', ecommerceController.view);
router.post('/update', ecommerceController.update);


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;