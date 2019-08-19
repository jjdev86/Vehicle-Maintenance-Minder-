import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
text-align: center;
display: grid;
`;

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: ''
    }
  }

  onStateChage(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    // submit user information to server
    axios.post('/newUser', {
      username: this.state.username,
      phone: this.state.phone
    })
      .then(response => {
        // send response to main app
        const user = {};
        user.user_id = response.data[0].user_id;
        user.username = response.data[0].username;

        this.props.createUser(user);
      })
      .catch(err => {
        // send response to main app with error
        console.log(err, `error from server`)
      })
  }

  render() {
    return (
      <Wrapper>
        Welcome! Please create a user.
        <form style={{ display: 'flex' }}>
          Username:<br />
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.onStateChage(e)} />
          Phone Number: <br />
          <input type="tel" name="phone" value={this.state.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="123-456-1234" onChange={(e) => this.onStateChage(e)} />
          <input type="button" value="Submit" onClick={(e) => this.onSubmit(e)}></input>
        </form>
      </Wrapper>
    );
  }
}

export default AddUser;