import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Board from "./Board";
import './Crossword.css';

interface IPuzzleJson {
  body: [
    {
      board: string,
      cells: [
        {
          answer?: string,
          clues?: [Number, Number],
          label?: string,
          type?: Number,
        }
      ],
      clueLists: [],
      clues: [],
      dimensions: {
        "height": number,
        "width": number,
      },
      SVG: {}
    }
  ],
  constructors: [string],
  copyright: string,
  editor: string,
  id: Number,
  lastUpdated: string,
  publicationDate: string,
  relatedContent: {
    text: string,
    url: string,
  },
};

function Crossword() {
  const { yyyy, mm, dd } = useParams();
  const date = `${yyyy}-${mm}-${dd}`;
  const [json, setJson] = useState<IPuzzleJson|undefined>();

  useEffect(() => {
    fetch(`/api/getPuzzle?date=${date}`)
      .then(response => response.json())
      .then(json => setJson(json))
      .catch(error => console.error(error));
  }, [date]);

  let board = [];
  if (json) {
    let c = 0;
    let row = [];
    for (let cell of json.body[0].cells) {
      row.push(<div key={c} className={`cell ${cell.answer ? "" : "filled"}`}>{
        cell.label && <div className="label">{cell.label}</div>
      }</div>)

      if (++c === json.body[0].dimensions.width) {
        c = 0;
        board.push(<div key={board.length} className="row">{row}</div>);
        row = [];
      }
    }
  }

  return (
    <div>
      Specific puzzle {date}
      <div className="board">{board}</div>
      <Board svgstring={json && json['body'] && json['body'][0] && json['body'][0]['board']}></Board>
    </div>
  );
}

export default Crossword;
