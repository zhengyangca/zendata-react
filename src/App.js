import React, { Component } from "react";
import "./App.css";
const { baseurl } = require("./config");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corra: [],
      cpi: [],
    };
  }
  componentDidMount = () => {
    fetch(baseurl + "/corra?recent=150")
      .then((response) => response.json())
      .then((corra) => this.setState({ corra }));
    fetch(baseurl + "/cpi?recent=23")
      .then((response) => response.json())
      .then((cpi) => this.setState({ cpi }));
  };

  render() {
    const { corra } = this.state;
    const rows = corra.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.date}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.value}</td>
        </tr>
      );
    });
    const { cpi } = this.state;
    const cpiRows = cpi.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.date}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.value}</td>
        </tr>
      );
    });

    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, backgroundColor: "" }}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th></th>
                <th>CORRA (interest)</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <div style={{ flex: 1, backgroundColor: "grey" }}>
          {/* Content for the second column */}
        </div>
        <div style={{ flex: 1, backgroundColor: "" }}>
          <div style={{ flex: 1, backgroundColor: "" }}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th></th>
                  <th>CPI</th>
                </tr>
              </thead>
              <tbody>{cpiRows}</tbody>
            </table>
          </div>
        </div>
        <div style={{ flex: 1, backgroundColor: "green" }}>
          {/* Content for the third column */}
        </div>
      </div>
    );
  }
}

export default App;
