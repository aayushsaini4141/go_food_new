var mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://ayush:2022@cluster0.adm8vm0.mongodb.net/gofoodmern'


const mongoDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const collection = mongoose.connection.collection("food_items");
        const fetched_data = await collection.find({}).toArray();
        
        const food_category = mongoose.connection.collection("FoodCatagory");
        const foodCategoryData = await food_category.find({}).toArray();
        
        
        // console.log(foodCategoryData);

        global.food_items = fetched_data;
        global.FoodCatagory = foodCategoryData;
        
        // return { food_items: fetched_data, FoodCatagory: foodCategoryData };
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; 
    }
};





module.exports = mongoDB;