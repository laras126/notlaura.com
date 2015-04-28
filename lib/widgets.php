<?php 

	$args = array(
		'id'            => 'footer_widgets',
		'name'          => __( 'Footer Widgets', 'notlaura' ),
		'description'   => __( 'Widgets in the footer. No more than 3.', 'mtnmeister' ),
		'class'         => 'widgets-footer',
		'before_widget' => '<li class="widget">',
		'after_widget'  => '</li>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>'
	);
	register_sidebar( $args );

 ?>