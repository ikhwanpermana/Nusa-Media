import { createClient } from '@supabase/supabase-js'

// Membaca variabel lingkungan secara fleksibel (bisa dari .env lokal atau netlify.toml server)
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

// Inisialisasi client Supabase tanpa memblokir aplikasi dengan eror teks manual
export const supabase = createClient(supabaseUrl, supabaseKey)
