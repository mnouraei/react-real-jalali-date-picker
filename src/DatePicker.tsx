import React from "react";
import Table from "./components/Table/Table";

interface Props {}

const DatePicker = (props: Props) => {
	return (
		<div style={{ width: 250, height: 250, backgroundColor: "gray" }}>
			<Table />
		</div>
	);
};

export default DatePicker;
