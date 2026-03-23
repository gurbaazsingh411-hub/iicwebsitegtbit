import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://qslbrluleqqetjhdmbmq.supabase.co'
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbGJybHVsZXFxZXRqaGRtYm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyODMzMTMsImV4cCI6MjA4OTg1OTMxM30.ufqf7jCt8i0Tc9o-q7Do4kGBlX8k3fJlwM-AQAfTV4g'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function testLogin() {
  console.log('Attempting to log in as gurbaazsingh411@gmail.com with iicgtbit...')
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'gurbaazsingh411@gmail.com',
    password: 'iicgtbit',
  })

  if (error) {
    console.error('Login failed:', error.status, error.message)
    console.error(error)
  } else {
    console.log('Login successful!', data.session?.user?.id)
  }
}

testLogin()
