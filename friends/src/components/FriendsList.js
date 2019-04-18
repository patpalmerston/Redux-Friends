import React from 'react'

import Friend from './Friend';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriends } from '../actions'


class FriendsList extends React.Component {
  componentDidMount(){
    this.props.getFriends();
  }

  render(){
    return(
      <div>
        {this.props.friends.map(friend => {
          return <Friend key={friend.name} friend={friend}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ friends, fetchingFriend }) => ({
  friends,
  fetchingFriend
})

export default withRouter(
  connect(
    mapStateToProps,
     { getFriends }
    )(FriendsList)
  );