
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../api/axios.js';
import Postcard from '../components/Postcard.jsx';

export default function Explore() {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function loadpost() {
            const res = await api.get('/post/explore');
            console.log(res.data.posts);
            setPost(res.data.posts);
            if (res.data.msg === "not authenticated") {
                navigate('/login');
            }
        }
        loadpost();
    }, []);

    useEffect(() => {
        async function findUser() {
            const res = await api.get('/auth/me');
            if (res.data == 'oos') {
                navigate('/login')
            }
            console.log(res.data.user);
            setUser(res.data.user);
        }
    }, [])


    async function handleLogout() {
        const res = await api.post('/auth/logout');
        if (res.data.msg === 'logged out') {
            navigate('/login');
        }

    }

    function handlenewpost(newpost) {
        setPost(prev => [newpost, ...prev]);
    }
    // console.log(post);

    return (
        <div className='flex justify-center h-full w-full'>
            <div className='w-30% bg-blue-300'>
                user
            </div>

            <div className='w-33% bg-black-300'>
                {/* <Post onCreate={handlenewpost}></Post> */}
                {post.map(p => (
                    <Link to={`/comment/${p.id}`} key={p.id}>
                        <Postcard post={p} />
                    </Link>
                ))}
            </div>
            <div className='w-30%  bg-green-300'>
                suggestions
            </div>
        </div>
    );
}
