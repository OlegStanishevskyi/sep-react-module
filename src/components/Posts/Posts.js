import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "../Post/Post";
import {PostInformation} from "../postinfo/PostInformation";

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [postInfo,setPostInfo] = useState(null);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts(value))
    },[]);
    return (
        <div>
            <h1>Post Information:</h1>
            {postInfo && <PostInformation inform ={postInfo}/>}
            <hr/>
            <h1>Posts:</h1>
            {posts.map(post => <Post key = {post.id} post = {post} setPost={setPostInfo}/>)}
        </div>
    );
};

export {Posts};