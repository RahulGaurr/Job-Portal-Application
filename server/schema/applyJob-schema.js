import mongoose from "mongoose";


const applySchema =  mongoose.Schema({
    name: String,
    email: String,
    experience: String,
    ctc: String,
    
})


const apply = mongoose.model('candidate', applySchema)

export default apply;