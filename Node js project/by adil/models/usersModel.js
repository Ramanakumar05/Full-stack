const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        trim:true,
        unique:[true,"Email must be unique"],
        minLength:[5,"min len 5"],
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"password is must"],
        trim:true,
        select:false,
    },
    verfied:{
        type:Boolean,
        default:false
    },
    verficationCode:{
        type:String,
        select:false
    },
    verficationCodeValidation:{
        type:String,
        select:false
    },
    forgotPasswordcode:{
        type:String,
        select:false
    },
    forgotPasswordcodeValidation:{
        type:String,
        select:false
    },
},{
    timestamps:true
});


module.exports=mongoose.model('User',UserSchema)
