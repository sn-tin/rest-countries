const CountryDetails = () => {
    return (
        <div className="country-details">
            <button>Back</button>
            <div className="details">
                {/* <img src={} alt={`${}'s flag`} /> */}
                <div className="content-wrapper">
                    <h1>{}</h1>
                    <div className="content-1">
                        <p>Native Name: <span>{}</span></p>
                        <p>Population: <span>{}</span></p>
                        <p>Region: <span>{}</span></p>
                        <p>Sub-Region: <span>{}</span></p>
                        <p>Capital: <span>{}</span></p>
                    </div>
                    <div className="content-2">
                        <p>Top Level Domain: <span>{}</span></p>
                        <p>Currencies: <span>{}</span></p>
                        <p>Languages: <span>{}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;