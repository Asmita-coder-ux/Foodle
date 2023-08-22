// const express = require('express');
// const app = express();
// const port = 5000;
// const fetchFoodData = require("./db"); // Import the fetchFoodData function from db.js

// // Fetch data from the database and populate global.food_items
// fetchFoodData()
//   .then((data) => {
//     global.food_items = data;
//     // Start the server after fetching data and populating global.food_items

//     app.use((req, res, next) => {
//       res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//       res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//       );
//       next();
//     });

//     app.get('/', (req, res) => {
//       res.send('Hello World!');
//     });

//     app.use(express.json());
//     app.use('/api', require("./Routes/CreateUser"));
//     app.use('/api', require("./Routes/DisplayData"));

//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching food data:", error);
//   });



const express = require('express')
const app = express()
const port = 5000
const mongoDb=require("./db")
mongoDb();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"

  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api/auth',require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});