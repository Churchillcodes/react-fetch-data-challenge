import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const resourceTypes = ["users", "posts", "comments"];
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`,
        );
        setError(null);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Error fetching ${resourceType}:`, error);
        setError(error);
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [resourceType]);

  return (
    <>
      <h1>{resourceType}</h1>

      <>
        {resourceTypes.map((type) => (
          <button
            key={type}
            onClick={() => setResourceType(type)}
            disabled={resourceType === type}
          >
            {type}
          </button>
        ))}
      </>

      {isLoading ? (
        <p>Loading...</p>
      ) : error !== null ? (
        <p style={{ color: "red" }}>Error: {error.message}</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
