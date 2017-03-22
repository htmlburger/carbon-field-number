<?php
define( 'Carbon_Field_Number\\DIR', __DIR__ );

$dir = __DIR__ . '/languages/';
$locale = get_locale();
$path = $dir . $locale . '.mo';
load_textdomain( 'carbon-field-number', $path );
