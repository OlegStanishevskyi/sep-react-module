const UserIdPost = ({post}) => {
    return (
        <div>
            {post.id} {post.title} {post.body}
        </div>
    );
};

export {UserIdPost};