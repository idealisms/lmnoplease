import React, { useState } from "react";

function ListDates() {
  const [dates, setDates] = useState<Array<string>>([
    "2022-05-01.json",
    "2022-05-02.json",
  ]);

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
