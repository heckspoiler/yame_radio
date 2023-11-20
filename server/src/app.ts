import { fetchTestSongs } from './routes/testfetch';

const express = require('express');

const app = express();

app.get('api/songs', async (req: any, res: any) => {
  try {
    const songs = await fetchTestSongs();
    res.json(songs);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
