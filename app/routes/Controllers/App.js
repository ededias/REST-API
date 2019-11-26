const express = require('express');
const Publish = require('../Models/publish');
router = express.Router();

router.get('/showItens', (req, res) => {

    res.send('teste');

});

router.post('/cadItens', async (req, res) =>{

    try{

        const publish = await Publish.create(req.body);
        
        return res.send({ publish });

    }catch(err){

        return res.status(400).send({ error: 'Failed register' });

    }
    
});


module.exports = app => app.use('/cad', router);