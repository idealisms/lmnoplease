import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Crossword() {
  const { yyyy, mm, dd } = useParams();
  const date = `${yyyy}-${mm}-${dd}`;
  const [json, setJson] = useState<{}>({});

  useEffect(() => {
    fetch(`/api/getPuzzle?date=${date}`)
      .then(response => response.json())
      .then(json => setJson(json))
      .catch(error => console.error(error));
  }, [date]);

  return (
    <div>
      Specific puzzle {date}
    </div>
  );
}

export default Crossword;
