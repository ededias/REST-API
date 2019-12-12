const express = require('express');
const Publish = require('../Models/publish');
const router = express.Router();

router.get('/showItens', async (req, res) => {
    
    try{
        const publish = await Publish.find({}).sort({title: 1});
        if (publish == {}) return res.send({err: "error"});

        res.send({publish})
    } catch(err) {
        console.log(err)
    }

});

router.post('/registerItens', async (req, res) =>{

    try{

        const publish = await Publish.create(req.body);

        return res.send({ publish });

    }catch(err){

        return res.status(400).send({ error: 'Failed register' });

    }

});

router.get('/showItens/:id', async (req, res)=>{

   
    try{
        const publish = await Publish.findOne({_id: req.params.id})
        res.status(200).json(publish);

    }catch(err){

        res.status(404).send({err: "Publicação não existe"});

    }


});

router.put('/showItens/:id', async (req, res) => {
    
    try{
        const updatePublish = await Users.findById({_id: req.params.id}).updateOne(req.body);
        
        res.status(200).send({"title": updatePublish});

    }catch(err){
        console.log(err)
        res.status(400).json({err: "Erro ao editar"});

    };


});

router.delete('/deleteItem/:id', async (req, res) => {

    try {
        
        const deletePublish = await Publish.findByIdAndDelete({_id: req.params.id});
        
        res.status(200).send({_id: deletePublish});
    
    } catch (err) {
        
        res.status(400).json({err});
    
    }

});


module.exports = app => app.use('/itens', router);
