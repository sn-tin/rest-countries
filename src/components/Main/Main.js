import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import { StyledMain, Searchbar, Dropdown, DropdownList, CardRow } from "./Main.styles"

const Main = ({countries}) => {
  /* Countries data */ 
  const [countriesData, setCountriesData] = useState(countries);
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

  /* Continents */
  const [dropdownName, setDropdownName] = useState("Filter by Region");
  const dropdownList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Show All'];
  const handleDropdown = (event) => {
    setDropdownName(event.target.innerText)
  }

  useEffect(() => {
    if(search) {
      setCountriesData(countries)
    } else {
      if(dropdownName === "Filter by Region" || dropdownName === "Show All") {
        setCountriesData(countries)
      } else {
        setCountriesData(countries.filter(country => country.region === dropdownName))
      }
    }
  }, [search, countries, dropdownName])

  return (
    <StyledMain>
      <div className="d-flex flex-column flex-lg-row sort-data">
        <Searchbar className="d-flex align-items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={handleSearch} />
        </Searchbar>
        <Dropdown className="dropdown" onClick={dropdownActive}>
          <div className="d-flex align-items-center justify-content-between">
            <p>{dropdownName}</p>
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
          {
            showDropdown && (
              <DropdownList className="list-unstyled dropdown-options">
                {dropdownList.map(list => <li onClick={handleDropdown}>{list}</li>)}
              </DropdownList>
            )
          }
        </Dropdown>
      </div>
      <CardRow className="row row-cols-md-2 row-cols-lg-4">
        {
          countriesData.filter(item => {
            return search.toLowerCase() === ''
              ? item
              : item.name.common.toLowerCase().includes(search)
          }).map((country) => {
            return (
                <CountriesCard key={country.name.common} data={country} formatNumber={formatNumber} />
            )
          })
        }
      </CardRow>
    </StyledMain>
  )
}

export default Main;