<?php

/*-------------------------------------------*/
/*  Load modules
/*-------------------------------------------*/
if ( ! class_exists( 'VK_Custom_Field_Builder' ) )
{
	require_once( 'custom-field-builder/custom-field-builder.php' );
	
	global $custom_field_builder_dir;
	$custom_field_builder_dir = get_template_directory_uri().'/inc/custom-field-builder/';

}
