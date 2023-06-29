import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ListItem from '../Components/ListItem'
function ListItems() {
  const URL = "https://reqres.in/api/users?page=2"
  const [details, setDetails] = useState([]);
  const [filter, setFilter] = useState("");

  //fetching and rendering data

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  }, []);

  //searchbar

  const searchText=(event)=>{
    setFilter(event.target.value)
  }

  let dataSearch = details.filter((item)=>{
    console.log(item)
    return Object.keys(item).some(key=>
      item.first_name.toLowerCase().includes(filter.toString().toLowerCase())
      )
    
  })

  return (
    <div>
      <div className="search-bar-container">
        <FaSearch id="search-bar-icon" />
        <input
          type="text"
          placeholder="Search by firstname"
          width={500}
          value={filter}
          onChange={searchText}
        />
      </div>

      <div className="Items-Container">
        {dataSearch.map((item, index) => (
          <div key={index} className="single-item">
            <ListItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ListItems;
