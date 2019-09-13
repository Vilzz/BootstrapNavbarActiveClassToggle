const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index');
});
router.get('/first',(req, res)=>{
    res.render('first');
});
router.get('/second',(req, res)=>{
    res.render('second');
});
router.get('/third',(req, res)=>{
    res.render('third');
});

module.exports = router;