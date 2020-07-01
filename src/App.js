import React from "react";

import "./App.css";
import * as api from "./api";
import { Header, Table } from "./components";
import CountryPicker from "./components/CountryPicker/CountryPicker";

class App extends React.Component {
  state = {
    bestTenCitiesAirQuality: [],
    worstTenCitiesAirQuality: [],
    currentCountry: "GB",
  };

  async componentDidMount() {
    const worstTenCitiesAirQuality = await api.getWorstAirQuality("GB");
    const bestTenCitiesAirQuality = await api.getBestAirQuality("GB");

    this.setState({ worstTenCitiesAirQuality, bestTenCitiesAirQuality });
  }

  processCountryChange = async (countryCode) => {
    const worstTenCitiesAirQuality = await api.getWorstAirQuality(
      `${countryCode}`
    );
    const bestTenCitiesAirQuality = await api.getBestAirQuality(
      `${countryCode}`
    );

    this.setState({
      worstTenCitiesAirQuality,
      bestTenCitiesAirQuality,
      currentCountry: countryCode,
    });
  };

  render() {
    const {
      worstTenCitiesAirQuality,
      bestTenCitiesAirQuality,
      currentCountry,
    } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <CountryPicker
          processCountryChange={this.processCountryChange}
          currentCountry={currentCountry}
        />
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
