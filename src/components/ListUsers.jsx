import React from 'react'
import axios from 'axios'

const ListUsers = ({ user, getAllUsers, URL, setObjectUpdate, setIsShowForm, reset }) => {

  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = () => {
    setIsShowForm(true)

    const obj = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday
    }
    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <article className='card-of-user'>
      <div className='user__name'>{`${user.first_name} ${user.last_name}`}</div>
      
      <div className='user__details'>
        <span>Email </span>
        <div className='user-details__email'>{user.email}</div>
      </div>

      {/* <div>
        <span>Password: </span>
        <div>{user.password}</div>
      </div> */}

      <div className='user__details'>
        <span>Birthday </span>
        <div>{user.birthday}</div>
      </div>

      <div className='user__button-container'>
        <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can user__button-icon trash__icon"></i></button>
        <button onClick={updateUser}><i className="fa-solid fa-pencil user__button-icon pencil__icon"></i></button>
      </div>
    </article>
  )
}

export default ListUsers