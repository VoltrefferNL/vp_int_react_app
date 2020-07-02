import React, { useState, useEffect } from "react";
import * as api from "../../api";

const CountryPicker = ({ onCountryChange, currentCountry }) => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState()

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await api.getCountrySelectList());
    };

    fetchCountries();
  }, []);

  useEffect(() => {

    if (countries.length === 0)
      return;

    const countryName = countries.find(
      ({ code }) => code === currentCountry)

    if (countryName)
      setCountryName(countryName.name);

  }, [countries, currentCountry])


  if (!countries) return <div>Loading...</div>;
  else
    return (
      <div>
        <h1>{countryName}</h1>
        <label htmlFor="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser" onClick={(e) => { e.target.value = '' }} onChange={e => {
          onCountryChange(e.target.value)
        }} />
        <datalist id="browsers" size="10" >
          {countries.map(({ name, code }, i) => {
            console.log("Country ", name)
            return (
              <option key={i} value={code} id={code}>
                {name}
              </option>
            );
          })}
        </datalist>
      </div>
    );
};

//   return <div>

//   </div>;
// };

export default CountryPicker;
