const express = require('express');
const Users = require('../Models/user');
// const auth = require('./authController');
const router = express.Router();

// router.use(auth);
router.get('/showUsers', async (req, res) =>{

    const showUsers = await Users.find({}).sort({name: 1});
   
        try {
            res.send({showUsers});
        } catch (error) {
            res.status(400).json({err: "Connection error"});
        }

});

router.get('/showUser/:id', async (req, res) => {
    
    
    try {
        const showUsersId = await Users.findOne({_id: req.params.id});
        res.send({showUsersId});
    } catch (err) {
        res.status(400).json({err: "Failed connection"});
    }


});

router.put('/updateUsers/:id', async (req, res) => {

    
    try {
        const updateUsers = await Users.findById({_id: req.params.id}).updateOne(req.body);
        res.status(200).send({_id: updateUsers});
    } catch (err) {
        res.status(400).json({err: "Failed connection"});
    }


});

router.delete('/delete/:id', async(req, res) => {

    const deleteUsers = await Users.findByIdAndDelete({_id: req.params.id})
    try {
        res.status(200).send({_id: deleteUsers})
    } catch (err) {
        res.status(400).json({err: "Failed connection"});
    }
    
})

module.exports = app => app.use('/users', router);
