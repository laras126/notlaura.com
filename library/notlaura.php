<?php

$img_path = get_template_directory_uri() . '/library/images/';

// function jrh_post_names($classes) {
// 	$classes = array_diff($classes, array("tag-link", "tag-links"));
// 	return $classes;
// }
// add_filter('post_class','jrh_post_names');


function nl_more_link( $more_link, $more_link_text ) {
	global $post;
	return str_replace( $more_link_text, '<div class="clearfix"><a href="'. get_permalink($post->ID) . '" title="Read '.get_the_title($post->ID).'" class="dark-button last">Read on <i class="fa fa-long-arrow-right"></a></a></div>', $more_link );
}
add_filter( 'the_content_more_link', 'nl_more_link', 10, 2 );

function simplify_post_class($classes) {
    global $post;
    
    foreach($classes as $id => $class)
        
		if( (strpos($class, "tag-") !== false) 
		||  (strpos($class, "format-") !== false)
		||  (strpos($class, "type-") !== false) 
		||  (strpos($class, "status-") !== false)
		||  (strpos($class, "post-") !== false)
		||  (strpos($class, "category-") !== false)
		||  $class == "") 
		{
            unset($classes[$id]);
        }
    
    return $classes;
}

add_filter('post_class', 'simplify_post_class');



//  Get rid of Ninja forms stylesheets

add_action( 'ninja_forms_display_css', 'deregister_ninja_styles', 100 );

function deregister_ninja_styles() {
	wp_deregister_style( 'ninja-forms-display' );
	wp_deregister_style( 'jquery-rating');
	wp_deregister_style( 'jquery-qtip');
}

// Stop adding <p>s goddammit
// http://urbangiraffe.com/plugins/disable-wpautop/

remove_filter ('the_content',  'wpautop');
remove_filter ('comment_text', 'wpautop');


?>