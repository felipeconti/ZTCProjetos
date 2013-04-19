if (OS_ANDROID) {
	$.customersList.getView().open();	
} else {
	Alloy.Globals.navGroup = $.navGroup;
	$.index.open();
}

var login = Alloy.createController('login');
login.getView().open();