import React from "react";
import "./boulles.scss";

interface BoullesProps {
  position: string
}
function Boulles({position} : BoullesProps) {
    const className: string = "boulles boulle" + position;
    return (
      <div className={className}>
      <div className="boule"></div>
      <div className="fil1"></div>
      <div className="fil2"></div>
    </div>
  );
}

export default Boulles