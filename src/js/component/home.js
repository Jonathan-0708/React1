import React, { Fragment } from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Navbar from "./Navbar";
import Futter from "./Futter";
//create your first component
export function Home() {
	return (
		<>
			<div>
				<Navbar />
				<li></li>
				<div className="container mt-5">
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
			<p>
				<li></li>
				<li></li>
				<li></li>
			</p>
			<Futter />
		</>
	);
}
