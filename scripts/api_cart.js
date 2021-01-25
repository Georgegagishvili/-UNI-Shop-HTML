fetch('https://reqres.in/api/unknown',{
	method: 'GET'
})
.then(function(response) {
	if(response.status !== 200){
		throw response.status;
	}
	return response.json();
})
.then(function(responseData){
	let table = document.getElementById('cart-table');
	var prices = [];
	responseData.data.forEach(element => {
		let tr = document.createElement('tr');
		let td1,td2,td3,td4;
		tdList = [td1,td2,td3,td4];
		for(i = 0; i < tdList.length; i++){
			tdList[i] = document.createElement('td');
			console.log(tdList[0]);
		}
		
		quantity = Math.floor(Math.random() * 10 + 1);
		eachPrice = Math.floor(Math.random() * 500 + 155);
		content = [element.name, quantity, eachPrice + "$", quantity * eachPrice + "$"];

		for(i = 0; i < tdList.length; i++){
			for(i = 0; i < content.length; i++){
				tdList[i].classList.add('column' + (i + 1))
				tdList[i].textContent = content[i];
				tr.appendChild(tdList[i])
			}
		}
		table.appendChild(tr);
		prices.push(quantity * eachPrice);
	})
    var sum = prices.reduce(function(a, b){
        return a + b;
    }, 0);
	fullPriceTR = document.createElement('tr');
	fullPriceTD = document.createElement('td');
	fullPriceTD.textContent = "Total Price: "+ sum + "$";
	fullPriceTD.classList.add('column4');
	fullPriceTD.setAttribute('colspan',4);
	fullPriceTR.appendChild(fullPriceTD);
	table.appendChild(fullPriceTR);
}).catch(function(error){
	console.log(error);
})

