const express = require('express');
const router =express.Router();

const Preview = require('../models/preview');

//Retrieving contacts
router.get('/previews',(req,res,next)=>{
  Preview.find(function(err,preview){
      res.json(preview);
      return next();
  });

});
//add contacts
router.post('/preview',(req,res,next)=>{
    console.log("server is called")
    let newPreview = new Preview({
        title:req.body.title,
        address : req.body.address,
        category:req.body.category,
        description:req.body.description,
    message:req.body.message,
    createdDate:req.body.createdDate,
    videoUrl:req.body.videoUrl,
    ImageUrl:req.body.ImageUrl
    
    });
    newPreview.save((err,preview,next)=>{
        if(err){
            res.json({msg :"Failed to add Contact"});
        }
        else{
            res.json({msg:"preview added successfully"});
            res.json(preview);
        }
        return next();
    });
    return next();
});

//delete contacts 
router.delete('/preview/:id',(req,res,next)=>{

    Preview.deleteOne({_id:req.params.id},function(err,result){
                  if(err){
                      res.json({msg:'Failed to deleted'});
                      res.json(err);
                  }
                  else
                  {
                      res.json({msg: "Contact deleted successfully"});
                      res.json(result);
                  }
    })
    return next();
})

module.exports = router;