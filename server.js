const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');
var request = require('request');

const app = express();
const PORT = process.env.PORT || 3100;

// Use CORS middleware to allow all origins
app.use(cors());

let tempBody = {
  "name": "James",
  "location": "Indy",
  "productType":  "productType",
  "dueDate": "dueDate",
  "phoneNumber": "phoneNumber",
  "productDesign": "productDesign",
  "color": "color",
  "notes": "notes",
}

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Forward route
app.post('/forward', async (req, res) => {
  console.log(JSON.stringify(req.body));
    //console.log(req.body);
    // let tempBody2 = {
    //   "name": req.body.name,
    //   "location": req.body.location,
    //   "productType":  req.body.productType,
    //   "dueDate": req.body.dueDate,
    //   "phoneNumber": req.body.phoneNumber,
    //   "productDesign": req.body.productDesign,
    //   "color": req.body.color,
    //   "notes": req.body.notes,
    // }
    // console.log(JSON.stringify(tempBody));
    request({
      url: "https://script.google.com/macros/s/AKfycbzN-iU79KPma0vSThBy7-s4GuugRnaCu-jdVOl1q6zlJeHKe3gTNOyN0m_L3CVhVM5y/exec",
      method: "POST",
      json: true, 
      //body: JSON.stringify(tempBody)
      body: req.body
  }, function (error, response, body){
      console.log(response.body);
      res.status(200).send(response.statusText);
  });


//   try {
//     const response = await fetch('https://script.google.com/macros/s/AKfycby5EsXGGs_jLvefEuP1Vry_uBcbWcPd7E8ls1JAbEYd_WMAk7fmIg6uAVcSklYPLHKE/exec', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json'},
//     //   body: JSON.stringify(req.body),
//     body: JSON.stringify(tempBody),
//     });

//     // if (!response.ok) {
//     //   throw new Error(`Error from the forwarded API: ${response.statusText}`);
//     // }
//     console.log(response);
//     //const data = await response.json();
//     //res.json(data);
//     res.status(200).send(response.statusText);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
});

// to allow specific origins
// app.use(cors({
//     origin: 'https://yourwebappdomain.com'
//   }));

  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
