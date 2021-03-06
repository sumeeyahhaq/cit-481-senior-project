//This function enables user to search through the table by country name
function searchCountry() {
	let input = document.getElementById("searchInput").value;
	input = input.toLowerCase();

	let x = document.getElementsByClassName("country");
	let y = document.getElementsByClassName("cases");
	let z = document.getElementsByClassName("serious-critical");
	let a = document.getElementsByClassName("deaths");
	let b = document.getElementsByClassName("recovered-per-country");

	let count = 0;
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
			y[i].style.display = "none";
			z[i].style.display = "none";
			a[i].style.display = "none";
			b[i].style.display = "none";
		} else {
			count++;
			x[i].style.display = "list-item";
			y[i].style.display = "list-item";
			z[i].style.display = "list-item";
			a[i].style.display = "list-item";
			b[i].style.display = "list-item";

			x[i].style.display = "table-cell";
			y[i].style.display = "table-cell";
			z[i].style.display = "table-cell";
			a[i].style.display = "table-cell";
			b[i].style.display = "table-cell";

			x[i].style.listStyle = "none";
			y[i].style.listStyle = "none";
			z[i].style.listStyle = "none";
			a[i].style.listStyle = "none";
			b[i].style.listStyle = "none";

			// Changes backround color based on the row position
			if (count % 2 === 0) {
				x[i].style.backgroundColor = "rgb(240, 240, 240)";
				y[i].style.backgroundColor = "rgb(240, 240, 240)";
				z[i].style.backgroundColor = "rgb(240, 240, 240)";
				a[i].style.backgroundColor = "rgb(240, 240, 240)";
				b[i].style.backgroundColor = "rgb(240, 240, 240)";
			} else {
				x[i].style.backgroundColor = "#fafafa";
				y[i].style.backgroundColor = "#fafafa";
				z[i].style.backgroundColor = "#fafafa";
				a[i].style.backgroundColor = "#fafafa";
				b[i].style.backgroundColor = "#fafafa";
			}
		}
	}
}
