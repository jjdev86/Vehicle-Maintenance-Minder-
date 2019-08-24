import React, {Component} from 'react';
import styled from 'styled-components';
import backimg from '../images/loginback.jpg'
// Styled component
const Wrapper = styled.div`
  magin: 0;
  overflow: hidden;
  // background: url(${backimg}) no-repeat center center fixed; 
  background-color: #f4f4f4;
  // height: 840px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  overflow-y: hidden; // hide vertical
  overflow-x: hidden;
;`

const FormBox = styled.div`
  display: inline-block;
  background-color: #fff;
  width: 500px;
  height: 400px;
  border: 0px solid;
  border-radius: 6px;
  // margin: 2em 0em 2em 0em;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  // box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 1.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .form-group {
    padding-bottom: 15px;
    color: black;
  }

;`

const FormWrapper = styled.form`
 background-color: #fff;
  height: 360px;
  max-width: 450px;
  padding: 0px;
  color: #black;
  margin: 30px 30px;
  label {
    display: block;
  }
  input {
    display: block;
    width: 100%;
    padding: 8px;
  }
  .button {

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

  onEventChange(e) {
    
  }

  render() {
    return (
      <Wrapper>
          <FormBox>
            <FormWrapper>
                <label>
                  username:
                  <input type="text"/>
                </label>
                <label>
                  password:
                  <input type="text"/>
                </label>
              <a href="#" className="forgot-pass">Forgot Password?</a>
              <input className="button" type="submit" />
            </FormWrapper>
          </FormBox>
      </Wrapper>
    );
  }
}


export default Login; 