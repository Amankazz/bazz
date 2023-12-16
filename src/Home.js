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

  /* 
  state variable decleration 
  - searched term  
  - current page
  */

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = batteryData.data;
  //console.log(data);

  // filtering all the fetched data on search
  const filteredData = data.filter(
    (item) =>
      String(item.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.soc).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.imei).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(item.owner).toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Calculating total number pages for pagination bar
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Search box handler
  const handleSearch = (value) => {
    // console.log("value: ", value);
    setSearchTerm(value);
  };

  //Loader UI
  if (batteryData.loading) {
    return <Loader />;
  }

  // Page UI
  return (
    <>
      <div className="container">
        {/* SearchBar Component */}
        <div className="search-bar">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>

        {/* Battery Table Component */}
        <div className="table-container">
          {data.length > 0 && (
            <BatteryTable data={filteredData} paginatedData={paginatedData} />
          )}

          {/* Pagination Component */}
          <div className="pagination">
            {
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={changePage}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
