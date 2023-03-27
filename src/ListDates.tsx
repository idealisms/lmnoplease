import React, { useState, useEffect } from "react";

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
      <h1>Listing days</h1>
      {dates.map((date) => {
        return <div>{date}</div>;
      })}
    </div>
  );
}

export default ListDates;
