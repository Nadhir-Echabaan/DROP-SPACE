import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pgkzvgclgcutrmazygce.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBna3p2Z2NsZ2N1dHJtYXp5Z2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMjk0MDQsImV4cCI6MjA1NTcwNTQwNH0.x7832rhYDF8__GVHtGPEIFn4xr3qYpt5OsazzC5TtzM'
const supabase = createClient(supabaseUrl, supabaseKey) 

export default supabase; 