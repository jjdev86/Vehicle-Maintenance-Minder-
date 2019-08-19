import React, { Component } from 'react';
import styled from 'styled-components';
import Vehicle from './Vehicle.jsx';
import AddVehicle from './AddVehicle.jsx';
import AddUser from './AddUser.jsx';

const Wrapper = styled.div`
    width: 100%;
`;
const Subwrapper = styled.div`
    width: 80%;
    margin: 0 10% 0 10%;
    background-color: white;
    min-height: 100vh;
`;
const Username = styled.a`
    display: grid;
    text-align: right !important;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Header = styled.header`
background-color: #AED6F1;
min-height: 10vh;
display: grid;
justify-content: center;
font-size: calc(10px + 2vmin);
color: black;
`;

const Add = styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline;
font-size: 12px;
margin: 2px 1px;
cursor: pointer;
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
width: fit-content;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'hello',
            showPopup: false,
            userId: null,
            username: '',
            userCreated: false
        }
    }
    // toggle the addVehicle component
    toggleAddVehicle() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    addUser(user) {
      this.setState({ userId: user.user_id, username: user.username});
    }

    
    render() {
        return (
            <Wrapper>
                <Subwrapper>
                    <Username>
                        {this.state.username}
                    </Username>
                    <Header>
                        <h1>Vehicle Maintenance Minder</h1>
                        {/* if the userId is null, ask user to create account
                            else, display the user's cars.
                        */}
                        {this.state.userId ? 
                          <Add onClick={this.toggleAddVehicle.bind(this)}>Add Vehicle</Add>
                          :
                          <AddUser createUser={this.addUser.bind(this)}/>
                        }
                    </Header>
                    {/* adds the vehicles added by the user */}
                    <Vehicle />
                    {this.state.showPopup ?
                        <AddVehicle saveVehicle={this.toggleAddVehicle.bind(this)}
                        />
                        : null
                    }
                </Subwrapper>
            </Wrapper>

        )
    }
}

export default App;