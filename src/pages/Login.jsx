
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post('http://localhost:8080/api/v1/auth/login', { username, password }, {
            withCredentials: true
        });
        if (res.data.msg === 'logged in!') {
            console.log('logged');
            navigate('/explore');
        }
    }
    async function handleclick() {
        navigate('/signup');
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-blue-400 hidden md:block">
                contents
            </div>
            <div className="items-center justify-center bg-black-800 flex-1">
                <div className="flex justify-center h-85 items-end">
                    <h1 className="text-3xl text-center mb-4">
                        welcome back!
                    </h1>
                </div>

                <div className="flex justify-center pt-3">
                    <form>
                        <input className="w-60 text-center block mb-2 p-2 border rounded-lg" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="commn.connect.commn" />
                        <input className="w-full text-center block mb-2 p-2 border rounded-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="***********" />
                        <div className="flex justify-center pt-2">
                            <button className="w-40 bg-blue-400 p-2 text-center flex justify-center rounded-md cursor-pointer" onClick={handleSubmit}>Sign Up!</button>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <button className="cursor-pointer" onClick={handleclick}>create account now? signup</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}

