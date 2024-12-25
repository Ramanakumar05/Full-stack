const mongoose=require('mongoose')


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gmail:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    quote:{
        type:String
    },
    // {collection:'user-data'}
}
)

// model
const model=mongoose.model('userDate',userSchema)

// 'userDate' is the name of the collection (MongoDB will pluralize it to ‘users’).
// userSchema is the schema we defined earlier.


module.exports=model