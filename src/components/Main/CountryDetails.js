import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const [country, setCountry] = useState(null);
    // const { flags, population, region, subregion, capital, tld, languages } = country;
    let native = country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    let currency = country.currencies[Object.keys(country.currencies)[0]].name
    // let language = country.languages[Object.keys(country.languages)[0]]
    const { slug } = useParams();
    const name = slug.split("-").join(" ");

    let foundCountry = countries.find(data => data.name.common === name);
    console.log(country)
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
            <Link to='/'>
                <button>Back</button>
            </Link>
            <div className="details">
                <img src={country.flags.svg} alt={`${name}'s flag`} />
                <div className="content-wrapper">
                    <h1>{name}</h1>
                    <div className="content-1">
                        <p>Native Name: <span>{native}</span></p>
                        <p>Population: <span>{formatPopulation(country.population)}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Sub-Region: <span>{country.subregion}</span></p>
                        <p>Capital:
                            {country.capital?.map(cap => <span> {cap}</span>)}
                        </p>
                    </div>
                    <div className="content-2">
                        <p>Top Level Domain: <span>{country.tld[0]}</span></p>
                        <p>Currencies: <span>{currency}</span></p>
                        {/* <p>Languages: <span>{language}</span></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;