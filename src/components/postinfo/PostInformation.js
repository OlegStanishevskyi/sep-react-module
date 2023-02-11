const PostInformation = ({inform}) => {
    return (
        <div>
            {inform.title} {inform.id} {inform.userId} {inform.body}
        </div>
    );
};

export {PostInformation};