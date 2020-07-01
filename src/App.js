import React from "react";

import "./App.css";
import * as api from "./api";
import { Header, Table } from "./components";

class App extends React.Component {
  state = {
    bestTenCitiesAirQuality: [],
    worstTenCitiesAirQuality: [],
  };

  async componentDidMount() {
    const worstTenCitiesAirQuality = await api.getWorstAirQuality("GB");
    const bestTenCitiesAirQuality = await api.getBestAirQuality("GB");

    this.setState({ worstTenCitiesAirQuality, bestTenCitiesAirQuality });
  }

  render() {
    const { worstTenCitiesAirQuality, bestTenCitiesAirQuality } = this.state;

    return (
      <div className="App">
        <Header />
        <Table
          results={worstTenCitiesAirQuality}
          title={"Top 10 most poluted Cities"}
        />
        <Table
          results={bestTenCitiesAirQuality}
          title={"Top 10 cleanest Cities"}
        />
      </div>
    );
  }
}

export default App;
