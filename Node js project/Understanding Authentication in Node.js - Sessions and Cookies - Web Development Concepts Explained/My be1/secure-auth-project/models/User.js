const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin","manager"], default: "user" }
    // Here, enum is used to specify that the role field can only have one of two values: "user" or "admin." This helps to ensure that only valid values are assigned to the role field, making the code more robust and preventing errors.
},{timestamps:true});


UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    // if changes happens
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

module.exports = mongoose.model("User", UserSchema);
