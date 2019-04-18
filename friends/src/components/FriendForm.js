import React from 'react'




class FriendForm extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleNewInput = e => {

  }

  handleNewFriend = e => {

  }

  render(){
    return(
      <form className='new-friend'>
      <input 
        className='friend-input'
        value={this.state.name}
        name='name'
        type='text'
        placeholder='Name'
        onChange={this.handleNewInput} 
      />
      
      </form>
    )
  }
}

export default FriendForm;