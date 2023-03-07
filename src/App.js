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

	return (
		<div className="component_container">
			<h1 className="title center">We're launching soon</h1>
			<CountdownTimer targetDate={dateTimeAfterThreeDays} />
			<footer className=".footer">
				<a className="app">
					<img className="" src={pattern} alt="facebook" />
				</a>
				<div className="social_container">
					<a href="https://www.facebook.com/">
						<img
							className="social_img"
							src={iconfacebook}
							alt="facebook logo"
						/>
					</a>
					<a href="https://www.pinterest.com/">
						<img
							className="social_img"
							src={iconpinterest}
							alt="pinterest logo"
						/>
					</a>
					<a href="https://www.instagram.com/">
						<img
							className="social_img"
							src={iconinstagram}
							alt="instagram logo"
						/>
					</a>
				</div>
			</footer>
		</div>
	);
}
