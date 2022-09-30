import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const jobSchema =  mongoose.Schema({
    title: String,
    role: String,
    company: String,
    location: String,
    description: String
})

autoIncrement.initialize(mongoose.connection);
jobSchema.plugin(autoIncrement.plugin, 'user')

const job = mongoose.model('job', jobSchema)

export default job;