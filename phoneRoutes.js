const express = require('express');
const fs = require('fs');
const router = express.Router();
const Post = require('./models/PostPhones');
const PostAccess = require('./models/PostAccessories');

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message: err})
  }
})

router.get('/:phoneId', async (req, res) => {
  try{
    const phones = await Post.find({id : req.params.phoneId});
    const accessories = await PostAccess.find({phoneid : req.params.phoneId});
    phones[0].accessory=accessories;
    res.status(200).json(phones[0]);
  }
  catch(err){
    console.log(err);
  }
  });

  router.post('/', async (req, res) => {
    console.log(req.body)
    const post = new Post({
      ...req.body
    });
    try{
      const savedPost = await post.save()
      res.json(savedPost);
    } catch(err){
      res.json({message: err});
    }
    });

  router.patch('/:phoneId', async (req,res)=>{
    try{
      const updatedPhone = await Post.updateOne({id : req.params.phoneId},{$set:{...req.body}});
      res.status(200).json(updatedPhone)
    }catch(err){
      console.log(err);
    }
  })

  router.delete("/:phoneId",(req,res)=>{
    if(phones.find(phone=> {return phone.id === req.params.phoneId}
    )){
      let index = phones.findIndex(item=> item.id === req.params.phoneId).splice(index,1)
      res.status(200).send({...phones})
    }else{res.status(400).send("Cant Find")}
  });


module.exports = router;