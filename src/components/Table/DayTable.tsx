import React, { useEffect, useState } from "react";
import {
	jalaaliFirstMonthDay,
	jalaaliMonthLength,
} from "../Helper/JalaaliHelper";
import "./index.css";
interface Props {
	monthIndex: number;
	year: number;
}

interface DayInfo {
	weekdayIndex: number;
	dayNumber: number;
	weekIndex: number;
}
const DayTable = (props: Props) => {
	const [dayInfo, setDayInfo] = useState<DayInfo[]>([]);

	const getWeekDay = (weekIndexInfo: number) => {
		if (weekIndexInfo === 1) {
			let element = [];
			var firstDayIndex = dayInfo[0].weekdayIndex;

			if (firstDayIndex > 0) {
				for (let i = 0; i < firstDayIndex; i++) {
					element.push(
						<div
							className={i === 6 ? "DayPicker-Day-Fri" : "DayPicker-Day"}
						></div>
					);
				}
			}

			element.push(
				dayInfo
					.filter((x) => x.weekIndex === weekIndexInfo)
					.map((value, index) => (
						<div
							className={
								value.weekdayIndex === 6 ? "DayPicker-Day-Fri" : "DayPicker-Day"
							}
						>
							{value.dayNumber}
						</div>
					))
			);

			return element;
		} else {
			return dayInfo
				.filter((x) => x.weekIndex === weekIndexInfo)
				.map((value, index) => (
					<div
						className={
							value.weekdayIndex === 6 ? "DayPicker-Day-Fri" : "DayPicker-Day"
						}
					>
						{value.dayNumber}
					</div>
				));
		}
	};

	const getWeekRow = () => {
		let gIndex = 0;
		var day = dayInfo.map((value, index) => {
			gIndex = gIndex !== value.weekIndex ? 0 : value.weekIndex;
			if (gIndex === 0) {
				gIndex = value.weekIndex;
				return (
					<div className="DayPicker-Week" role="row">
						{getWeekDay(value.weekIndex)}
					</div>
				);
			}

			return null;
		});
		return day;
	};

	useEffect(() => {
		let DAY_INFO = [];
		let WEEK_DAY_INDEX = jalaaliFirstMonthDay(props.year, props.monthIndex + 1);
		let DAY_NUMBER: number = 1;
		let WEEK_INDEX: number = 1;
		for (
			let i = 1;
			i <= jalaaliMonthLength(props.year, props.monthIndex + 1);
			i++
		) {
			DAY_INFO.push({
				weekdayIndex: WEEK_DAY_INDEX,
				dayNumber: DAY_NUMBER,
				weekIndex: WEEK_INDEX,
			});
			WEEK_INDEX = WEEK_DAY_INDEX === 6 ? WEEK_INDEX + 1 : WEEK_INDEX;
			WEEK_DAY_INDEX++;
			DAY_NUMBER++;

			WEEK_DAY_INDEX = WEEK_DAY_INDEX > 6 ? 0 : WEEK_DAY_INDEX;
		}
		setDayInfo(DAY_INFO);
	}, [props]);

	return (
		<div style={{ top: "1em", position: "relative" }}>
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
				<div className="DayPicker-Weekday-Fri" title="Friday">
					ج
				</div>
			</div>
			<div className="DayPicker-Body" role="rowgroup">
				{getWeekRow()}
			</div>
		</div>
	);
};

export default DayTable;
