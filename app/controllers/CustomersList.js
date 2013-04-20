var customers = Alloy.Collections.customers;
var cpClient = require('CPClient');

if (OS_ANDROID) {
	$.actionBar.setTitle('Clientes');
}

function loadCustomers(){
	cpClient.reloadCustomers();
}

function transformCustomers(collection){
	var trans = collection.toJSON();
	trans.custom_title = collection.id+' - '+collection.nickname;
	return trans
}

function showProjects(e) {
	
	var custormer = customers.at(e.index).toJSON()

	var ProjectController = Alloy.createController('ProjectsList', custormer );
	var win = ProjectController.getView();
	if (OS_ANDROID) {
		win.open();
	} else {
		Alloy.Globals.navGroup.open(win);
	}
}

// $.index.addEventListener('close', function(){
	// $.destroy();
// });
