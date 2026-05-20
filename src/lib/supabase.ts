import { createClient } from '@supabase/supabase-js';

// Membaca variabel lingkungan secara aman dengan TypeScript menggunakan Astro env
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

// Validasi untuk memastikan variabel lingkungan sudah terisi di .env
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Variabel lingkungan SUPABASE_URL atau SUPABASE_ANON_KEY belum dikonfigurasi di file .env!'
  );
}

// Membuat dan mengekspor instansi client Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
