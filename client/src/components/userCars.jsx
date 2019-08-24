import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: #D4E6F1;
min-height: 10vh;
display: grid;
justify-content: center;
font-size: calc(10px + 2vmin);

`;

const Table = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
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

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.cars
    }
  }


  render() {
    console.log(this.state.data, `Vehicle State`)
    return (
      <Wrapper>
        <Table style={{ "border": "1px solid black", "borderCollapse": "collapse" }}>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Trim</th>
              <th>Mileage</th>
              <th>Maintenance</th>
            </tr>
            {this.state.data.map(car => (
              <tr key={car.car_id}>
                <td>{car.car_year}</td>
                <td>{car.car_make}</td>
                <td>{car.car_model}</td>
                <td>{car.car_model_trim}</td>
                <td>{car.car_mileage}</td>
                <td>oil change</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </Wrapper>
    )
  }
}

export default Vehicle;