
import { createClient } from '@supabase/supabase-js'
import { API_KEY, BASE_URL } from '../constants'
const supabaseUrl = BASE_URL
const supabaseKey = API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)