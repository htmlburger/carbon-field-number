<?php
/*
Plugin Name: Carbon Field: FIELD_NAME
Description: Extends base Carbon fields with a FIELD_NAME field. 
Version: 1.0.0
*/

/**
 * Set text domain
 * @see https://codex.wordpress.org/Function_Reference/load_plugin_textdomain
 */
load_plugin_textdomain('carbon-field-number', false, dirname( plugin_basename(__FILE__) ) . '/languages/'); 

/**
 * Hook field initialization
 */
add_action('after_setup_theme', 'crb_init_carbon_field_number', 15);
function crb_init_carbon_field_number() {
	if ( class_exists('Carbon_Field') ) {
		include_once dirname(__FILE__) . '/Carbon_Field_Number.php';
	}
}
