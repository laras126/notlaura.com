<?php 

/* 
 * 
 * Taxonomies
 *
 */

// Same as with Custom Types, you only need the arguments and register_taxonomy function here. They are hooked into WordPress in functions.php.

// Project Types

	$labels = array(
		'name'                       => _x( 'Project Types', 'Taxonomy General Name', 'notlaura' ),
		'singular_name'              => _x( 'Project Type', 'Taxonomy Singular Name', 'notlaura' ),
		'menu_name'                  => __( 'Project Type', 'notlaura' ),
		'all_items'                  => __( 'All Types', 'notlaura' ),
		'parent_item'                => __( 'Parent Type', 'notlaura' ),
		'parent_item_colon'          => __( 'Parent Type:', 'notlaura' ),
		'new_item_name'              => __( 'New Project Type', 'notlaura' ),
		'add_new_item'               => __( 'Add Project Type', 'notlaura' ),
		'edit_item'                  => __( 'Edit Type', 'notlaura' ),
		'update_item'                => __( 'Update Type', 'notlaura' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'notlaura' ),
		'search_items'               => __( 'Search Items', 'notlaura' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'notlaura' ),
		'choose_from_most_used'      => __( 'Choose from the most used items', 'notlaura' ),
		'not_found'                  => __( 'Not Found', 'notlaura' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'project-type', array( 'project' ), $args );


 ?>