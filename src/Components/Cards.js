import React from 'react';

 const SingleCard = (props) => {
     const { followers, username, avatar, githublink, repos} = props;
    return (
        <div className="single-user">
            <div className="second-div">
                <img src={avatar}></img>
                <span>{followers} followers</span>
            </div>
            <p><span className="title">Username:</span> {username}</p>
            <p><span className="title">Github Link:</span> <a className="github-link" href={githublink}>{githublink}</a></p>
            <p><span className="title">Repo Link:</span> {repos}</p>
        </div>
    )

}

export default SingleCard;