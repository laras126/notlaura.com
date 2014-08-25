<?php


// Helpful var
$img_path = get_template_directory_uri() . '/assets/images/build/';

// Clean up WP post classes because they drive me crazy
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

function cta_shortcode( $content = null ) {
	return '
		<div class="cta-footer">
	        <hr class="fig-large">
	        <h3 class="h1 page-title">Cool, right?</h3>
	        <a class="dark-button" href="<?php echo site_url(\'/contact\', \'http\'); ?>">Go fish.</a>
	        <p>(i.e. go to my contact page)</p>
	    </div>';
}
add_shortcode( 'cta', 'cta_shortcode' );

?>