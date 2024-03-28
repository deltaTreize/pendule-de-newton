import React from "react";
import "./pillier.scss";

interface PillierProps {
  position: string
}
function Pillier({position} : PillierProps) {
  const className: string = "pillier pillier" + position
  return (
    <div className={className}>
      <div className="pillier-cote1"></div>
      <div className="pillier-cote2"></div>
      <div className="pillier-cote3"></div>
      <div className="pillier-cote4"></div>
    </div>
  );
}

export default Pillier