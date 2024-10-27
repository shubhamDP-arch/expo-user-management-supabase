import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cktgexehjxokdygjwxec.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrdGdleGVoanhva2R5Z2p3eGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MzM2MDgsImV4cCI6MjA0NDUwOTYwOH0.6WR1O0_7GkNtWC5IC50CvTCcPuAKiM3w4NUlVvkQ3LI' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})