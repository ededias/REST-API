const express = require('express');
const Users = require('../Models/user');
const router = express.Router();

router.get('/showUsers',  (req, res) =>{
    
    Users.find({}).sort({name: 1}).exec((err, name) =>{
        try {
            res.send({name});
        } catch (error) {
            res.status(400).json({err: "Connection error"});
        }
    });
    
});

router.post('/registerUsers', async (req, res) => {

    try {

        const users = await Users.create(req.body);
        return res.send({users});

    } catch (err) {
        
        res.status(400).json({err: "Failed connection"});

    }

});

router.get('/showUser/:id', async (req, res) => {

    Users.findOne({_id: req.params.id}).exec((err, name) => {
        try {
            res.send({name});
        } catch (err) {
            res.status(400).json({err: "Failed connection"});
        }
    });

});

router.put('/editUsers/:id', async (req, res) => {

    Users.update({_id: req.params.id}, req.body, err => {
        try {
            res.status(200).json(req.body);
        } catch (err) {
            res.status(400).json({err: "Failed connection"});
        }
    });

});

router.delete('/delete', async(req, res) => {
    Users.deleteOne({_id: req.params.id}, req.body, err =>{
        res.status(200).json(req.body);
    });
})

module.exports = app => app.use('/users', router);
