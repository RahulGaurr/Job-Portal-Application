import mongoose from "mongoose";




const Connection = async (username, password) => {

    const URL= `mongodb://${username}:${password}@ac-xfil6jz-shard-00-00.pu0uvjx.mongodb.net:27017,ac-xfil6jz-shard-00-01.pu0uvjx.mongodb.net:27017,ac-xfil6jz-shard-00-02.pu0uvjx.mongodb.net:27017/?ssl=true&replicaSet=atlas-13gddu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true})
       console.log('database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting database', error)
    }
}

export default Connection