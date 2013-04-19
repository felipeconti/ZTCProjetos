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