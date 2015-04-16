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
}
