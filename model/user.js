var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:{type:String,required:true},
    age: {type:Number,required:true,min:1},
    email:{type:String}
});
var user= mongoose.model('User', userSchema,'users');
module.exports=user;

