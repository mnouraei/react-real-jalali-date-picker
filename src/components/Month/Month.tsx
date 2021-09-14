import React from "react";

interface Props {
	monthIndex: number;
	year: number;
}

const Month = (props: Props) => {
	const monthName = [
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند",
	];
	return (
		<div className="DayPicker-Caption" aria-live="polite">
			<div>
				{monthName[props.monthIndex]} {props.year}
			</div>
		</div>
	);
};
export default Month;
