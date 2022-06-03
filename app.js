const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},


})

const user = mongoose.model("user",userSchema)


const userpostSchema=new mongoose.Schema({
    follower:[{
        type:mongoose.SchemaTypes.ObjectId,ref:"users"
    }],
    following:[{
        type:mongoose.SchemaTypes.ObjectId,ref:"users"
    }]
})

const relationship=mongoose.model("relationship",userpostSchema)

// tweetsSchema
const tweetsSchema=new mongoose.Schema({
    content:{type:String,required:true},
    user_id:[{
        type:mongoose.SchemaTypes.ObjectId,ref:"user"
    }]


})

const tweets=mongoose.model("user",tweetsSchema)
