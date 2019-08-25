import React, { Component } from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  display: inline-block;
  background-color: #fff;
  width: 300px;
  height: 450px;
  border: 0px solid;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
;`

const FormWrapper = styled.form`
  width: 300px;
  padding: 1.25rem;
  position: absolute;
  left: 20%;
  top: 20%;
  transform: translate(-20%, -20%);

  input,p {
    font-family: "Roboto", sans-serif;
    display: block;
    font: 400 11px system-ui;
  }
  input[type=text], input[type=password] {
    width: 100%;
    outline: 0;
    border:0;
    background-color: #f2f2f2;
    margin: 0 0 12px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  input[type="submit"] {
    width: 100%;
    background-color: #ff502f;
    color: #fff;
    border: 0;
    box-sizing: border-box;
    padding: 15px;
    margin: 0 0 12px;
    font-size: 15px;
  }

  input[type="submit"]:hover {
    background-color:#DB504A;
  }
  p {
    font-size: 16px;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  textarea: focus, input:focus {
    outline: none;
  }
`;


class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConf: '',
      email: '',
      phone: ''
    }
  }

  eventChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  createAccount(e) {
    e.preventDefault();
    // call createAccount function from App.jsx to register
    // call this.props.createAccount(this.state)
    console.log(this.state, `required info`);
  }

  render() {
    return (
      <FormBox>
        <FormWrapper>
          <p>New Account Registration</p>
          <input type="text" placeholder="Username" name="username" onChange={(e) => this.eventChange(e)} required></input>
          <input type="password" placeholder="Password" name="password" onChange={(e) => this.eventChange(e)} required ></input>
          <input type="password" placeholder="Confirm Password" name="passwordConf" onChange={(e) => this.eventChange(e)} required ></input>
          <input type="text" placeholder="Email" name="email" onChange={(e) => this.eventChange(e)} required ></input>
          <input type="text" placeholder="Phone Number" name="phone" onChange={(e) => this.eventChange(e)} required></input>
          <input className="button" type="submit" value="Create New Account" onClick={(e) => this.createAccount(e)}></input>
        </FormWrapper>
      </FormBox >
    )
  }
}

export default NewAccount;
