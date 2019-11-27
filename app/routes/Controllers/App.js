const express = require('express');
const Publish = require('../Models/publish');
router = express.Router();

router.get('/showItens', (req, res) => {

    Publish.find({}).sort({title: 1}).exec((err, title)=>{

        try{

            res.send({title});    

        }catch(err) {

            res.status(400).json({err: "Erro de conexão"});
            
        }
    });
    
});

router.post('/cadItens', async (req, res) =>{

    try{

        const publish = await Publish.create(req.body);
        
        return res.send({ publish });

    }catch(err){

        return res.status(400).send({ error: 'Failed register' });

    }
    
});

router.get('/showItens/:id', async (req, res)=>{

    Publish.findOne({_id: req.params.id}).exec((err, title)=>{
        try{
        
            res.status(200).json(title);

        }catch(err){

            res.status(400).json({err: "Erro de conexão"});

        }
    });

});

router.put('/showItens/:id', async (req, res) => {

    Publish.update({_id: req.params.id}, req.body, err =>{

        try{
        
            res.status(200).json(req.body);

        }catch(err){

            res.status(400).json({err: "Erro de conexão"});

        };

    });

});


module.exports = app => app.use('/itens', router);