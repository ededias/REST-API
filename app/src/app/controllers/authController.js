const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../Models/user');
const AuthSecret = require('../../Secret/Auth.json');

const router = express.Router();

function jsonEncoded(params = {}) {
    return jwt.sign(params, AuthSecret.secret, {
        expiresIn: 86400
    })
}

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select('+password');
    console.log(user);
    if(!user)
        return res.status(400).json('User not a found');

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).json('password or email incorrect');

    user.password = undefined;

    res.send({
        user,
        token: jsonEncoded({id: user.id})
    });

})

router.post('/registerUsers', async (req, res) => {

   const { email, password } = req.body;

   try {

        if(email == null && password == null) 
            return res.status(400).json('prencha os campos');

        if(await Users.findOne({email}))
            return res.status(400).json('user already exist');
        
        const user = await Users.create(req.body);
    
        res.send({
            user: user,
            token: jsonEncoded()
        })

   }catch (e) {
        res.send({e});
   }

});

module.exports = app => app.use('/auth', router);