
  // Sign up with email
  const { user, error } = await supabase.auth.signUpWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
