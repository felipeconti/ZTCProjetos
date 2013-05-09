var users = Alloy.Collections.users;
var cpClient = require('CPClient');

var drop_button =  Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	transform:Titanium.UI.create2DMatrix().rotate(90)
});
$.emailTextField.rightButton = drop_button;

$.pickerBox.setDropButton(drop_button);
$.pickerBox.setTextField($.emailTextField);

cpClient.getUsers(function(){
	var data = [];
	for(var i=0, ilen=users.length; i<ilen; i++){
		data.push(Ti.UI.createPickerRow({title: users.at(i).toJSON().email}));
	}
	$.pickerBox.setPicker(data);
});

function acessar() {

	if ($.emailTextField.value != '' && $.passTextField.value != '') {
		var cpClient = require('CPClient');
		var authstr = 'Basic ' + Titanium.Utils.base64encode($.emailTextField.value + ':' + $.passTextField.value);
		authstr = authstr.replace(/(\r\n|\n|\r)/gm,"");

		Ti.App.Properties.setString('login', authstr);

		cpClient.validUser(function (){
			cpClient.reloadCustomers();
			$.login.close();			
		});
	}
	else{
		alert('Favor preencher o login!');
	}		
}

exports.runAnimation = function() {
	var matrix = Ti.UI.create2DMatrix()
	matrix = matrix.rotate(180);
	matrix = matrix.scale(-2, -2);
	var a = Ti.UI.createAnimation({
		transform : matrix,
		autoreverse : true
	});
	$.login_view.animate(a);
};