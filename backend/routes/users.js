const router =  require('express').Router();
let User = require('../models/user.model');


router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>
{
    const label = req.body.label;
    const checked = req.body.checked;

    const newUser = new User({label,checked});
    
    newUser.save()
    .then(()=>res.json('labels added!'))
    .catch(err=>res.status(400).json('Error :'+err));
});

module.exports=router;