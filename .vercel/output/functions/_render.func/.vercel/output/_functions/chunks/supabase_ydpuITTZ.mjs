import { createClient } from '@supabase/supabase-js';

const supabaseUrl = undefined                                   ;
const supabaseAnonKey = undefined                                        ;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
