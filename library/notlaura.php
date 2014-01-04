<?php

$img_path = get_template_directory_uri() . '/library/images/';

function jrh_post_names($classes) {
	$classes = array_diff($classes, array("tag-link", "tag-links"));
	return $classes;
}
add_filter('post_class','jrh_post_names');


?>