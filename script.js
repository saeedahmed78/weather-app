let degree = "&#176;"


function initialize(){
	let city = document.querySelector("#city").value;
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
		console.log(data);
		let temp = Math.round(data.main.temp);
		document.querySelector(".city-name").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
		document.getElementById("temp").innerHTML = temp + degree;
		document.getElementById("wheather").innerHTML = data.weather[0].description;
		document.getElementById("wind").innerHTML = data.wind.speed;
		},
		error: function(error){
			alert(error.responseJSON.message);
		}
	
	})


$.ajax({
	url: "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
	success: function(data){
	console.log(data);
		// document.querySelector(".day").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
		document.querySelector(".pre-temp-sunday").innerHTML = Math.round(data.list[4].main.temp) + degree + "/" + Math.round(data.list[0].main.temp) + degree ;
		document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[5].main.temp) + degree + "/" + Math.round(data.list[9].main.temp) + degree ;
		document.querySelector(".pre-temp-tue").innerHTML = Math.round(data.list[13].main.temp) + degree + "/" + Math.round(data.list[15].main.temp) + degree ;
		document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[20].main.temp) + degree + "/" + Math.round(data.list[23].main.temp) + degree ;
		document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[28].main.temp) + degree + "/" + Math.round(data.list[31].main.temp) + degree ;
		document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[36].main.temp) + degree + "/" + Math.round(data.list[39].main.temp) + degree ;
		
		document.querySelector(".pre-wind-sunday").innerHTML = data.list[4].wind.speed;
		document.querySelector(".pre-wind-mon").innerHTML = data.list[8].wind.speed;
		document.querySelector(".pre-wind-tue").innerHTML = data.list[16].wind.speed;
		document.querySelector(".pre-wind-wed").innerHTML = data.list[23].wind.speed;
		document.querySelector(".pre-wind-thus").innerHTML = data.list[31].wind.speed;
		document.querySelector(".pre-wind-fri").innerHTML = data.list[39].wind.speed;


		document.querySelector(".pre-cloud-sunday").innerHTML = data.list[4].weather[0].description;
		document.querySelector(".pre-cloud-mon").innerHTML = data.list[8].weather[0].description;
		document.querySelector(".pre-cloud-tue").innerHTML = data.list[16].weather[0].description;
		document.querySelector(".pre-cloud-wed").innerHTML = data.list[23].weather[0].description;
		document.querySelector(".pre-cloud-thus").innerHTML = data.list[31].weather[0].description;
		document.querySelector(".pre-cloud-fri").innerHTML = data.list[0].weather[0].description;
		
		// document.querySelector(".pre-wind").innerHTML = data.weather[0].description;
		// document.querySelector(".pre-cloud").innerHTML = data.wind.speed;
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

