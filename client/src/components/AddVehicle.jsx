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
      "car-years": '',
      "car-makes": '',
      "car-models": '',
      "car-model-trims": '',
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
                    {/* <select id="car-years" name="car-years">
                    <option value>---</option>
                  </select> */}
                    <input id="car-years" name="car-years" value={this.state.year} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-makes" name="car-makes">
                    <option value>---</option>
                  </select> */}
                    <input id="car-makes" name="car-makes" value={this.state.make} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-models" name="car-models">
                    <option value>---</option>
                  </select> */}
                    <input id="car-models" name="car-models" value={this.state.model} onChange={(e) => this.onEventChange(e)}></input>
                  </td>
                  <td>
                    {/* <select id="car-model-trims" name="car-model-trims">
                    <option value>---</option>
                  </select> */}
                    <input id="car-model-trims" name="car-model-trims" value={this.state.trim} onChange={(e) => this.onEventChange(e)}></input>
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