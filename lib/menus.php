<?php 

/* 
 * 
 * Menus
 *
 */

// Again, same as with taxonomies and CPTs. You just need the arguments and register_nav_menus() function here.

$locations = array(
	'main_nav' => __( 'Primary Menu', 'mtnmeister' ),
	'footer_nav' => __( 'Footer Links', 'mtnmeister' ),
);
register_nav_menus( $locations );


 ?>

