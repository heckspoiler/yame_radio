const express = require('express');

import { testFunction } from './routes/testfetch';

const app = express();

testFunction();
