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