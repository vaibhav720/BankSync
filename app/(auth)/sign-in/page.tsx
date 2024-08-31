import AuthForm from '@/components/ui/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const SignIn = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  return (
    <section className='flex-center size-full max-am:px-6'>
        <AuthForm type="sign-in" />

    </section>
  )
}

export default SignIn
