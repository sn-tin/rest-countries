import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, StyledLink } from "./Main.styles";

const CountryDetails = ({ countries }) => {
    const [country, setCountry] = useState(null);
    let native = country
      ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
      : "";
    let currency = country
      ? country.currencies[Object.keys(country.currencies)[0]].name
      : "";
    let language = country
      ? country.languages[Object.keys(country.languages)[0]] 
      : "";

    const { slug } = useParams();
    const name = slug.split("-").join(" ");
  
    let foundCountry = countries.find((data) => data.name.common === name);
    useEffect(() => {
      setCountry(foundCountry);
      console.log(foundCountry);
    }, [foundCountry]);
  
    /* Format mumbers with commas */
  
    const formatPopulation = (value) =>
      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return (
      <div className="country-details">
        <StyledLink to="/">
          <BackButton>
            <i className="fa-solid fa-arrow-left"></i>
            Back
          </BackButton>
        </StyledLink>
        {country && (
          <div className="details">
            <img src={country?.flags.svg} alt={`${name}'s flag`} />
            <div className="content-wrapper">
              <h1>{name}</h1>
              <div className="content-1">
                <p>Native Name: <span>{native}</span></p>
                <p>Population: <span>{formatPopulation(country.population)}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Sub-Region: <span>{country.subregion}</span></p>
                <p>Capital:
                  {country.capital?.map((cap) => (
                    <span key={cap[0]}> {cap}</span>
                  ))}
                </p>
              </div>
              <div className="content-2">
                <p>Top Level Domain: <span>{country.tld[0]}</span></p>
                <p>Currencies: <span>{currency}</span></p>
                <p>Language: <span>{language}</span></p>
              </div>
            </div>
            <div className="border-countries">
                {country.borders.map(border => (
                    <button key={border}>{border}</button>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default CountryDetails;  