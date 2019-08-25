import React, { Component } from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  display: inline-block;
  background-color: #fff;
  width: 300px;
  height: 250px;
  border: 0px solid;

  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
;`

const FormWrapper = styled.div`
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
  input[type=text] {
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
  a, p {
    font-size: 12px;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
  a {
    color: #ff502f;
  }
  textarea: focus, input:focus {
    outline: none;
  }
`;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    document.body.classList.add("body-model-open");
    document.body.style.backgroundColor = "#ebefd0";
  }

  componentWillUnmount() {
    document.body.classList.remove("body-model-open");
    document.body.style.backgroundColor = null;
  }

  onEventChange(e) {

  }
  render() {
    return (
      <FormBox>
        <FormWrapper>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input className="button" type="submit" value="Login" />
          {/* <button className="button-login">Login</button> */}
          <p>Not registered? <a href="#" className="forgot-pass">Create an account</a></p>
        </FormWrapper>
      </FormBox>
    );
  }
}


export default Login;