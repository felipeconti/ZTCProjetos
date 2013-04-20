var customer = arguments[0];
var projects = Alloy.Collections.projects;
var cpClient = require('CPClient');

if (OS_ANDROID) {
	$.actionBar.setTitle(customer.name);
	var refreshButton = Ti.UI.createButton({
		backgroundImage:'/refresh.png'
	});
	refreshButton.addEventListener('click', loadProjects);
	
	$.actionBar.setRightButton(refreshButton);
}

$.projectsWindow.title = customer.name;

function loadProjects() {
	cpClient.searchProjects(customer.id);
}

loadProjects();