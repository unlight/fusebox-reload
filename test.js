const assert = require('assert');

global.FuseBox = {
	addPlugin: function(plugin) {
		assert(plugin);
		assert(plugin.hmrUpdate);
	}
};

require('./index');