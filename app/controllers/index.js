if (OS_IOS) {
	$.win_IOS.visible = false;
}

if (OS_ANDROID) {
	$.win_AND.getView().open();	
} else {
	Alloy.Globals.navGroup = $.navGroup;
	$.win_IOS.open();
}

var login = Alloy.createController('login');
login.getView().open();

if (OS_IOS) {
	$.win_IOS.visible = true;
}
