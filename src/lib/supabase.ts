import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';
import { env } from '../config/env';

// Create Supabase client with retry logic
const createSupabaseClient = () => {
  const client = createClient<Database>(
    env.supabaseUrl,
    env.supabaseAnonKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      global: {
        headers: {
          'x-application-name': 'fundrobe',
        },
      },
    }
  );

  return client;
};

export const supabase = createSupabaseClient();