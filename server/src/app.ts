import { fetchTestSongs } from './routes/testfetch';
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('api/songs', async (req: any, res: any) => {
  try {
    const songs = await fetchTestSongs();
    console.log(songs);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

app.listen(6000, () => console.log('Server is running'));
