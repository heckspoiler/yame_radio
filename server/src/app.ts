const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const { fetchTestSongs } = require('./routes/testfetch');

app.get('/api/songs', async (req: any, res: any) => {
  try {
    const songs = await fetchTestSongs();
    console.log('fetched Songs: ', songs);
    res.json(songs);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

app.listen(4000, () => console.log('Server is running'));
