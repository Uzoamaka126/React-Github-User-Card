import React from 'react';
import SingleCard from './Cards'

const CardList = props => {
    console.log(props);
    return (
        <div>
            <ul className="users-list">
                {props.users.map(user => {
                    return (
                        <SingleCard 
                            key={user.login}
                            username={user.login}
                            avatar={user.avatar_url}
                            githublink={user.html_url}
                            repos={user.repo_url}
                            followers={user.followers}
                        />
                    )
                    }
                )
            }
            </ul>
        </div> 
          
    )
}

export default CardList;