<?php

	$footer_args = array(
		'id'            => 'footer_widgets',
		'name'          => __( 'Footer Widgets', 'notlaura' ),
		'description'   => __( 'Widgets in the footer. No more than 3.', 'notlaura' ),
		'class'         => 'widgets-footer',
		'before_widget' => '<li class="widget">',
		'after_widget'  => '</li>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>'
	);
	$blog_args = array(
		'id'            => 'blog_widgets',
		'name'          => __( 'Blog Sidebar', 'notlaura' ),
		'description'   => __( 'Widgets in the blog sidebar.', 'notlaura' ),
		'class'         => 'widgets-footer',
		'before_widget' => '<li class="widget">',
		'after_widget'  => '</li>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>'
	);

	register_sidebar( $blog_args );
	register_sidebar( $footer_args );

 ?>