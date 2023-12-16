import React from "react";
import "../index.css";

const BatteryTable = ({ data, paginatedData }) => {
  return (
    <table>
      <thead>
        <tr className="table-header">
          <th className="header__item" scope="col">
            Battery ID
          </th>
          <th className="header__item" scope="col">
            SOC
          </th>
          <th className="header__item" scope="col">
            IMEI
          </th>
          <th className="header__item" scope="col">
            Current Owner
          </th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((battery) => (
          <tr className="table-row" key={battery.id}>
            <td className="table-data" data-label="Battery id" scope="row">
              {battery.id}
            </td>
            <td className="table-data" data-label="SOC">
              {battery.soc}
            </td>
            <td className="table-data" data-label="IMEI">
              {battery.imei}
            </td>
            <td className="table-data" data-label="Current Owner">
              {battery.owner}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BatteryTable;
