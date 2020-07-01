import React, { useState, useEffect } from "react";
import * as api from "../../api";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await api.getCountrySelectList());
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <form action="/action_page.php" method="get">
        <label htmlFor="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser" />
        <datalist id="browsers" size="10">
          {countries.map(({ name, code }, i) => (
            <option key={i} value={code}>
              {name}
            </option>
          ))}
        </datalist>
        <input type="submit" />
      </form>
    </div>
  );
};

//   return <div>

//   </div>;
// };

export default CountryPicker;
