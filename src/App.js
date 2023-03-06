import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import pattern from "./images/pattern-hills.svg";

import iconfacebook from "./images/icon-facebook.svg";
import iconpinterest from "./images/icon-pinterest.svg";
import iconinstagram from "./images/icon-instagram.svg";
import "./index.css";

export default function App() {
	const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
	console.log();
	return (
		<div className="component_container">
			<h1 className="title center">We're launching soon</h1>
			<CountdownTimer targetDate={dateTimeAfterThreeDays} />
			<footer className=".footer">
				<a className="app">
					<img className="" src={pattern} alt="facebook" />
				</a>
				<div className="social_container">
					<a href="facebook.com">
						<img className="social_img" src={iconfacebook} alt="facebook" />
					</a>
					<a href="facebook.com">
						<img className="social_img" src={iconpinterest} alt="facebook" />
					</a>
					<a href="facebook.com">
						<img className="social_img" src={iconinstagram} alt="facebook" />
					</a>
				</div>
			</footer>
		</div>
	);
}
