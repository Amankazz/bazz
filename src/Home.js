import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBatteryData } from "./redux/slices/batterySlice";
import BatteryTable from "./components/BatteryTable";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import "./index.css";
import Loader from "./components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const batteryData = useSelector((state) => state.battery);

  useEffect(() => {
    dispatch(fetchBatteryData());
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = batteryData.data;
  //console.log(data);

  const filteredData = data.filter(
    (item) =>
      String(item.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.soc).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.imei).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.owner).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    // console.log("value: ", value);
    setSearchTerm(value);
  };

  if (batteryData.loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="search-bar">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

      <div className="table-container">
        {data.length > 0 && (
          <BatteryTable
            className="mytable"
            data={filteredData}
            paginatedData={paginatedData}
          />
        )}
        <div className="pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={changePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
