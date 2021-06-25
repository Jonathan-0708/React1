import React, { Fragment } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Navbar from "./Navbar";
//create your first component
export function Home() {
	return (
		<>
			<div>
				<Navbar />
				<div className="container">
					<Jumbotron />
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
					<div className="col-sm-3">
						<Card />
					</div>
				</div>
			</div>
		</>
	);
}
