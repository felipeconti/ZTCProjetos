var users     = Alloy.Collections.users;
var types     = Alloy.Collections.types;
var customers = Alloy.Collections.customers;
var projects  = Alloy.Collections.projects;

exports.getUsers = function(callBackOk) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(e) {
		var data = JSON.parse(this.responseText);	
		users.reset(data);
		callBackOk();
	};
	xhr.onerror = function(e) {
		alert('Erro de conexão ao buscar usuários!');
	};
	xhr.open("GET", "http://controlaprojetos.ztc.com.br/users.json");
    xhr.send();
};

exports.validUser = function(callBackOk) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(e) {
		var data = JSON.parse(this.responseText);	
		types.reset(data);
		callBackOk();
	};
	xhr.onerror = function(e) {
		if (this.status = 401){
			alert('Login inválido!');
		}else{
			alert('Erro de conexão!');
		}
	};
	//xhr.timeout = 15000;
	xhr.open("GET", "http://controlaprojetos.ztc.com.br/types.json");
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

exports.searchProjects = function(customer_id) {
	var xhr = Ti.Network.createHTTPClient();	
	xhr.onload = function(e) {
		var data = JSON.parse(this.responseText);	
		projects.reset(data);
	};
	xhr.onerror = function(e) {
		alert('Erro ao carregar projetos: ' +this.responseText);	
	};
	xhr.open("GET", "http://controlaprojetos.ztc.com.br/customers/"+customer_id+"/projects.json");
	xhr.setRequestHeader('Authorization', Ti.App.Properties.getString('login'));
    xhr.send();
};