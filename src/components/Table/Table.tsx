import React, { useEffect, useState } from "react";
import "./index.css";
interface Props {}

const Table = (props: Props) => {
	const [dayInfo, setDayInfo] = useState([
		//{ weekdayIndex: 1, dayNumber: 1 },
		//{ weekdayIndex: 2, dayNumber: 2 },
		//{ weekdayIndex: 3, dayNumber: 3 },
		//{ weekdayIndex: 4, dayNumber: 4 },
		//{ weekdayIndex: 5, dayNumber: 5 },
		{ weekdayIndex: 6, dayNumber: 6 },
		{ weekdayIndex: 0, dayNumber: 7 },
		{ weekdayIndex: 1, dayNumber: 8 },
		{ weekdayIndex: 2, dayNumber: 9 },
		{ weekdayIndex: 3, dayNumber: 10 },
		{ weekdayIndex: 4, dayNumber: 11 },
		{ weekdayIndex: 5, dayNumber: 12 },
		{ weekdayIndex: 6, dayNumber: 13 },
		{ weekdayIndex: 0, dayNumber: 14 },
		{ weekdayIndex: 1, dayNumber: 15 },
		{ weekdayIndex: 2, dayNumber: 16 },
		{ weekdayIndex: 3, dayNumber: 17 },
		{ weekdayIndex: 4, dayNumber: 18 },
		{ weekdayIndex: 5, dayNumber: 19 },
		{ weekdayIndex: 6, dayNumber: 20 },
		{ weekdayIndex: 0, dayNumber: 21 },
		{ weekdayIndex: 1, dayNumber: 22 },
		{ weekdayIndex: 2, dayNumber: 23 },
		{ weekdayIndex: 3, dayNumber: 24 },
		{ weekdayIndex: 4, dayNumber: 25 },
		{ weekdayIndex: 5, dayNumber: 26 },
		{ weekdayIndex: 6, dayNumber: 27 },
		{ weekdayIndex: 0, dayNumber: 28 },
		{ weekdayIndex: 1, dayNumber: 29 },
		{ weekdayIndex: 2, dayNumber: 30 },
		{ weekdayIndex: 3, dayNumber: 31 },
	]);

	const getWeekDay = (weekIndexInfo: number) => {
		let gIndex = 0;
		var firstDayIndex = dayInfo[0].weekdayIndex;

		let flag = firstDayIndex !== 0 && weekIndexInfo <= 1;
		var days = dayInfo.map((value, index) => {
			if (flag) {
				return (
					<div
						className="DayPicker-Day"
						role="gridcell"
						aria-label="Thu Sep 02 2021"
						aria-disabled="false"
						aria-selected="false"
					></div>
				);
			} else if (value.weekdayIndex === firstDayIndex) {
				flag = false;
			}

			let weekIndex = Math.ceil(value.dayNumber / 7);
			gIndex = gIndex !== weekIndex ? 0 : weekIndex;
			if (gIndex === 0) {
				gIndex = weekIndex;
			}
			if (weekIndexInfo === weekIndex) {
				if (gIndex !== 0) {
					return (
						<div
							className="DayPicker-Day"
							role="gridcell"
							aria-label="Thu Sep 02 2021"
							aria-disabled="false"
							aria-selected="false"
						>
							{value.dayNumber}
						</div>
					);
				}
			}

			return null;
		});
		return days;
	};

	const getWeekRow = () => {
		let gIndex = 0;

		var day = dayInfo.map((value, index) => {
			let weekIndex = Math.ceil(value.dayNumber / 7);
			gIndex = gIndex !== weekIndex ? 0 : weekIndex;
			if (gIndex === 0) {
				gIndex = weekIndex;
				return (
					<div className="DayPicker-Week" role="row">
						{getWeekDay(weekIndex)}
					</div>
				);
			}

			return null;
		});
		return day;
	};
	useEffect(() => {
		//getWeekRow();
	}, []);
	return (
		<div>
			<div className="DayPicker-WeekdaysRow" role="row">
				<div className="DayPicker-Weekday" title="Saturday">
					ش
				</div>
				<div className="DayPicker-Weekday" title="Sunday">
					ی
				</div>
				<div className="DayPicker-Weekday" title="Monday">
					د
				</div>
				<div className="DayPicker-Weekday" title="Tuesday">
					س
				</div>
				<div className="DayPicker-Weekday" title="Wednesday">
					چ
				</div>
				<div className="DayPicker-Weekday" title="Thursday">
					پ
				</div>
				<div className="DayPicker-Weekday" title="Friday">
					ج
				</div>
			</div>
			<div className="DayPicker-Body" role="rowgroup">
				{getWeekRow()}
			</div>
		</div>
	);
};

export default Table;
