import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ListUsers from './components/ListUsers'
import FormUsers from './components/FormUsers'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div>
        <button onClick={showForm} className='button__post-user'>{isShowForm ? 'Hide Form' : 'Post User'}</button>
      </div>
      <div>
        {
          isShowForm &&
          <FormUsers
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
          />
        }
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <ListUsers
              key={user.id}
              user={user}
              URL={URL}
              getAllUsers={getAllUsers}
              setObjectUpdate={setObjectUpdate}
              setIsShowForm={setIsShowForm}
              reset={reset}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
