const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
label :{
    type:String,
    required:true,
    trim:true,
    unique:true
},
checked:{
    type:String,
    required:true,
}
},
{
    timestamps:true,
});

const User = mongoose.model('User',userSchema);

module.exports=User;
