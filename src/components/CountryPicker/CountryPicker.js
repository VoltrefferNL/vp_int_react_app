import React, { useState, useEffect } from "react";
import * as api from "../../api";

const CountryPicker = ({ processCountryChange, currentCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await api.getCountrySelectList());
    };

    fetchCountries();
  }, []);
  const countryNameForTitle = countries.find(
    ({ code }) => code === currentCountry
  );
  if (!countries && !countryNameForTitle) return <div>Loading...</div>;
  else
    return (
      <div>
        {/* <h1>{countryNameForTitle.name}</h1> */}

        <label htmlFor="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser" />
        <datalist id="browsers" size="10">
          {countries.map(({ name, code }, i) => {
            return (
              <option key={i} value={code} id={code}>
                {name}
              </option>
            );
          })}
        </datalist>
        <input
          type="submit"
          onClick={(e) => {
            console.log(e);
            processCountryChange(e.target.value);
          }}
        />
      </div>
    );
};

//   return <div>

//   </div>;
// };

export default CountryPicker;
