import React from "react";
import "../index.css";

const BatteryTable = ({ data, paginatedData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Battery ID</th>
          <th scope="col">SOC</th>
          <th scope="col">IMEI</th>
          <th scope="col">Current Owner</th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((battery) => (
          <tr key={battery.id}>
            <td data-label="Battery id" scope="row">
              {battery.id}
            </td>
            <td data-label="SOC">{battery.soc}</td>
            <td data-label="IMEI">{battery.imei}</td>
            <td data-label="Current Owner">{battery.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BatteryTable;
