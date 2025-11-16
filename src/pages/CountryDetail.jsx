import { useParams } from "react-router-dom";
import { useCountry } from "../hooks/useCountries";
import { CountryInfoCard } from "../components/CountryInfoCard";
import VaxRequirements from "../components/VaxRequirements";
import { CityCard } from "../components/CityCard";
import { useCities } from "../hooks/useCities";

export function CountryDetailPage() {
    const { id } = useParams();
    const { country } = useCountry(id);
    const { cities } = useCities();

    if (!country) return <p>Loading...</p>;

    const citiesInThisCountry = cities.filter(
        (city) => city.country?.name === country.name
    );

    return (
        <div className="country-detail-page">
            <h2>{country.name}</h2>
            <CountryInfoCard country={country} />
            <VaxRequirements vaxReqId={country.vaxReq?._id} />

            {citiesInThisCountry.length > 0 && (
                <>
                    <h3>Cities to Explore</h3>
                    <div className="cards-grid">
                        {citiesInThisCountry.map((city) => (
                            <CityCard key={city._id} city={city} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}