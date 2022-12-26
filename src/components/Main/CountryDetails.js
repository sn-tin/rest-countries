import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cardRowAnimate } from "./animation";
import { StyledButtons, ImageFlag, StyledContent, StyledLink, StyledMain } from "./Main.styles";

const CountryDetails = ({ countries }) => {
    const [country, setCountry] = useState(null);
    let native = country
      ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
      : "";
    let currency = country
      ? country.currencies[Object.keys(country.currencies)[0]].name
      : "";
      
    const { slug } = useParams();
    const name = slug.split("-").join(" ");
  
    let foundCountry = countries.find((data) => data.name.common === name);
    useEffect(() => {
      setCountry(foundCountry);
      console.log(foundCountry);
    }, [foundCountry]);

    const navigate = useNavigate();

    /* Format mumbers with commas */
    const formatPopulation = (value) =>
      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    const findCountryName = (border) => {
      const countryData = countries.find(country => country.cca3 === border)
      const foundCountryName = countryData.name.common
      return foundCountryName
    }

    return (
      <StyledMain variants={cardRowAnimate} initial="start" animate="end" exit="exit" className="country-details">
        <StyledLink onClick={() => navigate(-1)}>
          <StyledButtons>
            <i className="fa-solid fa-arrow-left"></i>
            Back
          </StyledButtons>
        </StyledLink>
        {country && (
          <div className="d-flex flex-column flex-lg-row align-items-lg-center">
            <ImageFlag src={country.flags.svg} alt={`${name}'s flag`} />
            <StyledContent className="content-wrapper">
              <h2>{name}</h2>
              <div className="d-flex flex-column flex-lg-row">
                <div className="content-1">
                    <p>Native Name: <span>{native}</span></p>
                    <p>Population: <span>{formatPopulation(country.population)}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Sub-Region: <span>{country.subregion}</span></p>
                    <p>Capital: <span>{country.capital[0]}</span></p>
                </div>
                <div className="content-2">
                    <p>Top Level Domain: <span>{country.tld[0]}</span></p>
                    <p>Currencies: <span>{currency}</span></p>
                    <p>Language: <span>{Object.values(country.languages).toString()}</span></p>
                </div>
              </div>
              {
                country.borders &&
                <div className="border-countries d-flex flex-column flex-lg-row align-items-lg-center">
                  <p className="me-4">Border Countries:</p>
                  <div>
                      {country.borders?.map(border => (
                        <Link to={`/country/${findCountryName(border)}`}>
                          <StyledButtons className="me-2 text-nowrap w-auto" key={border}>
                              {findCountryName(border)}
                          </StyledButtons>
                        </Link>
                      ))}
                  </div>
                </div>
              }
            </StyledContent>
          </div>
        )}
      </StyledMain>
    );
  };
  
  export default CountryDetails;  