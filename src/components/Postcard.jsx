
import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { useState, useEffect, useMemo } from 'react';
import api from '../api/axios.js';

export default function PostCard({ post }) {
    // format time
    function timeagoshort(date) {
        const now = new Date();
        const seconds = differenceInSeconds(now, date);
        if (seconds < 60) return `${seconds}s`;

        const minutes = differenceInMinutes(now, date);
        if (minutes < 60) return `${minutes}m`;

        const hours = differenceInHours(now, date);
        if (hours < 24) return `${hours}h`;

        const days = differenceInDays(now, date);
        if (days < 30) return `${days}d`;

        const months = differenceInMonths(now, date);
        if (months < 12) return `${months}mo`;

        const years = differenceInYears(now, date);
        return `${years}y`;
    }

    const time = timeagoshort(new Date(post.createdAt));

    // state
    const [liked, setLiked] = useState(false);
    const [follow, setFollow] = useState(false);
    const [user, setUser] = useState();

    // build liked set safely
    const likedSet = useMemo(() => {
        return new Set((user?.likeposts ?? []).map(p => p.id));
        //safely fetches user.likeposts, if returns undefined, if the before returns undefined, it init an array
    }, []);

    const followedset = useMemo(() => {
        return new Set((user?.following ?? []).map(p => p.id));
    }, []);

    useEffect(() => {
        async function findUser() {
            const res = await api.get('/auth/me');
            console.log(res.data.user);
            setUser(res.data.user);
        }
    }, [])

    // set initial liked boolean when user or post changes
    useEffect(() => {
        setLiked(Boolean(likedSet.has(post.id)));
        // also ensure likeCount sync with post on mount
    }, [likedSet, post]);

    //set initial follow state
    // useEffect(() => {
    //     setFollow(Boolean(followedset.has(post.user.id)))
    // }, [followedset, post])

    // toggle like with optimistic update and rollback
    async function togglelike(e) {
        e.stopPropagation();
        e.preventDefault();
        if (!user) {
            // prompt login or return
            console.log('not authenticated');
            return;
        }
        // if (inFlight) return;
        // setInFlight(true);

        try {
            if (liked) {
                const res = await api.delete(`/like/${post.id}`);
                () => {
                    post.likedBy.length -= 1;
                    setLiked(false);
                }
            } else {
                const res = await api.post(`/like/${post.id}`);
                () => {
                    post.likedBy.length += 1;
                    setLiked(true);
                }
            }
        } catch (err) {
            cosole.error(err);
        }
    }

    async function handleFollow(e, post) {
        e.stopPropagation();
        e.preventDefault();
        const id = Number(post.authorId);
        console.log(id);
        try {
            if (follow) {
                const res = await api.delete(`/follow/${id}`);
                if (res.data.msg === 'unfollowed') {
                    console.log('unfollowed');
                    setFollow(false);
                }
            } else {
                const res = await api.post(`/follow/${id}`);
                if (res.data.msg === 'followed') {
                    console.log('followed');
                    setFollow(true);
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div>
                <div>
                    <h4><strong>{post.author.username}</strong><b>·</b></h4>
                    <h4>{time}</h4>
                </div>
                <div>
                    <button onClick={(e) => handleFollow(e, post)}>{follow ? 'u' : 'f'}</button>
                </div>
            </div>

            <p>{post.content}</p>

            <div>
                <button onClick={togglelike} aria-pressed={liked}>
                    {liked ? 'u' : 'l'} {post._count.likes}
                </button>
                <button> c {post._count?.comments}</button>
                <button>save</button>
            </div>
        </div>
    );
}
