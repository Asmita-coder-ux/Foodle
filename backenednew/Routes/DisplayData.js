const express = require('express');
const router = express.Router();

// Assuming global.food_items is populated before this route handler is accessed

router.post('/foodData', (req, res) => {
  try {
    console.log(global.food_items,global.foodCategory);
    res.json(global.food_items); // Send the data as a JSON response
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// router.post('/foodData',(req,res)=>{
//     try{
//         console.log(global.food_items)
//         res.send([global.food_items])

//     }catch(error){
//         console.error(error.message);
//         res.status(500).send("Server Error")

//     }
// });
// router.post('/foodData', async (req, res) => {
//     try {
//       console.log(global.food_items); // Check the value of global.food_items
//       res.json(global.food_items);   // Send the data as a JSON response
//     } catch (error) {
//       console.error(error); // Log detailed error information
//       res.status(400).json({ error: 'Server Error' }); // Return a 500 error with JSON response
//     }
//   });
  
// module.exports = router;