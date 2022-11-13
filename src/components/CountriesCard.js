
const CountriesCard = (data) => {
    const { flag, countryName, population, region, capital } = data; 
    return (
        <div className="country-card">
            <img src={flag} alt={countryName} />
            <h2>{countryName}</h2>
            <ul className="country-details">
                <li className="population">
                    <p><span>Population: </span>{population}</p>
                </li>
                <li className="region">
                    <p><span>Region: </span>{region}</p>
                </li>
                <li className="capital">
                    <p><span>Capital: </span>{capital}</p>
                </li>
            </ul>
        </div>
    )
}

export default CountriesCard;