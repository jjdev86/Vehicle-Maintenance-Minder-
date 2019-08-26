import React, { Component } from 'react';
import styled from 'styled-components';
import Vehicle from './AddVehicle.jsx';
import AddVehicle from './AddVehicle.jsx';
import AddUser from './AddUser.jsx';
import Login from './login.jsx';
import NewAccount from './createAccount.jsx';

const MainWrapper = styled.div`
    height: 100%;
    width: 70%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Body = styled.div`
    height: 95%;
    width: 100%;
    background-color: #fff;
    position: absolute;
    margin: 120px 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const Header1 = styled.header`
    width: 100%;
    height: 130px;
    background-color: #32DBC6;
    top: 0;
    bottom:0;
    position:fixed;
    // overflow-y:scroll;
    // overflow-x:hidden;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
`;
const Container = styled.div`
`;
const Subwrapper = styled.div`
    width: 60%;
    margin: 0 20% 0 20%;
    background-color: white;
    min-height: 100vh;
`;
const Username = styled.a`
    display: grid;
    text-align: right !important;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 14px;
`;
const Header = styled.header`
    background-color: #4682B4;
    min-height: 10vh;
    display: grid;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    #headerName {
        font-size: 40px;
    }
    a {
        color: white;
    }
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
            carData: [],
            showPopup: false,
            userId: null,
            username: '',
            userCreated: false,
            newAccount: false
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

    // toggle the addVehicle component
    toggleAddVehicle() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    addUser(user) {
        this.setState({ userId: user.user_id, username: user.username });
    }

    updateCarData(data) {
        this.setState({ carData: data }, () => {
            console.log(this.state.carData, 'App car Data was set')
            this.toggleAddVehicle();
        });
        // this.setState({ carData: data });
    }
    render() {
        return (
            <MainWrapper>
                <Header1>
                </Header1>
                <Body>

                </Body>
                {/* <Wrapper> */}
                {/* <Subwrapper>
                    <Username>
                        {this.state.userId ?
                            `Welcome ${this.state.username}`
                            :
                            null
                        }
                    </Username>
                    <Header>
                        <h1>Vehicle Maintenance Minder</h1>
                        {/* if the userId is null, ask user to create account
                            else, display the user's cars.
                        */}
                {/* {this.state.userId ?
                            <>
                                <Add onClick={this.toggleAddVehicle.bind(this)}>Add Vehicle</Add>
                            </>
                            :
                            <AddUser createUser={this.addUser.bind(this)} />
                        } */}
                {/* </Header>
                    {this.state.showPopup ?
                        <AddVehicle saveVehicle={this.updateCarData.bind(this)} user_id={this.state.userId}
                        />
                        : this.state.carData.length ?
                            <Vehicle cars={this.state.carData} />
                            : null
                    }
                // </Subwrapper> */}
                {/* </Wrapper> */}
            </MainWrapper>
            // // <Login></Login>
            // <NewAccount />
        )
    }
}

export default App;