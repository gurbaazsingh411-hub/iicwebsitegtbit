// @ts-nocheck
import process from 'process'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://qslbrluleqqetjhdmbmq.supabase.co'
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY.")
  console.error("Please provide it by running: SUPABASE_SERVICE_ROLE_KEY=your_key npx tsx supabase/add_admin.ts")
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

async function createAdmin() {
  const email = 'gurbaazsingh411@gmail.com'
  const password = 'iicgtbit'

  // 1. Create the user
  console.log(`Creating user ${email}...`)
  let userId: string | undefined;

  const { data: userData, error: userError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true // skips confirmation email
  })

  if (userError) {
    if (userError.message.includes('already exists')) {
      console.log('User already exists. Fetching user ID...')
      const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers()
      if (listError) {
        console.error('Error listing users:', listError)
        return
      }
      const user = existingUsers.users.find(u => u.email === email)
      if (user) {
        userId = user.id
        // Try to update password just in case
        await supabase.auth.admin.updateUserById(userId, { password })
      } else {
        console.error('Could not find existing user ID.')
        return
      }
    } else {
      console.error('Error creating user:', userError)
      return
    }
  } else if (userData?.user) {
    userId = userData.user.id
  }

  if (!userId) {
    console.error('User creation failed: No user ID retrieved.')
    return
  }

  // 2. Add to user_roles
  console.log(`Assigning admin role to ${email} (ID: ${userId})...`)
  const { error: roleError } = await supabase
    .from('user_roles')
    .upsert({ user_id: userId, role: 'admin' }, { onConflict: 'user_id, role' })

  if (roleError) {
    console.error('Error assigning admin role:', roleError)
    return
  }

  console.log('Successfully created user and assigned admin role. You can now log in.')
}

createAdmin()
