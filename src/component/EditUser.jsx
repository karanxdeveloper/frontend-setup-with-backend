import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'


function EditUser() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("male")
    const navigate = useNavigate()
    const { id } = useParams()

     useEffect(()=>{
        getUserById()
    }
    ,[])

    const getUserById = async (e)=>{
        const reponse = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(reponse.data.name);
        
        setName(reponse.data.name)
        setEmail(reponse.data.email)
        setGender(reponse.data.gender)
    }

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/users/${id}`, {
                name, email, gender
            })
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <div>
                <form onSubmit={updateUser}>
                    <div className='field'>
                        <label className='label'>name</label>
                        <div className='control'>
                            <input type="text" value={name} placeholder={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input type="email" value={email} placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>name</label>
                        <div className='control'>
                            <div className='select is-fullwidth'>
                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <button type='submit' className="button is-success">
                                update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser