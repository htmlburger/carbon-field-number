<?php
define( 'Carbon_Field_Number\\DIR', __DIR__ );

\Carbon_Fields\Carbon_Fields::on_boot( function() {
	$dir = Carbon_Field_Number\DIR . '/languages/';
	$locale = get_locale();
	$path = $dir . $locale . '.mo';
	load_textdomain( 'carbon-field-number', $path );
} );
