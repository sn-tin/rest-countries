import { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from './CountriesCard';

const Main = () => {
  const [countries, setCountries] = useState([])
  console.log(countries)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(response)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const [searchCountry, setSearchCountry] = useState("");

  const handleChange = (e) => {
    setSearchCountry(e.target.value)
  }
  console.log(searchCountry)

  return (
    <main>
      <form>
        <input type="text" id="searchbar" placeholder="Search for a country..." value={searchCountry} name="" onChange={handleChange} />
        <div className="dropdown">
          <span>Filter by Region</span>
          <ul className="selection">
            <li id="africa">Africa</li>
            <li id="america">America</li>
            <li id="asia">Asia</li>
            <li id="europe">Europe</li>
            <li id="oceania">Oceania</li>
          </ul>
        </div>
      </form>
      <section className="cards">
    
      </section>
    </main>
  )
}

export default Main;