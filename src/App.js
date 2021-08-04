import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=5"
      );

      const resData = await result.json();

      setData(resData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Images</h1>
      </header>
      <div className="image">
        {data.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            width={200}
            height={200}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default App;
