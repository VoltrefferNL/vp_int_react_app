import React from "react";

const Table = (props) => {
  console.log(props, "This is props");
  return (
    <div className="center">
      <table className="table_main_styling">
        <tbody>
          <tr>
            <td>Hi</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
