import React, { useState } from "react";
import MonthDay from "./components/MonthDay/MonthDay";

interface Props {}

const DatePicker = (props: Props) => {
	const [showMonth, setShowMonth] = useState<any>();

	const onFocusInput = () => {
		setShowMonth(
			<MonthDay
				monthIndex={1400}
				year={1}
				style={{
					border: "solid 1px red",
					position: "absolute",
					width: "100%",
					background: "white",
					top: "25px",
				}}
			/>
		);
	};

	return (
		<div>
			<div style={{ position: "relative" }}>
				<input onFocus={onFocusInput} />
				{showMonth}
			</div>
			<div>asdasd</div>
		</div>
	);
};

export default DatePicker;
