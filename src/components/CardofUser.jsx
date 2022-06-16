import React from 'react'

const CardofUser = ({user, deleteUser, getAllUsers, patchUpdateUser}) => {
  return (
    <article className='card-of-user'>
        <h2>{`#${user.id} ${user.first_name} ${user.last_name}`}</h2>
        <p><b>Email: </b>{user.email}</p>
        <p><b>Password: </b>{user.password}</p>
        <p><b>Birthday: </b>{user.birthday}</p>
        <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
        <button onClick={() =>patchUpdateUser(user.id)}>Update</button>
    </article>
  )
}

export default CardofUser