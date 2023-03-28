import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListDates() {
  const [dates, setDates] = useState<Array<string>>([]);

  useEffect(() => {
    fetch('/api/ls')
      .then(response => response.json())
      .then(data => setDates(data['names']))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Which puzzle would you like to work on?</h1>
      {dates.map((filename) => {
        return <Link key={filename} to={`/${filename}`}>{filename}</Link>;
      })}
    </div>
  );
}

export default ListDates;
