function copyRights() {
	var year = new Date().getFullYear();
	var date = `&copy; AWSome COVID STATS ${year}. All Rights Reserved`;
	document.getElementsByClassName("copy-right")[0].innerHTML = date;
}
