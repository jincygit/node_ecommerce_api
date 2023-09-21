/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const router = express.Router();


/** ------------------ MAKING ROUTES------------------ **/
router.use('/', require('./v1'));


/** ------------------ EXPORTING ROUTER ------------------ **/
module.exports = router;