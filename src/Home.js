import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBatteryData } from "./redux/slices/batterySlice";
import BatteryTable from "./components/BatteryTable";
import SearchBar from "./components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const batteryData = useSelector((state) => state.battery);

  const [searchTerm, setSearchTerm] = useState("");

  const data = batteryData.data;
  console.log(data);

  const handleSearch = (value) => {
    console.log("valueee: ", value);
    setSearchTerm(value);
  };

  if (batteryData.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <button onClick={() => dispatch(fetchBatteryData())}>Get Data</button>
      {data.length > 0 && <BatteryTable data={data} searchTerm={searchTerm} />}
    </>
  );
};

export default Home;
