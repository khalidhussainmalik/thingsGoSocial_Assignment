const express = require("express");

const router = express.Router();


const Student = require("../models/student");



// GET POST PUT UPDATE
// Base Path: http://localhost:3000/students

// Post API
router.post('/', (req, res) => {
    let std = new Student({
        name: req.body.name,
        contact: req.body.contact,
        subject: req.body.subject,
        class: req.body.class,
        society: req.body.society,
        year: req.body.year
    });
    std.save((err, doc)=>{
        if(err){
            console.log(err)
        }else{
            res.send(doc);
        }
    })
})

module.exports = router;