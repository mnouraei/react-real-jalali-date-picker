import jalaali from "jalaali-js";

const jalaaliMonthLength = (jy: number, jm: number) => {
	return jalaali.jalaaliMonthLength(jy, jm);
};

const jalaaliToDateObject = (jy: number, jm: number, jd: number) => {
	var gregorianCalenderDate = jalaali.toGregorian(jy, jm, jd);
	return new Date(
		gregorianCalenderDate.gy,
		gregorianCalenderDate.gm - 1,
		gregorianCalenderDate.gd
	);
};

const jalaaliFirstMonthDay = (jy: number, jm: number) => {
	let day = jalaaliToDateObject(jy, jm, 1).getDay();
	switch (day) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 0;
		default:
			return -1;
	}
};

export { jalaaliToDateObject, jalaaliFirstMonthDay, jalaaliMonthLength };
