const moongose=require('mongoose')
const bycrypt=require('bcryptjs')
const UserSchema=new moongose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        // The enum part means that the role field is restricted to a limited set of values, specifically 'user' or 'admin'. This is used to ensure that the value assigned to role is one of these two options, preventing invalid or unexpected values from being assigned.   
        enum:['user','admin'],
        default:'user'
    }
})


UserSchema.pre('save',async function(next) {


    // Context of this: In Mongoose middleware, you should use a traditional function (not an arrow function) to ensure this refers to the correct document context.


    if(!this.isModified('password'))
    {   
        return next();
    }
    else
    {
        this.password=await bycrypt.hash(this.password,10);
        next()
    }
})

// model(model_name,schema)
module.exports=moongose.model('User',UserSchema)