
function initialize(){
	let city = document.querySelector("#city").value;

	let wheather = new XMLHttpRequest();
	let apiKey = "41d496f5b3f1a854e6e79910b71ba93f";
	wheather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city +" &units=imperial"+ "&appid=" + apiKey, false)
	wheather.send(null);
	let r = JSON.parse(wheather.response);
	console.log(r)
	if (city !== "") {
	let temp = r.main.temp;	
	let tempInCelcius ="Current Temperature in " + r.name +" is " + (Math.round(Math.round(temp - 32)/1.8)) +" " + "<br />";
	let display = "Current weather in " + r.name +" "+ r.weather[0].description	 + "<br />";
	let wind ="Current wind " + r.wind.speed + "<br />";
		document.getElementById("temp").innerHTML = tempInCelcius;
		document.getElementById("wheather").innerHTML = display;
		document.getElementById("wind").innerHTML = wind;

	}else{
		alert("Please Enter City Name")
	}
}