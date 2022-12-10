import { useState } from "react";
import CountriesCard from "./CountriesCard";
import { StyledMain, Searchbar, Dropdown, DropdownList, CardRow } from "./Main.styles"

const Main = ({countries}) => {
  /* Format mumbers with commas */ 
  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  /* Dropdown */ 
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownActive = () => {
    setShowDropdown(!showDropdown)
  }
  /* Searchbar */
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <StyledMain>
      <div className="d-flex flex-column flex-lg-row sort-data">
        <Searchbar className="d-flex align-items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={handleSearch} />
        </Searchbar>
        <Dropdown className="dropdown" onClick={dropdownActive}>
          <div className="d-flex align-items-center justify-content-between">
            <p>Filter by Region</p>
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
          {
            showDropdown && (
              <DropdownList className="list-unstyled dropdown-options">
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
              </DropdownList>
            )
          }
        </Dropdown>
      </div>
      <CardRow className="row row-cols-md-2 row-cols-lg-4">
        {
          countries.filter(item => {
            return search.toLowerCase() === ''
              ? item
              : item.name.common.toLowerCase().includes(search)
          }).map((country) => {
            return (
                <CountriesCard key={country.ccn3} data={country} formatNumber={formatNumber} />
            )
          })
        }
      </CardRow>
    </StyledMain>
  )
}

export default Main;