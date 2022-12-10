import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const [country, setCountry] = useState(null);
    const { flags, population, region, subregion, capital, tld, languages } = country;
    let native = country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    let currency = country.currencies[Object.keys(country.currencies)[0]].name
    const { slug } = useParams();
    const name = slug.split("-").join(" ");

    let foundCountry = countries.find(data => data.name.common === name);
    useEffect(() => {
        setCountry(foundCountry)
        if(!foundCountry) {
            return <h1>Loading...</h1>
        }
    }, [foundCountry])

    /* Format mumbers with commas */ 
    const formatPopulation = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="country-details">
            <button>Back</button>
            <div className="details">
                {/* <img src={flags.svg} alt={`${name}'s flag`} /> */}
                <div className="content-wrapper">
                    <h1>{name}</h1>
                    <div className="content-1">
                        <p>Native Name: <span>{native}</span></p>
                        {/* <p>Population: <span>{formatPopulation(country.population)}</span></p> */}
                        <p>Region: <span>{region}</span></p>
                        <p>Sub-Region: <span>{subregion}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>
                    <div className="content-2">
                        <p>Top Level Domain: <span>{tld[0]}</span></p>
                        <p>Currencies: <span>{currency}</span></p>
                        {/* <p>Languages: <span>{languages}</span></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;