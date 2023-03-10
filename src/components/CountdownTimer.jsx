import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./hooks/useCountdown";

const ExpiredNotice = () => {
	return (
		<div className="expired-notice">
			<span>Expired!!!</span>
			<p>Please select a future date and time.</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="timer_container">
			<DateTimeDisplay value={days} type={"DAYS"} isDanger={days <= 3} />
			<DateTimeDisplay value={hours} type={"HOURS"} isDanger={false} />
			<DateTimeDisplay value={minutes} type={"MINUTES"} isDanger={false} />
			<DateTimeDisplay value={seconds} type={"SECONDS"} isDanger={false} />
		</div>
	);
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return (
			<>
				<ShowCounter
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
			</>
		);
	}
};

export default CountdownTimer;
