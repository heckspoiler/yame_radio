import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const endpoint = process.env.ENDPOINT;
const apiKey = process.env.PRIVATE_KEY;
const router = express.Router();

export const testFunction = () => {
  console.log(endpoint, apiKey);
};

const app = express();
