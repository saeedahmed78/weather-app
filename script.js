let degree = "&#176;"
	let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    

    function initialize(){
        let city = document.querySelector("#city").value;
        document.querySelector(".weeks").style.display="flex";
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
			success: function(data){
			console.log(data);
			let temp = Math.round(data.main.temp);
			document.querySelector(".city-name").innerHTML = city ;
			document.getElementById("temp").innerHTML = temp + degree;
			document.getElementById("wheather").innerHTML = data.weather[0].description;
            document.getElementById("wind").innerHTML = data.wind.speed;
            

            let weatherType = data.weather[0].icon;
        if(weatherType =="01d" || weatherType == "01n"){
            document.querySelector(".weatherIcon").src ="https://png.icons8.com/ios/50/ffffff/sun-filled.png";
        }
        else if(weatherType =="02d" || weatherType == "02n"){
            document.querySelector(".weatherIcon").src ="https://png.icons8.com/wired/50/ffffff/clouds.png";
        }
        else if(weatherType == "03d" || weatherType == "03n"){
            document.querySelector(".city-name>weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/cloudflare.png";
        }
        else if(weatherType == "04d" || weatherType == "04n"){
            document.querySelector(".weatherIcon").src = "https://www.google.com.pk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwihgsOkw4_dAhVJyoUKHYaYAFsQjRx6BAgBEAU&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Fclouds%2F379676%2F&psig=AOvVaw0VuZDY9ikbkGPsGx2zQHXX&ust=1535538081598920";
        }
        else if(weatherType == "09d" || weatherType == "09n"){
            document.querySelector(".weatherIcon").src ="https://png.icons8.com/wired/50/ffffff/rain.png";
        }
        else if(weatherType == "10d" || weatherType == "010n"){
            document.querySelector(".weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/torrential-rain.png";
        }
        else if(weatherType == "11d" || weatherType == "11n"){
            document.querySelector(".weatherIcon").src = "https://png.icons8.com/wired/50/ffffff/storm.png";
        }
        else if(weatherType == "13d" || weatherType == "13n"){
            document.querySelector(".weatherIcon").src = "https://png.icons8.com/ios/50/ffffff/winter.png";
        }
        else if(weatherType == "50d" || weatherType == "50n"){
			document.querySelector(".weatherIcon").src = "https://www.google.com.pk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjIy-Scxo_dAhUNLBoKHZwuBEEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1010960%2Fmaterial_design_mist_weather_icon&psig=AOvVaw0qj5mvNPQh5CRL_gh6XHX_&ust=1535538861148537";
			
        }
			},
			error: function(error){
				alert(error.responseJSON.message);
			}
		
		})
 	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast?q=" +city+ "&appid=41d496f5b3f1a854e6e79910b71ba93f&units=metric",
		success: function(data){
		console.log(data);
		let d1 = new Date(data.list[0].dt*1000);
		let d2 = new Date(data.list[8].dt*1000);
		let d3 = new Date(data.list[16].dt*1000);
		let d4 = new Date(data.list[24].dt*1000);
		let d5 = new Date(data.list[32].dt*1000);
 			// document.querySelector(".day").innerHTML = city + "<sup>"+"<i class='fas fa-cloud'>"+"</i>"+"</sup>";
			document.querySelector(".day-mon").innerHTML = days[d1.getDay()];
			document.querySelector(".day-tues").innerHTML = days[d2.getDay()];
			document.querySelector(".day-wed").innerHTML = days[d3.getDay()];
			document.querySelector(".day-thus").innerHTML = days[d4.getDay()];
			document.querySelector(".day-fri").innerHTML = days[d5.getDay()];
 			document.querySelector(".pre-temp-mon").innerHTML = Math.round(data.list[0].main.temp) + degree + "/" + Math.round(data.list[2].main.temp) + degree ;
			document.querySelector(".pre-temp-tues").innerHTML = Math.round(data.list[5].main.temp) + degree + "/" + Math.round(data.list[6].main.temp) + degree ;
			document.querySelector(".pre-temp-wed").innerHTML = Math.round(data.list[13].main.temp) + degree + "/" + Math.round(data.list[14].main.temp) + degree ;
			document.querySelector(".pre-temp-thus").innerHTML = Math.round(data.list[21].main.temp) + degree + "/" + Math.round(data.list[22].main.temp) + degree ;
			document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[29].main.temp) + degree + "/" + Math.round(data.list[32].main.temp) + degree ;
			// document.querySelector(".pre-temp-fri").innerHTML = Math.round(data.list[36].main.temp) + degree + "/" + Math.round(data.list[39].main.temp) + degree ;
			
			// document.querySelector(".pre-wind-sunday").innerHTML = data.list[4].wind.speed;
			document.querySelector(".pre-wind-mon").innerHTML = data.list[0].wind.speed;
			document.querySelector(".pre-wind-tue").innerHTML = data.list[8].wind.speed;
			document.querySelector(".pre-wind-wed").innerHTML = data.list[16].wind.speed;
			document.querySelector(".pre-wind-thus").innerHTML = data.list[24].wind.speed;
			document.querySelector(".pre-wind-fri").innerHTML = data.list[32].wind.speed;
 			// document.querySelector(".pre-cloud-sunday").innerHTML = data.list[0].weather[0].description;
			document.querySelector(".pre-cloud-mon").innerHTML = data.list[0].weather[0].description;
			document.querySelector(".pre-cloud-tue").innerHTML = data.list[8].weather[0].description;
			document.querySelector(".pre-cloud-wed").innerHTML = data.list[16].weather[0].description;
			document.querySelector(".pre-cloud-thus").innerHTML = data.list[24].weather[0].description;
			document.querySelector(".pre-cloud-fri").innerHTML = data.list[32].weather[0].description;
			
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
