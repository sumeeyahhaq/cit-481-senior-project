//This JS file fetches API for Worldwide cases
let new_cases = document.getElementById("new_case");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total_cases");
let table = document.getElementById("countries_stat");

//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	method: "GET",
	headers: {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53",
	},
})
	.then((response) =>
		response.json().then((data) => {
			console.log(data);
			total_cases.innerHTML = data.total_cases;
			new_cases.innerHTML = "+" + data.new_cases;
			new_death.innerHTML = "+" + data.new_deaths;
			total_death.innerHTML = data.total_deaths;
			total_recovered.innerHTML = data.total_recovered;
		})
	)
	.catch((err) => {
		console.log(err);
	});
