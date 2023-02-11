import {useEffect, useState} from "react";
import axios, {post} from "axios";
import {User} from "../User/User";
import {UserIdPost} from "../UserIdPosts/UserIdPost";

const Users = () => {
    const [users,setUsers] = useState([]);
    const[userId,setUserId]=useState(null);
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers(value))
    },[])

    useEffect(()=>{
        if (userId)
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setPosts(value))
    },[userId])
    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => <User key = {user.id} user ={user} setUserId ={setUserId}/>)}
            <hr/>
            <h1>Post:</h1>
            {/*{posts.map(post => <UserIdPost key ={post.id} post={post}/>)}*/}
            {posts.map(post => <div>{post.title}</div>)}
        </div>
    );
};

export {Users};