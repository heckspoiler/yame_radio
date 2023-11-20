import { supabase } from '../config/supabaseClient';

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

    if (error) {
      throw error;
    }

    console.log(testSongs);
    return testSongs;
  } catch (err) {
    console.error('Error fetching test songs:', err);
    throw err;
  }
}
