import mongoose from "mongoose";




const Connection = async (username, password) => {

    const URL= `mongodb://${username}:${password}@ac-vd26pjv-shard-00-00.httu1yy.mongodb.net:27017,ac-vd26pjv-shard-00-01.httu1yy.mongodb.net:27017,ac-vd26pjv-shard-00-02.httu1yy.mongodb.net:27017/?ssl=true&replicaSet=atlas-arga73-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true})
       console.log('database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting database', error)
    }
}

export default Connection

