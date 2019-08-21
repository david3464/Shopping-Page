const express = require('express');
const router = express.Router();

//Item Models
const Item = require('../../models/item');

//@route POST api/itmes
//@desc Get all items
//@access Public
router.get('/',(req,res)=> {
    Item.find()
        .sort({date: -1})
        .then(item=> res. json(item));
});

//@route POST api/itmes
//@desc Create a items
//@access Public
router.post('/',(req,res)=> {
   const NewItem = new Item({
       name: req.body.name
   });
   newItem.save().then(item => res.json(item))
});

//@route DELETE api/itmes/:id
//@desc Delete an item
//@access Public
router.delete('/:id',(req,res)=> {
    Item.findById(req.param.id)
     .then(item => item.remove().then(() => res.json({success: true})))
     .catch(err => rs.status(404).json({success: false}));
 });
     





module.exports = router;