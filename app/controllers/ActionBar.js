exports.setTitle = function(title) {
	$.titleLabel.text = title;
};

exports.setRightButton = function(button){
	button.top = '2dp';
	button.right = '0dp';
	button.width = '48dp';
	button.height = '48dp';
	$.actionBarView.add(button);	
};
