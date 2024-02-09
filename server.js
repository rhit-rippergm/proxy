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
      'name': "new",
      'location': "newLoc",
      'productType': "Type",
      'dueDate': "date",
      'phoneNumber': "number",
      'productDesign': "design",
      'color': "color",
      'notes': "notes",
    }
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Forward route
app.post('/forward', async (req, res) => {
    console.log('forward');

    request({
      url: "https://script.google.com/macros/s/AKfycbyfd9DBcMh3qk-FdnNIIId8OWDpGjEnBkastqXKCYKf1eg4-salatc2xUPL3_d2IYiL/exec",
      method: "POST",
      json: true,   // <--Very important!!!
      //body: JSON.stringify(tempBody)
      body: req.body
  }, function (error, response, body){
      console.log(response);
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
