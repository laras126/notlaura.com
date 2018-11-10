<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$post = Timber::query_post();
$series = get_the_terms($post, 'series');

$context = Timber::get_context();
$context['post'] = $post;
$context['categories'] = Timber::get_terms('category', array('parent' => 0));

if( is_array( $series ) ) {
	$series_args = array(
		'post_type' => 'post',
		'numberposts' => -1,
		'orderby'     => 'date',
		'order'       => 'ASC',
		'tax_query' => array(
			array(
				'taxonomy' => 'series',
				'field' => 'id',
				'terms' => $series[0]->term_id
			)
		)
	);
	$context['series'] = $series[0];
	$context['series_posts'] = Timber::get_posts($series_args);
}

if (post_password_required($post->ID)){
	Timber::render('single-password.twig', $context);
} else {
	Timber::render(array('single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig'), $context);
}


