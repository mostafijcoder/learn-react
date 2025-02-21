import React from "react";
import { render} from "react-dom";
import PropTypes from "prop-types";

const UserProfile=props=>{
    return <img src={`https://source.unsplash.com/${props.username}`}/>
}
UserProfile.propTypes={
    username:PropTypes.string
}
UserProfile.defaultProps={
    username:"mostafijcoder"
}
const UserProfileLink=props=>{
    return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>
}
const UserCard=props=>{
    return (<div>
        <UserProfile username={props.username}/>
        <UserProfileLink username={props.username}/>
    </div>
    )
}



export default UserCard;
        
     
        