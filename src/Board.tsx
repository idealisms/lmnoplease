import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface IBoardProps {
    svgstring?: string;
}

// function Board({ svgstring }): React.FC<IBoardProps> {
const Board: React.FC<IBoardProps> = ({ svgstring }) => {
    if (!svgstring) {
        return <div></div>;
    }

    return (
        <div style={{maxWidth: "50%"}} dangerouslySetInnerHTML={{__html: svgstring}} ></div>
    );
}

export default Board;
