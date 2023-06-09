import React, { Component } from "react";
import "./App.css";
const { baseurl } = require("./config");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corra: [],
      cpi: [],
      ca_indicators: [],
      ab_indicators: [],
      on_indicators: [],
      bc_indicators: [],
    };
  }
  componentDidMount = () => {
    fetch(baseurl + "/corra?recent=150")
      .then((response) => response.json())
      .then((corra) => this.setState({ corra }));
    fetch(baseurl + "/cpi?recent=23")
      .then((response) => response.json())
      .then((cpi) => this.setState({ cpi }));
    fetch(baseurl + "/gc-econ?geo_code=0")
      .then((response) => response.json())
      .then((ca_indicators) => this.setState({ ca_indicators }));
    fetch(baseurl + "/gc-econ?geo_code=9")
      .then((response) => response.json())
      .then((ab_indicators) => this.setState({ ab_indicators }));
    fetch(baseurl + "/gc-econ?geo_code=6")
      .then((response) => response.json())
      .then((on_indicators) => this.setState({ on_indicators }));
    fetch(baseurl + "/gc-econ?geo_code=10")
      .then((response) => response.json())
      .then((bc_indicators) => this.setState({ bc_indicators }));
  };

  render() {
    const { corra } = this.state;
    const rows = corra.map((row, index) => {
      return (
        <tr key={index}>
          <hr />
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
    const { ab_indicators } = this.state;
    const abEmployment = ab_indicators.filter(item => {
      return item.titleEn.includes("mploy");
    });
    const abRows = abEmployment.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.titleEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.valueEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.growth_rateEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.refperEn}</td>
        </tr>
      );
    });
    const { ca_indicators } = this.state;
    const caEmployment = ca_indicators.filter(item => {
      return item.titleEn.includes("Employ");
    });
    const caRows = caEmployment.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.titleEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.valueEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.growth_rateEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.refperEn}</td>
        </tr>
      );
    });
    const { on_indicators } = this.state;
    const onEmployment = on_indicators.filter(item => {
      return item.titleEn.includes("Employ");
    });
    const onRows = onEmployment.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.titleEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.valueEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.growth_rateEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.refperEn}</td>
        </tr>
      );
    });
    const { bc_indicators } = this.state;
    const bcEmployment = bc_indicators.filter(item => {
      return item.titleEn.includes("Employ");
    });
    const bcRows = bcEmployment.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.titleEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.valueEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.growth_rateEn}</td>
          <td>
            <div style={{ padding: "10px" }} />
          </td>
          <td>{row.refperEn}</td>
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
        <div style={{ flex: 1, backgroundColor: "yellow" }}>
          <table>
            <thead>
              <tr>
                <th>CA-Indicator</th>
                <th></th>
                <th>Value</th>
                <th></th>
                <th>growth</th>
                <th></th>
                <th>refper</th>
              </tr>
            </thead>
            <tbody>{caRows}</tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>AB-Indicator</th>
                <th></th>
                <th>Value</th>
                <th></th>
                <th>growth</th>
                <th></th>
                <th>refper</th>
              </tr>
            </thead>
            <tbody>{abRows}</tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>ON-Indicator</th>
                <th></th>
                <th>Value</th>
                <th></th>
                <th>growth</th>
                <th></th>
                <th>refper</th>
              </tr>
            </thead>
            <tbody>{onRows}</tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>BC-Indicator</th>
                <th></th>
                <th>Value</th>
                <th></th>
                <th>growth</th>
                <th></th>
                <th>refper</th>
              </tr>
            </thead>
            <tbody>{bcRows}</tbody>
          </table>
        </div>
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
        <div style={{ flex: 1, backgroundColor: "green" }}>
          {/* Content for the third column */}
        </div>
      </div>
    );
  }
}

export default App;
