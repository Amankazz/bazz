import React from "react";

const BatteryTable = ({ data, searchTerm }) => {
  const filteredData = data.filter(
    (item) =>
      String(item.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.soc).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.imei).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.owner).toLowerCase().includes(searchTerm.toLowerCase())
  );
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
        {filteredData.map((battery) => (
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
