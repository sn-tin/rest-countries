import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CountriesCard from "./CountriesCard";

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
  return (
    <main>
      <div className="d-flex align-items-center sort-data">
        <input type="text" placeholder="Search for a country..." />
        <div className="dropdown">
          <p>Filter by Region</p>
          <ul className="d-none list-unstyled dropdown-options">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      <div className="row row-cols-lg-4 g-3 g-lg-5">
        {
          countries.map((country) => {
            return (
              <CountriesCard key={country.ccn3} data={country} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Main;