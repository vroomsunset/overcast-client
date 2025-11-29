
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post('http://localhost:8080/api/v1/auth/signup', { username, email, password }, {
            withCredentials: true
        });
        if (res.data.msg === 'signed up') {
            console.log('registered');
            navigate('/explore');
        }
    }
    async function handleclick() {
        navigate('/login');
    }

    return (
        <div className="h-screen bg-white-400">
            <div className="flex p-30 overflow-y-hidden">
                <div className="w-1/2 bg-green-400 hidden lg:block">
                    contents
                </div>
                <div className="items-center justify-center bg-blue-800 flex-1">
                    <div className="flex justify-center">
                        <h1 className="text-3xl text-center">
                            get started !
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <form>
                            <input className="w-60 text-center block border rounded-lg" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="commn.connect.commn" />
                            <input className="w-full text-center block border
                    rounded-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="connect@commn.com" />
                            <input className="w-full text-center block border rounded-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="***********" />
                            <div className="flex justify-center">
                                <button className="w-40 bg-blue-400 p-2 text-center flex justify-center rounded-md cursor-pointer" onClick={handleSubmit}>Sign Up!</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="cursor-pointer" onClick={handleclick}>Already Signed Up? Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

