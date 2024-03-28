import React from "react";
import "./bras.scss";

interface BrasProps {
  position: string
}

function Bras( {position} : BrasProps) {
  const className: string = "bras bras" + position
  return (
    <div className={className}>
      <div className="bras-cote1"></div>
      <div className="bras-cote2"></div>
      <div className="bras-cote3"></div>
      <div className="bras-cote4"></div>
      <div className="bras-dessus"></div>
    </div>
  );
}

export default Bras;