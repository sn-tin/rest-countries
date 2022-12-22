import { useEffect, useState } from "react";
import { cardRowAnimate, dropdownAnimate, dropdownListAnimate } from "./animation";
import CountriesCard from "./CountriesCard";
import { StyledMain, Searchbar, Dropdown, DropdownList, CardRow } from "./Main.styles"
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";

const Main = ({countries, theme}) => {
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
            <AnimatePresence>
              {
                showDropdown && (
                    <DropdownList variants={dropdownAnimate} initial="start" animate="end" exit="exit" className="list-unstyled dropdown-options">
                      {dropdownList.map(list => <motion.li key={list} variants={dropdownListAnimate} onClick={handleDropdown}>{list}</motion.li>)}
                    </DropdownList>
                )
              }
          </AnimatePresence>
        </Dropdown>
      </div>
        { countriesData && 
          <CardRow variants={cardRowAnimate} initial="start" animate="end" exit="exit " className="row row-cols-md-2 row-cols-lg-4">
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
        }
        <ScrollToTop style={{
          width: "60px",
          height: "60px",
          color: theme === "light" ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 100%)",
          backgroundColor: theme === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
          borderRadius: "100vmax",
          boxShadow: theme === "light" ? "0 0 10px hsl(0, 0%, 90%)" : "0 0 10px hsl(207, 26%, 15%)"
        }} smooth />
    </StyledMain>
  )
}

export default Main;