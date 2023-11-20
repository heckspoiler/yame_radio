import express from 'express';
import axios from 'axios';
import { supabase } from '../config/supabaseClient';
import * as dotenv from 'dotenv';
dotenv.config();

interface song {}

interface testsongArray {
  id: number;
  created_at: string;
  song: string;
}

export async function fetchTestSongs() {
  try {
    let { data: testSongs, error } = await supabase
      .from('testsongs')
      .select('song');

    if (error) throw error;
    const testSongsJSON = JSON.stringify(testSongs);

    // If you need to send this JSON string somewhere or use it as a JSON,
    // you can do so here
    console.log(testSongsJSON);
  } catch (err) {
    console.error(err);
  }
}
