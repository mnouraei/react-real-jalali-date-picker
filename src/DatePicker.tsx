import React, { useState } from "react";
import Month from "./components/Month/Month";
import DayTable from "./components/Table/DayTable";

interface Props {}

const DatePicker = (props: Props) => {
	const [monthIndex, setMonthIndex] = useState<number>(0);
	const [year, setYear] = useState<number>(1400);

	const onClickChangeMonth = (nav: string) => {
		switch (nav) {
			case "next":
				if (monthIndex + 1 > 11) {
					setYear(year + 1);
					setMonthIndex(0);
				} else {
					setMonthIndex(monthIndex + 1);
				}
				break;
			case "prev":
				if (monthIndex - 1 < 1) {
					setYear(year - 1);
					setMonthIndex(11);
				} else {
					setMonthIndex(monthIndex - 1);
				}
				break;
		}
	};

	return (
		<div className="DayPicker-wrapper">
			<div className="DayPicker-NavBar">
				<span
					role="button"
					className="DayPicker-NavButton DayPicker-NavButton--next"
					onClick={() => onClickChangeMonth("next")}
				></span>
				<span
					role="button"
					className="DayPicker-NavButton DayPicker-NavButton--prev"
					onClick={() => onClickChangeMonth("prev")}
				></span>
			</div>
			<div className="DayPicker-Months">
				<div className="DayPicker-Month">
					<Month monthIndex={monthIndex} year={year} />
					<DayTable monthIndex={monthIndex} year={year} />
				</div>
			</div>
		</div>
	);
};

export default DatePicker;
