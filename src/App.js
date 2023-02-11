import {Users} from "./components/Users/Users";
import {User} from "./components/User/User";
import {Posts} from "./components/Posts/Posts";
import {Launches} from "./components/Launches/Launches";
import {useState} from "react";
import {PostInformation} from "./components/postinfo/PostInformation";
import {UserIdPost} from "./components/UserIdPosts/UserIdPost";

const App = () => {
    return (
        <div>
            <Users/>
            {/*<Posts/>*/}
            {/*<Launches/>*/}

        </div>
    );
};

export {App};