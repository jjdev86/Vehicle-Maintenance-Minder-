import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
text-align: center;
display: grid;
width: 100%;
`;

const Form = styled.form`
  max-width: 500px;
  margin:1rem 100px;
  border: 2px solid #DCDCDC;
  padding: 1rem;
  label {
    display: block;
    text-align: left;
    padding:.5rem 0 .5rem;
    text-transform: uppercase;
    font-size: 14px;
  }
  input, textarea {
    display: block;
    width: 100%;
    border: 2px solid #48D1CC;
    padding: .25rem;
    font-size: 13px;
    border-radius: 5px;
  }
  #submitBtn {
    border: 0;
    background: #F0F8FF;
    width: auto;
    padding: .5rem;
    margin: .5rem 0;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: #778899;
    }
  }
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
        <Form>
        {/* <form style={{ display: 'flex' }}> */}
        <label htmlFor={"username"} >
          Username:
        </label>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.onStateChage(e)} />
        <label htmlFor={"phone"}>
          Phone Number:
        </label>
          <input type="tel" name="phone" value={this.state.phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="123-456-1234" onChange={(e) => this.onStateChage(e)} />
          <input id={"submitBtn"}type="button" value="Submit" onClick={(e) => this.onSubmit(e)}></input>
        {/* </form> */}
        </Form>
      </Wrapper>
    );
  }
}

export default AddUser;