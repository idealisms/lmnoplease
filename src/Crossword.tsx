import React from "react";
import { useParams } from "react-router-dom";

function Crossword() {
  const { yyyy, mm, dd } = useParams();
  return (
    <div>
      Specific puzzle {yyyy}-{mm}-{dd}
    </div>
  );
}

export default Crossword;
