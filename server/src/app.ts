import { fetchTestSongs } from './routes/testfetch';

const express = require('express');

const app = express();

fetchTestSongs();
