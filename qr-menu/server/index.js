const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 4206;
const {cloudinary} = require('./something.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.set('Content-Encoding', 'gzip');
  res.status(200).send('../dist/index.html');
});

app.post('/postImageForQr', async (req, res) => {
  try {
    const uploaded = req.body.image;
    const uploadedResponse = await cloudinary.uploader.upload(
      uploaded,
      function (error, result) {
        console.log(result);
      }
    );
    res.send(uploadedResponse.url)
  } catch (error) {
    res.send(404);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
