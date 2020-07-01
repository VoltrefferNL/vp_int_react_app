import React from "react";
import "./App.css";

import * as api from "./api";

class App extends React.Component {
  state = {
    bestTenAirQuality: [],
    worstTenAirQuality: [],
  };

  async componentDidMount() {
    const worstTenAirQuality = await getWorstAirQuality("GB");
    const bestTenAirQuality = await getBestAirQuality("GB");

    this.setState({ worstTenAirQuality, bestTenAirQuality });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
