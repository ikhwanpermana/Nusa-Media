import { createClient } from '@supabase/supabase-js';

// Mengambil URL dan KEY dari file rahasia .env
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

// Memastikan variabel lingkungan sudah diisi agar tidak error
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL dan Anon Key harus diatur di dalam file .env!");
}

// Membuat dan mengekspor client Supabase untuk digunakan di file .astro Anda
export const supabase = createClient(supabaseUrl, supabaseKey);
