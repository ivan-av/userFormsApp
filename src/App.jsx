import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import useUserCRUD from './hooks/useUserCRUD'


function App() {
  
const {users, getAllUsers, createNewUser, deleteUser, putUpdateUser,  patchUpdateUser} = useUserCRUD()

console.log(users)

  return (
    <div className="App">
      {/* <button onClick={deleteMovie}>Delete Movie</button> */}
      <button onClick={createNewUser} className='button__post-user'>Post User</button>
      {/* <button>Up</button> */}
      <UsersForm />

      <div className='card-container'>
        {
          users?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              getAllUser={getAllUsers}
              patchUpdateUser={patchUpdateUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
