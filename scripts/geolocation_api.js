fetch('https://freegeoip.app/json/',{
	method: "GET"
})
.then(function(response){
	if(response.status != 200){
		throw response.status;
	}
	return response.json();
})
.then(function(responseData){
	let geolocation_div = document.getElementById('geolocation');
	let ip_address, location, region;
	spanArray = [ip_address,location, region];
	responseArray = ["Country: " + responseData.country_name, "Region: " +
													responseData.region_name, "IP: " + responseData.ip];
	for(i = 0; i < spanArray.length; i++){
		spanArray[i] = document.createElement('span');
		spanArray[i].textContent = responseArray[i];
		geolocation_div.appendChild(spanArray[i]);
	}
})
.catch(function(error){
	console.log(error);
})