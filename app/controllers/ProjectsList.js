var customer = arguments[0];

var projects = Alloy.Collections.projects;
var cpClient = require('CPClient');

if (OS_ANDROID) {
	$.actionBar.setTitle(project);
	var refreshButton = Ti.UI.createButton({
		backgroundImage:'/refresh.png'
	});
	refreshButton.addEventListener('click', loadTwitters);
	
	$.actionBar.setRightButton(refreshButton);
}

$.twittersWindow.title = customer;

function loadProjects() {
	cpClient.searchprojects(project, function(data){
		projects.reset(data);
	});
}

loadProjects();