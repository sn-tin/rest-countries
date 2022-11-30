
const CountriesCard = ({data}) => {
    const { flags, name, population, region, capital } = data;
    return (
        <div className="cols">
            <div className="card">
                <img src={flags.svg} className="card-img-top" alt="Flags" />
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <p className="card-text">Population: <span>{population}</span>
                    </p>
                    <p className="card-text">Region: <span>{region}</span>
                    </p>
                    <p className="card-text">Capital: <span>{capital}</span>
                    </p>
                </div>
            </div>   
        </div>
    )
}

export default CountriesCard;