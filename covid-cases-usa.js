//This JS file fetches API for cases in USA only
let country_name_usa = document.getElementById("country_name_usa");
let total_cases_usa = document.getElementById("total_cases_usa");
let total_deaths_usa = document.getElementById("total_deaths_usa");
let total_recovered_usa = document.getElementById("total_recovered_usa");
let new_cases_usa = document.getElementById("new_cases_usa");
let new_deaths_usa = document.getElementById("new_deaths_usa");

//Fetching API
fetch(
	"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
	{
		method: "GET",
		headers: {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53",
		},
	}
)
	.then((response) =>
		response.json().then((data) => {
			console.log(data);

			// 0 is for USA changing this number will change the country
			let i = 0;
			let countries_stat = data.countries_stat;
			console.log(countries_stat[i]);
			total_cases_usa.innerHTML = countries_stat[i].cases;
			total_deaths_usa.innerHTML = countries_stat[i].deaths;
			total_recovered_usa.innerHTML = countries_stat[i].total_recovered;
			new_cases_usa.innerHTML = "+" + countries_stat[i].new_cases;
			new_deaths_usa.innerHTML = "+" + countries_stat[i].new_deaths;
			country = countries_stat[i].country_name;
			if (country == "USA") {
				country_name_usa.innerHTML = "&#x1f1fa;&#x1f1f8; United States";
			} else {
				country_name_usa.innerHTML = countries_stat[i].country_name;
			}
		})
	)

	.catch((err) => {
		console.log(err);
	});
