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
    console.log(testSongs);
  } catch (err) {
    console.error(err);
  }
}
