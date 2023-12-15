import React from "react";

const BatteryTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Battery ID</th>
          <th>SOC</th>
          <th>IMEI</th>
          <th>Current Owner</th>
        </tr>
      </thead>
      <tbody>
        {data.map((battery) => (
          <tr key={battery.id}>
            <td>{battery.id}</td>
            <td>{battery.soc}</td>
            <td>{battery.imei}</td>
            <td>{battery.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BatteryTable;
