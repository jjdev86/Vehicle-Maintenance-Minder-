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
      years: [],
      makes: [],
      models: [],
      trims: [],
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
      if (name === 'car-year') {
        this.getMakesByYear();
      }
      if (name === 'car-make') {
        this.getCarModels();
      }
      if (name === 'car-model') {
        this.getModelTrims();
      }
    })
  }

  saveCar(event) {
    event.preventDefault();
    axios.post(
      '/newCar',
      {
        user_id: this.props.user_id,
        "car-year": this.state["car-year"],
        "car-make": this.state["car-make"],
        "car-model": this.state["car-model"],
        "car-model-trim": this.state["car-model-trim"],
        "car-mileage": this.state["car-mileage"],
      })
      .then(response => {
        // console.log(response, `RESPONSE FROM SERVER`);
        this.props.saveVehicle(response.data);
      })
      .catch(err => {
        // console.log(err, `THIS IS AN ERROR`);
        this.props.saveVehicle();
      });
  }

  getAllYears() {
    if (!this.state.years.length) {
      let min_year = 1941;
      let max_year = 2017;
      const yearsRecord = [...this.state.years];
      while (max_year >= min_year) {
        yearsRecord.push(max_year);
        max_year--;
      }
      this.setState({ years: yearsRecord });
    }
  }

  getMakesByYear() {
    axios.get(`/getMakes?year=${this.state["car-year"]}`)
      .then(res => {
        let newMakes = res.data.Makes;
        // console.log(newMakes, `before setting state`)
        this.setState({ makes: newMakes });
      })
      .catch(err => console.log(err));
  }
  getCarModels() {
    axios.get(`/getModels`, {
      params: {
        year: this.state["car-year"],
        make: this.state["car-make"]
      }
    })
      .then(res => {
        let newModels = res.data.Models;
        this.setState({ models: newModels })
      })
      .catch(err => console.log(err))
  }

  getModelTrims() {
    axios.get(`/getTrims`, {
      params: {
        year: this.state["car-year"],
        make: this.state["car-make"],
        model: this.state["car-model"]
      }
    })
      .then(res => {
        let newTrims = res.data.Trims;
        this.setState({ trims: newTrims })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <Innerwrap>
          <TableDiv>
            <Table style={{ "border": "1px solid black", borderCollapse: "collapse", "align": "center" }}>
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
                    <select id="car-year" name="car-year" onClick={this.getAllYears.bind(this)} value={this.state["car-year"]} onChange={(e) => this.onEventChange(e)}>
                      <option value>---</option>
                      {this.state.years.map(year => (
                        <option>{year}</option>
                      ))}
                    </select>
                    {/* <input id="car-year" name="car-year" value={this.state.year} onChange={(e) => this.onEventChange(e)}></input> */}
                  </td>
                  <td>
                    <select id="car-make" name="car-make" value={this.state["car-make"]} onChange={(e) => this.onEventChange(e)}>
                      {/* <option value>---</option> */}
                      {this.state.makes.map(make => (
                        <option>{make["make_display"]}</option>
                      ))}
                    </select>
                    {/* <input id="car-make" name="car-make" value={this.state.make} onChange={(e) => this.onEventChange(e)}></input> */}
                  </td>
                  <td>
                    <select id="car-model" name="car-model" value={this.state["car-model"]} onChange={(e) => this.onEventChange(e)}>
                      <option value>---</option>
                      {this.state.models.map(model => (
                        <option >{model.model_name}</option>
                      ))}
                    </select>
                    {/* <input id="car-model" name="car-model" value={this.state.model} onChange={(e) => this.onEventChange(e)}></input> */}
                  </td>
                  <td>
                    <select id="car-model-trim" name="car-model-trim" value={this.state["car-model-trim"]} onChange={(e) => this.onEventChange(e)}>
                      <option value>---</option>
                      {this.state.trims.map(trim => (
                        <option >{trim.model_trim}</option>
                      ))}
                    </select>
                    {/* <input id="car-model-trim" name="car-model-trim" value={this.state.trim} onChange={(e) => this.onEventChange(e)}></input> */}
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