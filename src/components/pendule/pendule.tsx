import React from "react";
import Boulles from "../boulles/boulles";
import Bras from "../bras/bras";
import Pillier from "../pillier/pillier";
import Socle from "../socle/socle";
import "./pendule.scss";

function Pendule() {
	return (
		<div className="pendule">
			<Pillier position={"1"}/>
			<Pillier position={"2"}/>
			<Pillier position={"3"}/>
			<Pillier position={"4"}/>
			<Socle/>
			<Bras position={"1"}/>
			<Bras position={"2"}/>
			<Boulles position={"1"}/>
			<Boulles position={"2"}/>
			<Boulles position={"3"}/>
			<Boulles position={"4"}/>
			<Boulles position={"5"}/>
			<Boulles position={"6"}/>
		</div>
	);
}

export default Pendule;
