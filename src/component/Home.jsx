import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get(`http://localhost:3000/users`)
        // console.log(response);
        const data = response.data
        setUsers(data)
        console.log(data);
        
    }

    const deleteUser = async(id)=>{
        try{
            await axios.delete(`http://localhost:3000/users/${id}`)
            getUsers()
        } catch (error){
            console.log(error);
        }
    }

    return (
        <>
            <div className='columns mt-5'>
                <div className='column is-half'>

                
                <Link to="/add" className='button is-success'>
                    Add New
                </Link>
                <table className='table is-striped is-fullwidth mt-2'>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=>{
                           return <tr key={user._id}>
                                <td>{index +1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link className='button is-success mr-1' to={`/edit/${user._id}`}>Edit</Link>
                                    <button onClick={()=>deleteUser(user._id)} className='button is-danger'>Delete</button>
                                </td>
                                
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default Home