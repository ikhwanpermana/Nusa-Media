// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Menggunakan awalan PUBLIC_ agar aman dibaca oleh Astro di sisi server maupun client browser
let supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://zmvlvzspjohrewjbtfxc.supabase.co';
supabaseUrl = supabaseUrl.replace(/\/$/, ""); 

const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
