const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

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
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxyK5947bvaShC7cDTRbASy74myyB6KK4nMYEFUt0590cnd7I4lKodFrN2uAZzEkYUo/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(req.body),
    body: JSON.stringify(tempBody),
    });

    if (!response.ok) {
      throw new Error(`Error from the forwarded API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// to allow specific origins
// app.use(cors({
//     origin: 'https://yourwebappdomain.com'
//   }));

  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));