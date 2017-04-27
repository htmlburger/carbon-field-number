<?php
/**
 * Plugin Name: Carbon Fields: Number
 * Description: A Carbon Fields extension, that adds a number field type.
 * Version: 1.0.0
 */

define( 'Carbon_Field_Number\\DIR', __DIR__ );

/**
 * Load field localization.
 */
\Carbon_Fields\Carbon_Fields::on_boot( function() {
	$dir = __DIR__ . '/languages/';
	$locale = get_locale();
	$path = $dir . $locale . '.mo';
	load_textdomain( 'carbon-field-number', $path );
} );
