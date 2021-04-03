//Makes a link for user to go back

//Return to worldwide links
function returnLink(number) {
	let linkname = "Go Back";
	let goBack = linkname.link("index.html#worldwide-info");

	if (number == 1) {
		var return_Link = document.getElementById("chart-return");
	} else {
		var return_Link = document.getElementById("table-return");
	}
	return_Link.innerHTML = goBack;

	return_Link.onclick = function () {
		document.getElementById("chart-return").innerHTML = "";
		document.getElementById("table-return").innerHTML = "";
	};
}

//Return to USA links
function returnLinkUSA(number) {
	let linkname = "Go Back";
	let goBack = linkname.link("domestic.html#usa-info");

	if (number == 1) {
		var return_Link = document.getElementById("chart-return-usa");
	} else {
		var return_Link = document.getElementById("table-return-usa");
	}
	return_Link.innerHTML = goBack;

	return_Link.onclick = function () {
		document.getElementById("chart-return-usa").innerHTML = "";
		document.getElementById("table-return-usa").innerHTML = "";
	};
}
