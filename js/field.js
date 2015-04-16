window.carbon = window.carbon || {};

(function($) {
	var carbon = window.carbon;

	if (typeof carbon.fields === 'undefined') {
		return false;
	}

	carbon.fields.View.Number = carbon.fields.View.extend({
		// Add the events from the parent view and also include new ones
		events: function() {
			return _.extend({}, carbon.fields.View.prototype.events, {
				'blur input[type="number"]': 'checkInt',
			});
		},
		
		checkInt: function(event) {
			var $input = this.$('input[type="number"]');
			var value = $input.val();
			var intval = parseInt(value);

			if (!!value && !isNaN(intval) && intval != 0) {
				value = Math.abs(value);
			} else {
				value = '';
			}

			this.model.set('value', value);
			$input.val(value);
		},
	});

}(jQuery));