FuseBox.addPlugin({
	hmrUpdate: function(data) {
		var type = data && data.type;
		if (type !== 'reload') return;
		if (typeof location !== 'undefined') {
			location.href = location.href;
			return true;
		}
	}
});