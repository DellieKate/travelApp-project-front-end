import { useEffect, useState } from "react";
import { getVaxReqs } from "../apiEndpoints/vaxApi";

export default function VisaRequirements({ country }) {
  const [requirements, setRequirements] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!country) return;

    async function loadVax() {
      setLoading(true);
      setError(null);
      try {
        const data = await getVaxReqs(country);
        setRequirements(data);
      } catch (err) {
        setError("Failed to load requirements");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadVax();
  }, [country]);

  if (!country) return <p>Select a country to view visa & vaccination requirements.</p>;

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h3>Visa & Vaccination Requirements</h3>
      {requirements?.reqs?.length > 0 ? (
        <ul>
          {requirements.reqs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No requirements found for this country.</p>
      )}
    </div>
  );
}
