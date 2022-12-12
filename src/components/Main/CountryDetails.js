import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledButtons, ImageFlag, StyledContent, StyledLink, StyledMain } from "./Main.styles";

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
      <StyledMain className="country-details">
        <StyledLink to="/">
          <StyledButtons>
            <i className="fa-solid fa-arrow-left"></i>
            Back
          </StyledButtons>
        </StyledLink>
        {country && (
          <div className="d-flex flex-column flex-lg-row align-items-lg-center">
            <ImageFlag src={country?.flags.svg} alt={`${name}'s flag`} />
            <StyledContent className="content-wrapper">
              <h2>{name}</h2>
              <div className="d-flex flex-column flex-lg-row">
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
              <div className="border-countries d-flex flex-column flex-lg-row align-items-lg-center">
                <p className="me-4">Border Countries:</p>
                <div>
                    {country.borders.map(border => (
                        <StyledButtons className="me-2" key={border}>
                            {border}
                        </StyledButtons>
                    ))}
                </div>
              </div>
            </StyledContent>
          </div>
        )}
      </StyledMain>
    );
  };
  
  export default CountryDetails;  