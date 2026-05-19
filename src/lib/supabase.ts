import { createClient } from '@supabase/supabase-js';

// Ambil URL dan hapus spasi atau garis miring '/' di bagian paling akhir jika ada
let supabaseUrl = import.meta.env.SUPABASE_URL || 'https://supabase.co';
supabaseUrl = supabaseUrl.replace(/\/$/, ""); // <-- Ini mencegah eror "Invalid path"

const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
