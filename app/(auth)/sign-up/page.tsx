import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignUp = ({type}:{type:string}) => {
  return (
    <section className='flex-center size-full max-am:px-6'>
    <AuthForm type='sign-up' />

</section>
  )
}

export default SignUp
