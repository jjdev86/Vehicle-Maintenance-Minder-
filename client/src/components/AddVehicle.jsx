import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.form`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const Innerwrap = styled.div`
  position: absolute;
  left: 15%;
  right: 15%;
  top: 45%;
  bottom: 45%;
  margin: auto;
  border-radius: 0px;
  background: #D6EAF8;
  text-align: center;
`;

const TableDiv = styled.div`
  width: 100%;
`;

const Table = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
      text-align: center;
    }
    th,
    td,
    tr {
      padding: 3px;
    }
    th {
      text-align: center;
    }
  }
`;

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "car-year": '',
      "car-make": '',
      "car-model": '',
      "car-model-trim": '',
      "car-mileage": '',
    }
  }

  onEventChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    }, () => {
      console.log(this.state);
    })
  }

  saveCar(event) {
    event.preventDefault();
    axios.post(
      '/newVehicle',
      {

      })
      .then(response => {
        console.log(response, `RESPONSE FROM SERVER`);
        this.props.saveVehicle();
      })
      .catch(err => {
        console.log(err, `THIS IS AN ERROR`);
        this.props.saveVehicle();
      });
  }
  render() {
    return (
      <Wrapper>
        <Innerwrap>
          <TableDiv>
            <Table style={{ "border": "1px solid black", "border-collapse": "collapse", "align": "center" }}>
              <tbody>
                <tr>
                  <th>Year:</th>
                  <th>Make:</th>
                  <th>Model:</th>
                  <th>Trim:</th>
                  <th>Mileage</th>
                </tr>
                <tr>
                  <td>
                    {/* <select id="car-year" name="car-year">
                    <option value>---</option>
                  </select> */}
                    <input id="car-year" name="car-year" value={this.state.year} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-make" name="car-make">
                    <option value>---</option>
                  </select> */}
                    <input id="car-make" name="car-make" value={this.state.make} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-model" name="car-model">
                    <option value>---</option>
                  </select> */}
                    <input id="car-model" name="car-model" value={this.state.model} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-model-trim" name="car-model-trim">
                    <option value>---</option>
                  </select> */}
                    <input id="car-model-trim" name="car-model-trim" value={this.state.trim} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    <input id="car-mileage" name="car-mileage" value={this.state.mileage} onChange={(e) => this.onEventChange(e)}></input>
                  </td>

                </tr>
              </tbody>
            </Table>
          </TableDiv>
          <button onClick={(e) => this.saveCar(e)}>Save</button>
        </Innerwrap>
      </Wrapper>
    )
  }
}

export default AddVehicle;