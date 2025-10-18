import { createClient } from '@supabase/supabase-js'
import { API_KEY, BASE_URL } from '../constants'

// создаём клиента Supabase
const supabaseUrl = BASE_URL
const supabaseKey = API_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
