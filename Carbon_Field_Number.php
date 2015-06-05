<?php

class Carbon_Field_Number extends Carbon_Field {
	/**
	 * template()
	 *
	 * Prints the main Underscore template
	 **/
	
	protected $default_min = 1;
	protected $default_max = 2147483647;
	protected $default_truncate = 0;

	protected $min = 1;
	protected $max = 2147483647;
	protected $truncate = 0;

	function template() {
		?>
		<input id="{{{ id }}}" type="number" name="{{{ name }}}" value="{{ value }}" class="regular-text" />
		<?php
	}

	function to_json($load) {
		$field_data = parent::to_json($load);

		$field_data = array_merge($field_data, array(
			'min' => is_numeric($this->min) ? $this->min : $this->default_min,
			'max' => is_numeric($this->max) ? $this->max : $this->default_max,
			'truncate' => is_int($this->truncate) ? $this->truncate : $this->default_truncate,
		));

		return $field_data;
	}

	function save() {
		$name = $this->get_name();
		$value = $this->get_value();

		// Set the value for the field
		$this->set_name($name);

		$field_value = '';
		if ( isset($value) && $value !== '' && is_numeric($value) ) {
			$value = floatval($value);
			$value = $this->truncate($value);

			$is_valid_min = $this->min <= $value;
			$is_valid_max = $value <= $this->max;

			if ( $value !== '' && $is_valid_min && $is_valid_max ) {
				$field_value = $value;
			}
		}

		$this->set_value($field_value);

		parent::save();
	}

	function admin_enqueue_scripts() {
		$template_dir = get_template_directory_uri();

		# Enqueue JS
		crb_enqueue_script('carbon-field-Number', $template_dir . '/includes/carbon-field-number/js/field.js', array('carbon-fields'));
		
		# Enqueue CSS
		crb_enqueue_style('carbon-field-Number', $template_dir . '/includes/carbon-field-number/css/field.css');
	}

	function set_max($max) {
		$this->max = $max;
		return $this;
	}

	function set_min($min) {
		$this->min = $min;
		return $this;
	}

	function set_truncate($truncate) {
		$this->truncate = $truncate;
		return $this;
	}

	// Helper Function, save on php 5.2
	function truncate($number) {
		$decimals = $this->truncate;

		$power = pow(10, $decimals); 
		if($number > 0){
			return floor($number * $power) / $power; 
		} else {
			return ceil($number * $power) / $power; 
		}
	}
}