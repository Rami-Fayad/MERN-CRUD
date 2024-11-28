const mongoose =  require('mongoose');
require('dotenv').config();
const conndb = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI) ;
   console.log(`Mongo Connected : ${conn.connection.host}`)
    }
    catch(err){
        console.log(err);
    }
}
module.exports = conndb;