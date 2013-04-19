var customers = Alloy.Collections.customers;

exports.validUser = function(callBackOk) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(e) {
		callBackOk();
	};
	xhr.onerror = function(e) {
		alert('Login inválido!');	
	};
	xhr.timeout = 5000;
	xhr.open("GET", "http://controlaprojetos.ztc.com.br/customers.json");
	xhr.setRequestHeader('Authorization', Ti.App.Properties.getString('login'));
    xhr.send();
};

exports.reloadCustomers = function(callback) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(e) {
		var data = JSON.parse(this.responseText);	
		customers.reset(data);
	};
	xhr.onerror = function(e) {
		alert('Erro ao carregar clientes: ' +this.responseText);	
	};
	xhr.open("GET", "http://controlaprojetos.ztc.com.br/customers.json");
	xhr.setRequestHeader('Authorization', Ti.App.Properties.getString('login'));
    xhr.send();
};

exports.searchProjects = function(trend, callback) {
	/*
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function(e) {
		var twitters = JSON.parse(this.responseText).results;	
		callback(twitters);
	};
	xhr.onerror = function(e) {
		alert(e);	
	};
	xhr.open("GET", "http://search.twitter.com/search.json?q=" + escape(trend));
	xhr.send();	
	*/
}