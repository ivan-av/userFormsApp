import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({ createUser, updateUserById, objectUpdate, handleSubmit, reset, register }) => {

  const defaultValuesForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }

  const submit = data => {
    if (objectUpdate !== undefined) {
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <div className='form__background'>
      <form onSubmit={handleSubmit(submit)} className='form__container'>
        <div>
          <label htmlFor="first_name">First name</label>
          <input type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" id='last_name' {...register('last_name')} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id='birthday' {...register('birthday')} />
        </div>
        <button>Submit</button>
      </form>
    </div>

  )
}

export default FormUsers