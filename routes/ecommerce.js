const express = require('express');
const router = express.Router();

const ecommerceController = require('../controllers/ecommerce_controller');

router.get('/home', ecommerceController.home);



router.post('/create', ecommerceController.add);
router.post('/delete', ecommerceController.remove);
router.get('/details/:id', ecommerceController.view);
router.post('/update', ecommerceController.update);





module.exports = router;