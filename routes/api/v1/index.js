/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();


/** ------------------ MAKING ROUTES------------------ **/
router.use('/', require('./product'));


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;