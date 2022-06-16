import React from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = () => {
   const {handleSubmit, register} = useForm()

    const submit = data => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="first_name">First name</label>
      <input type="text" id='first_name' {...register('first_name')}/>
    </div>
    <div>
      <label htmlFor="last_name">Last name</label>
      <input type="text" id='last_name' {...register('last_name')}/>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" id='email' {...register('email')}/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="text" id='password' {...register('password')}/>
    </div>
    <div>
      <label htmlFor="birthday">Birthday</label>
      <input type="date" id='birthday' {...register('birthday')}/>
    </div>
    <button>Submit</button>
  </form>
  )
}

export default UsersForm