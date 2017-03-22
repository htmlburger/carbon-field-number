<?php

namespace Carbon_Field_Number;

use Carbon_Fields\Field\Field;

class Number_Field extends Field {

	/**
	 * Minimum value
	 * 
	 * @var null|float
	 */
	protected $min = null;

	/**
	 * Maximum value
	 * 
	 * @var null|float
	 */
	protected $max = null;

	/**
	 * Step/interval between allowed values
	 * 
	 * @var null|float
	 */
	protected $step = null;

	/**
	 * Load the field value from an input array based on it's name
	 *
	 * @param array $input Array of field names and values.
	 */
	public function set_value_from_input( $input ) {
		parent::set_value_from_input( $input );
		
		$value = $this->get_value();
		if ( $value === '' ) {
			return;
		}

		$value = floatval( $value );
		
		if ( $this->min !== null ) {
			$value = max( $value, $this->min );
		}

		if ( $this->max !== null ) {
			$value = min( $value, $this->max );
		}

		if ( $this->step !== null ) {
			$step_base = ( $this->min !== null ) ? $this->min : 0;
			$is_valid_step_value = ( $value - $step_base ) % $this->step === 0;
			if ( ! $is_valid_step_value ) {
				$value = $step_base; // value is not valid - reset it to a base value
			}
		}

		$this->set_value( $value );
	}

	/**
	 * Enqueue admin scripts.
	 * Called once per field type.
	 */
	static function admin_enqueue_scripts() {
		$template_dir = get_template_directory_uri();

		// Get the current url for the carbon-fields-number, regardless of the location
		$template_dir .= str_replace( wp_normalize_path( get_template_directory() ), '', wp_normalize_path( __DIR__ ) );

		# Enqueue JS
		crb_enqueue_script( 'carbon-field-Number', $template_dir . '/js/bundle.js', array( 'carbon-bootstrap' ) );

		# Enqueue CSS
		crb_enqueue_style( 'carbon-field-Number', $template_dir . '/css/field.css' );
	}

	/**
	 * Set field minimum value. Default: null
	 * 
	 * @param null|float $min
	 * @return Field $this
	 */
	function set_min( $min ) {
		$this->min = floatval( $min );
		return $this;
	}

	/**
	 * Set field maximum value. Default: null
	 * 
	 * @param null|float $max
	 * @return Field $this
	 */
	function set_max( $max ) {
		$this->max = floatval( $max );
		return $this;
	}

	/**
	 * Set field step value. Default: null
	 * 
	 * @param null|float $step
	 * @return Field $this
	 */
	function set_step( $step ) {
		$this->step = floatval( $step );
		return $this;
	}
}
