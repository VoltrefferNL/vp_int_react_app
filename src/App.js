import React from "react";

import "./App.css";
import * as api from "./api";
import { Header, Table, CountryPicker } from "./components";

class App extends React.Component {
  state = {
    bestTenCitiesAirQuality: [],
    worstTenCitiesAirQuality: [],
    currentCountry: "GB",
  };


  componentDidMount() {
    this.handleCountryCodeChange(this.state.currentCountry)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentCountry !== prevState.currentCountry)
      this.handleCountryCodeChange(this.state.currentCountry)
  }

  handleCountryCodeChange = countryCode => {
    api.getWorstAirQuality(countryCode).then(response => {
      this.setState({
        ...this.state,
        worstTenCitiesAirQuality: response
      })
    });
    api.getBestAirQuality(countryCode).then(response => {
      this.setState({
        ...this.state,
        bestTenCitiesAirQuality: response
      })
    });

    this.setState({
      ...this.state,
      currentCountry: countryCode
    })
  }

  render() {
    const {
      worstTenCitiesAirQuality,
      bestTenCitiesAirQuality,
      currentCountry,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <CountryPicker
          onCountryChange={countryCode => this.setState({ ...this.state, currentCountry: countryCode })}
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
