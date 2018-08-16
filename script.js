let degree = "&#176;"
function initialize(){
	let city = document.querySelector("#city").value;
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
		console.log(data);
		document.querySelector(".city-name").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
		document.getElementById("temp").innerHTML = data.main.temp + degree;
		document.getElementById("wheather").innerHTML = data.weather[0].description;
		document.getElementById("wind").innerHTML = data.wind.speed;
		},
		error: function(error){
			alert(error.responseJSON.message);
		}
	
	})
}





let bgImgs = ["img1.gif", "img2.gif", "img3.gif", "img4.gif", "img5.gif"];

function themeChanger(){

	setInterval(function(){
	let bgRound = parseInt(Math.random()*bgImgs.length);
	document.querySelector(".main").style["background-image"] = `url(images/${bgImgs[bgRound]})`;
},3000);
}

themeChanger();

