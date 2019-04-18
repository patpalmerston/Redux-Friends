import React from 'react'

import Friend from './Friend';

class FriendsList extends React.Component {
  render(props){
    return(
      <div>
        {props.friends.map(friend => {
          return <Friend key={friend.name} friend={friend}/>
        })}
      </div>
    )
  }
}

export default FriendsList;