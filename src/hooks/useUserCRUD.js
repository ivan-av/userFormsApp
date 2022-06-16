import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useUserCRUD = () => {

    const URL = 'https://users-crud1.herokuapp.com/users/'
    const [users, setUsers] = useState()

    const getAllUsers = () => {
        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])


    const createNewUser = () => {

        const newUser = {
            email: 'test@gmail.com',
            password: '1234',
            first_name: 'Test',
            last_name: 'Name',
            birthday: '2011-01-03'
        }

        axios.post(URL, newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }

    const deleteUser = id => {
        axios.delete(`${URL}${id}/`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }

    const putUpdateUser = id => {

        const updateAllInfo = {
            email: 'update@gmail.com',
            password: 'updatepassword',
            first_name: 'First_Update',
            last_name: 'Last_Update',
            birthday: '1960-12-12'
        }

        axios.put(`${URL}${id}/`, updateAllInfo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }

    const patchUpdateUser = id => {

        const updatePartialInfo = {
            email: 'patch@gmail.com',
            password: 'patchpassword',
        }

        axios.patch(`${URL}${id}/`, updatePartialInfo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }

    return {users, getAllUsers, createNewUser, deleteUser, putUpdateUser,  patchUpdateUser }
}

export default useUserCRUD