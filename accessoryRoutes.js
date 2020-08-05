const express = require('express');
const fs = require('fs');
const router = express.Router();
const Post = require('./models/PostAccessories');

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message: err})
  }
})

router.get('/:accessoryId', async (req,res)=>{
    try{
      const accessories = await Post.find({id : req.params.accessoryId});
        res.status(200).json(accessories);
    }catch(err){
      console.log(err);
    }
    }   
)

router.post('/', (req, res) => {
    console.log(req.body)
    const post = new Post({
      ...req.body
    })
    post.save()
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.json({message: err});
    })
  });

router.patch('/:accessoryId', async(req,res)=>{
  try{const updatedAccessory = await Post.updateOne({id: req.params.accessoryId},{$set:{...req.body}});
  res.status(200).json(updatedAccessory);
}catch(err){
  console.log(err);
}
})

module.exports = router;