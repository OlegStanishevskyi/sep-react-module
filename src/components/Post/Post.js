const Post = ({post,setPost}) => {
    const {id,title} = post
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>{setPost(post)}}>Click</button>
        </div>
    );
};

export {Post};