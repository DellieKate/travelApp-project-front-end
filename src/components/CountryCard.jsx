import { Link } from "react-router-dom";

const countryImages = {
    china: "/images/China.jpg",
    poland: "/images/Poland.jpg",
    brazil: "/images/Brazil.jpg",
    canada: "/images/Canada.jpg"
};

export function CountryCard({ country }) {
    const key = country.name.trim().toLowerCase();

    return (
        <div className="country-card">
            <Link to={`/countries/${country._id}`}>
                <img src={countryImages[key]} alt={country.name} />
                <h3>{country.name}</h3>
            </Link>
        </div>
    );
}