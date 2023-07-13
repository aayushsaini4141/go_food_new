var mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://ayush:2022@cluster0.adm8vm0.mongodb.net/gofoodmern'

const mongoDB = async () => {
    try {

        await mongoose.connect(mongoURL)
        const fetched_data = await mongoose.connection.collection("food_items");
            fetched_data.find({})
            .toArray(function(err, data) { 

                console.log();                  //fetched_data
                console.log('run');
                global.food_items = data;
                console.log(global.food_items);
            })
        }
            catch (err) {
                console.log(err);
            }
}



module.exports = mongoDB;