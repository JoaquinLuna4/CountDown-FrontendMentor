import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<div className="column_container">
			<p className="timer_value timer_box timer_card">
				<span className="timer_card timer_topvalue "></span>
				<span className="timer_text"> {value} </span>
			</p>
			<span className="timer_type">{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
