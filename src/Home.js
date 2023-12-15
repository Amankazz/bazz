import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBatteryData } from "./redux/slices/batterySlice";
import BatteryTable from "./components/BatteryTable";
import SearchBar from "./components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const batteryData = useSelector((state) => state.battery);
  const data = batteryData.data;
  console.log(data);

  if (batteryData.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <SearchBar />
      <button onClick={() => dispatch(fetchBatteryData())}>Get Data</button>
      {data.length > 0 && <BatteryTable data={data} />}
    </>
  );
};

export default Home;
