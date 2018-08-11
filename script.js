
function initialize(){
	let city = document.querySelector("#city").value;
	let degree = "&#176;"
	let wheather = new XMLHttpRequest();
	let apiKey = "41d496f5b3f1a854e6e79910b71ba93f";
	wheather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city +" &units=imperial"+ "&appid=" + apiKey, false)
	wheather.send(null);
	let r = JSON.parse(wheather.response);
	console.log(r)
	if (city !== "") {
	let temp = r.main.temp;	
	let tempInCelcius = (Math.round(Math.round(temp - 32)/1.8)) ;
	let display =  r.weather[0].description;
	let wind = "Wind "+ r.wind.speed;
		document.querySelector(".city-name").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
		document.getElementById("temp").innerHTML = tempInCelcius + degree;
		document.getElementById("wheather").innerHTML = display;
		document.getElementById("wind").innerHTML = wind;

	}else{
		alert("Please Enter City Name")
	}
}

let bgImgs = ["img1.gif", "img2.gif", "img3.gif", "img4.gif", "img5.gif"];

function themeChanger(){

	setInterval(function(){
	let bgRound = parseInt(Math.random()*bgImgs.length);
	document.querySelector(".main").style["background-image"] = `url(images/${bgImgs[bgRound]})`;
},3000);
}

themeChanger();