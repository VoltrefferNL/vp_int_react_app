import React from "react";
import * as util from "../../utils";

const Table = (props) => {
  const {
    results: { results },
    title,
  } = props;
  console.log(results);
  if (!results) return <div>Loading...</div>;
  else
    return (
      <div className="center">
        <h1>{title}</h1>
        <table className="table_main_styling">
          <tbody>
            <tr>
              <th>City</th>
              <th>Date</th>
              <th>Value</th>
              <th>Unit</th>
            </tr>
            {results.map(({ city, date: { local }, value, unit }) => {
              return (
                <tr key={value + Math.random()}>
                  <td>{city}</td>
                  <td>{util.formatDateObject(local)}</td>
                  <td>{value}</td>
                  <td>{unit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default Table;
