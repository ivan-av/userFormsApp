import React from 'react'
import axios from 'axios'

const ListUsers = ({user, getAllUsers, URL, setObjectUpdate, setIsShowForm, reset}) => {

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
        <h2>{`#${user.id} ${user.first_name} ${user.last_name}`}</h2>
        <p><b>Email: </b>{user.email}</p>
        <p><b>Password: </b>{user.password}</p>
        <p><b>Birthday: </b>{user.birthday}</p>
        <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
        <button onClick={updateUser}>Update</button>
    </article>
  )
}

export default ListUsers