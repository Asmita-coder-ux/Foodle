// const mongoose = require('mongoose');

// const mongoUri = 'mongodb+srv://gofood:Asmita@cluster0.sgufqw5.mongodb.net/?retryWrites=true&w=majority'

// const fetchFoodData = async () => {
//   try {
//     await mongoose.connect(mongoUri, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");
//     const collection = mongoose.connection.db.collection("food_items");
//     const data = await collection.find({}).toArray();
//     console.log("Fetched data:", data);
//     // mongoose.connection.close(); // Close the connection after querying data (optional)
//     return data; // Return the fetched data
//   } catch (err) {
//     console.error("---", err);
//     throw err;
//   }
// };
// const fetchFoodData = async () => {
//   try {
//     await mongoose.connect(mongoUri, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     const collection = mongoose.connection.db.collection("food_items");
//     console.log("Before find query");
//     const data = await collection.find({}).toArray();
//     console.log("After find query, Fetched data:", data);

//     // mongoose.connection.close(); // Close the connection after querying data (optional)
//     return data;
//   } catch (err) {
//     console.error("Error fetching food data:", err);
//     throw err;
//   }
// };

// module.exports = fetchFoodData; // Export the function as fetchFoodData instead of mongoDb



const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://gofood:Asmita@cluster0.sgufqw5.mongodb.net/?retryWrites=true&w=majority'

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory=await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function(err,catData){
        if (err) console.log(err);
        else{
          global.food_items=data;
          global.foodCategory=catData;

        }

      })

      // if (err) console.log(err);
      // else {
      //   global.food_items=data;
      // }
      // mongoose.connection.close(); // Close the connection after querying data
    });
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDb;

// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://gofood:Asmita@cluster0.sgufqw5.mongodb.net/?retryWrites=true&w=majority'// Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

// const mongoose = require('mongoose');
// const mongoUri = 'mongodb+srv://gofood:Asmita@cluster0.sgufqw5.mongodb.net/?retryWrites=true&w=majority';

// const mongoDb = async () => {
//   try {
//     await mongoose.connect(mongoUri, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };

// const mongoose = require('mongoose');
// const mongoUri = 'mongodb+srv://gofood:Asmita@cluster0.sgufqw5.mongodb.net/?retryWrites=true&w=majority';

// const mongoDb = () => {
//   mongoose
//     .connect(mongoUri)
//     .then(() => {
//       console.log('Connected to MongoDB successfully!');
//     })
//     .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//     });
// };

// module.exports = mongoDb;

