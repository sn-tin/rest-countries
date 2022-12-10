import { Link } from "react-router-dom";
import { Card, CardCol } from "./Main.styles";

const CountriesCard = ({data, formatNumber}) => {
    const { flags, name, population, region, capital } = data;
    const slug = name.common.split(" ").join("-");

    return (
        <CardCol className="cols p-0">
            <Link to={`/country/${slug}`}>
                <Card className="card">
                    <img src={flags.svg} className="card-img-top" alt="Flags" />
                    <div className="card-body">
                        <h5 className="card-title">{name.common}</h5>
                        <p className="card-text">Population: <span>{formatNumber(population)}</span>
                        </p>
                        <p className="card-text">Region: <span>{region}</span>
                        </p>
                        <p className="card-text">Capital: <span>{capital}</span>
                        </p>
                    </div>
                </Card>   
            </Link>
        </CardCol>
    )
}

export default CountriesCard;