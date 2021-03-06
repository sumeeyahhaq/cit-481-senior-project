//Calculates the difference between todays date and first COVID case date
let first_case = document.getElementById("first_case");
var date_diff_indays = function (date1, date2) {
	dt1 = new Date(date1);
	dt2 = new Date(date2);
	return Math.floor(
		(Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
			Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
			(1000 * 60 * 60 * 24)
	);
};

let d = new Date();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let day = d.getDate();
let fullDate = month + "/" + day + "/" + year;
first_case.innerHTML = date_diff_indays("12/31/2019", fullDate) + " Days ago";
