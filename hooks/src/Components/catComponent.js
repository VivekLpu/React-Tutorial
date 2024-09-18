import React, { useState, useEffect } from "react";

const CatFactsComponent = () => {
  const [catFacts, setCatFacts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://meowfacts.herokuapp.com/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCatFacts(data.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCatFacts();
  }, []);

  return (
    <div>
      {loading && <p>Loading Cat Facts</p>}
      {error && <p>Error: {error}</p>}
      {catFacts && (
        <div>
          <h1>Cat Facts</h1>
          <p>{catFacts}</p>
        </div>
      )}
    </div>
  );
};

export default CatFactsComponent;
