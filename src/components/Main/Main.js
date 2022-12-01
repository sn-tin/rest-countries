import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CountriesCard from "./CountriesCard";
import { StyledMain, Searchbar, Dropdown, DropdownList } from "./Main.styles"

const Main = () => {
  const [countries, setCountries] = useState([])

useEffect(() => {
  const getCountries = async () => {
    try {
      const res = await axios(`https://restcountries.com/v3.1/all`);
      console.log(res.data);
      setCountries(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  getCountries();
}, [])

const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <StyledMain>
      <div className="sort-data">
        <Searchbar className="d-flex align-items-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." />
        </Searchbar>
        <Dropdown className="dropdown">
          <div className="d-flex align-items-center justify-content-between">
            <p>Filter by Region</p>
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
          <DropdownList className="list-unstyled dropdown-options">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </DropdownList>
        </Dropdown>
      </div>
      <div className="row row-cols-lg-4 row-cols-md-2 g-3 g-lg-5">
        {
          countries.map((country) => {
            return (
              <CountriesCard key={country.ccn3} data={country} formatNumber={formatNumber} />
            )
          })
        }
      </div>
    </StyledMain>
  )
}

export default Main;