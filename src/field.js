window.carbon = window.carbon || {};

(function($) {
	var carbon = window.carbon;

	if (typeof carbon.fields === 'undefined') {
		return false;
	}

	carbon.fields.Model.Number = carbon.fields.Model.extend({
		/*
		 * The validate method is an internal Backbone method.
		 * It will check if the field model data is valid.
		 * Used to check required fields
		 *
		 * @see http://backbonejs.org/#Model-validate
		 */
		validate: function(attrs, options) {
			var hasErrors = false;
			var _this = this;
			var min = _this.get('min');
			var max = _this.get('max');
			var step = _this.get('step');
			var value = attrs.value;

			var testStepValidation = ( value - min ) / step;

			if ( value === '' ) {
				hasErrors = crbl10n.message_required_field;
			} else if ( isNaN(value) ) {
				hasErrors = crbl10n.message_form_validation_failed;
			} else if ( min > value || value > max ) {
				hasErrors = crbl10n.message_form_validation_failed;
			} else if ( testStepValidation !== parseInt( testStepValidation, 10 ) ) {
				hasErrors = crbl10n.message_form_validation_failed;
			}

			return hasErrors;
		}
	});

}(jQuery));