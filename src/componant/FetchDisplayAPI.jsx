import React from 'react'

const FetchDisplayAPI = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Data Fetcher</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={(setData)}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDisplayAPI;