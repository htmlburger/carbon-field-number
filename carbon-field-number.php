<?php
$dir = __DIR__ . '/languages/';
$domain = 'carbon-field-number';
$locale = get_locale();
$path = $dir . $domain . '-' . $locale . '.mo';
load_textdomain( 'carbon-field-number', $path );
