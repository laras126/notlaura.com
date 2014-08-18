<?php


// Helpful var
$img_path = get_template_directory_uri() . '/library/images/build/';

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


?>