const express = require('express');
const router = express.Router();
const {getActivities} = require('../db/queries');

/* GET users listing. */

//fake database

const childrenDatabase = {
    1: {
        name : 'Sam',
        families_id: '1',
        birthDate: '1,13,2023'
    }
}

router.get('/', (req, res) => {
//   res.json({title: "Add New Child Page"});
// res.json({childrenDatabase});
res.set({
    'Content-Type': 'text/plain'
  }); 
getActivities().then(data => {
  console.log(data);
  return res.send(data);  
})
// res.json({getActivities});
});

module.exports = router;
