<?php

/*
 *
 * Custom Post Types
 *
 */

// Add your custom types here.
// http://generatewp.com is nice!

// Projects post type

	$labels = array(
		'name'                => _x( 'Projects', 'Post Type General Name', 'notlaura' ),
		'singular_name'       => _x( 'Project', 'Post Type Singular Name', 'notlaura' ),
		'menu_name'           => __( 'Projects', 'notlaura' ),
		'parent_item_colon'   => __( 'Parent Project:', 'notlaura' ),
		'all_items'           => __( 'All Projects', 'notlaura' ),
		'view_item'           => __( 'View Project', 'notlaura' ),
		'add_new_item'        => __( 'Add New Project', 'notlaura' ),
		'add_new'             => __( 'Add New', 'notlaura' ),
		'edit_item'           => __( 'Edit Project', 'notlaura' ),
		'update_item'         => __( 'Update Project', 'notlaura' ),
		'search_items'        => __( 'Search Project', 'notlaura' ),
		'not_found'           => __( 'Not found', 'notlaura' ),
		'not_found_in_trash'  => __( 'Not found in Trash', 'notlaura' ),
	);
	$rewrite = array(
		'slug'                => 'portfolio',
		'with_front'          => true,
		'pages'               => true,
		'feeds'               => true,
	);
	$args = array(
		'label'               => __( 'project', 'notlaura' ),
		'description'         => __( 'Projects for portfolio', 'notlaura' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'excerpt', 'thumbnail' ),
		'taxonomies'          => array( 'project_type', 'post_tag' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-art',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);
	register_post_type( 'project', $args );

 ?>