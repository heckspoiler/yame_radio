import { createClient } from '@supabase/supabase-js';

import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_ENDPOINT;
const supabasePrivateKey = process.env.SUPABASE_PRIVATE_KEY;

if (!supabaseUrl || !supabasePrivateKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}

export const supabase = createClient(supabaseUrl, supabasePrivateKey);
