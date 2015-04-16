<?php

class Carbon_Field_Number extends Carbon_Field {
	/**
	 * template()
	 *
	 * Prints the main Underscore template
	 **/
	function template() {
		?>
		<input id="{{{ id }}}" type="number" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}

	function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Set the value for the field
		$this->set_name($name);

		$field_value = '';
		if ( !empty($value) ) {
			$value = absint($value);
			if ( !empty($value) ) {
				$field_value = $value;
			}
		}

		$this->set_value($field_value);

		parent::save();
	}

	function admin_enqueue_scripts() {
		$template_dir = get_template_directory_uri();

		# Enqueue JS
		crb_enqueue_script('carbon-field-FIELD_NAME', $template_dir . '/includes/carbon-field-number/js/field.js', array('carbon-fields'));
	}
}
