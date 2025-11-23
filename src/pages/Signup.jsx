
import { useState } from "react";
import axios from 'axios';

export default function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault()
        const res = await axios.post('http://localhost:8080/api/v1/auth/signup', { username, email, password }, {
            withCredentials : true
        });
        if(res.data.msg === 'signed up'){
            console.log('registered');
        }
    }

    return(
        <div className="h-screen flex items-center justify-center">
            <form className="">
                <input className="w-full text-center block m-2 p-2 border rounded-md" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="username"/>
                <input className="w-full text-center block m-2 p-2 border rounded-md" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email"/>
                <input className="w-full text-center block m-2 p-2 border rounded-md" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password"/>
                <button className="w-full text-center block m-2 p-2 border rounded-md" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

