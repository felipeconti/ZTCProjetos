var customers = Alloy.Collections.customers;
var cpClient = require('CPClient');

if (OS_ANDROID) {
	//$.actionBar.setTitle('Clientes');
}

function loadCustomers(){
	cpClient.reloadCustomers();
}

function showProjects(e) {
	/*
	var ProjectController = Alloy.createController('ProjectsList', e.rowData.title);
	var win = ProjectController.getView();
	if (OS_ANDROID) {
		win.open();
	} else {
		Alloy.Globals.navGroup.open(win);
	}
	*/	
}