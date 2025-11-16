import { Link } from "react-router-dom";

const cityImages = {
    lublin: "/images/Lublin.jpg",
    vancouver: "/images/Vancouver.jpg",
    "rio de janeiro": "/images/RioDeJaneiro.jpg",
    shanghai: "/images/Shanghai.jpg"
};

export function CityCard({ city }) {
    const key = city.name.trim().toLowerCase();

    return (
        <div className="city-card">
            <Link to={`/cities/${city._id}`}>
                <img src={cityImages[key]} alt={city.name} />
                <h3>{city.name}</h3>
            </Link>
        </div>
    );
}