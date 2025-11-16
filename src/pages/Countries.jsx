import { useCountries } from "../hooks/useCountries";
import { CountryCard } from "../components/CountryCard";

export function CountriesPage() {
    const { countries } = useCountries();

    return (
        <div className="countries-page">
            <h2>Available Countries</h2>
            <div className="cards-grid">
                {countries.map(country => (
                    <CountryCard key={country._id} country={country} />
                ))}
            </div>
        </div>
    );
}