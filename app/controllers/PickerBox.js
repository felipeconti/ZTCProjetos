var textField;

var slide_in  =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-251});

$.picker.selectionIndicator = true;

var dropButton =  Titanium.UI.createButton({
	style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	transform:Titanium.UI.create2DMatrix().rotate(90)
});

dropButton.addEventListener('click',function() {
	$.Picker_View.animate(slide_in);
	textField.blur();	
});

var cancel =  Titanium.UI.createButton({
	title:'Cancelar',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done =  Titanium.UI.createButton({
	title:'Selecionar',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

$.toolbar.items = [cancel,spacer,done];

cancel.addEventListener('click',function() {
	$.Picker_View.animate(slide_out);
});

done.addEventListener('click',function() {
	textField.value =  $.picker.getSelectedRow(0).title;
	$.Picker_View.animate(slide_out);
});

exports.setTextField = function(pTextField) {
	textField = pTextField;
	
	textField.rightButton = dropButton;
	
	textField.addEventListener('focus', function() {
		$.Picker_View.animate(slide_out);
	});
};

exports.setPicker = function(data) {
	for(var i=0, ilen=data.length; i<ilen; i++){
		$.picker_column.addRow(data[i]);
	}
    $.picker.reloadColumn($.picker_column);
};