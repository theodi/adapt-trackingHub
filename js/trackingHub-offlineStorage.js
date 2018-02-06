define([
	'core/js/adapt',
	'core/js/offlineStorage'
], function(Adapt) {

	var dataStore = {};

	Adapt.offlineStorage.initialize({

		get: function(name) {
			if (name === undefined) {
				return null;
			}

			return dataStore[name];
		},

		set: function(name, value) {
			//Convert arguments to array and drop the 'name' parameter
			var args = [].slice.call(arguments, 1);
			var isObject = typeof name == "object";

			if (isObject) {
				dataStore = _.extend(dataStore, value);
			} else {
				dataStore[name] = value;
			}
			return true;
		}
		
	});

});