import React from "react";

import "./App.css";
import * as api from "./api";
import { Header } from "./components";

class App extends React.Component {
  state = {
    bestTenAirQuality: [],
    worstTenAirQuality: [],
  };

  async componentDidMount() {
    const worstTenAirQuality = await api.getWorstAirQuality("GB");
    const bestTenAirQuality = await api.getBestAirQuality("GB");

    this.setState({ worstTenAirQuality, bestTenAirQuality });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
