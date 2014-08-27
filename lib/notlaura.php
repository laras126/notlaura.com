<?php


// Helpful var
$img_path = get_template_directory_uri() . '/assets/images/build/';
$img_path_dev = get_template_directory_uri() . '/assets/images/';

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

function cta_shortcode( $atts, $content = null ) {
	extract(shortcode_atts(array(
		'text' => 'Cool, right?',
   ), $atts));
	// TODO: remove entry-content from that - it's a quick fix for some formatting weirdness.
	return '
		<div class="cta-footer">
	        <h3 class="h1 page-title">'. esc_attr($text) .'</h3>
	        <a class="dark-button" href="<?php echo site_url(\'/contact\', \'http\'); ?>">Go fish.</a>
	        <p>(i.e. go to my contact page)</p>
	    </div>';
}
add_shortcode( 'cta', 'cta_shortcode' );


// ----
// Custom Fields
// ----
// Only a tagline on pages

if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_tagline',
		'title' => 'Tagline',
		'fields' => array (
			array (
				'key' => 'field_53c81054c7365',
				'label' => 'Page Description',
				'name' => 'page_desc',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'acf_after_title',
			'layout' => 'default',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}



?>