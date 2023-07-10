var mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://ayush:2022@cluster0.adm8vm0.mongodb.net/gofoodmern'

const mongoDB=async()=>{
    try{

        await  mongoose.connect(mongoURL);
        const fetched_data = await mongoose.connection.collection("food_items").find().toArray();
        console.log();                  //fetched_data
        console.log('run');
    }catch (err) {
        console.log(err);
    }
    
}
  

module.exports = mongoDB;