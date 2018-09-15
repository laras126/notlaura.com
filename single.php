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

$series = Timber::get_terms('series');
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

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['categories'] = Timber::get_terms('category', array('parent' => 0));
$context['wp_title'] .= ' - ' . $post->title();

if( count($series) > 0 ) {
	$context['series_title'] = $series[0]->name;
	$context['series_posts'] = Timber::get_posts($series_args);
}

if (post_password_required($post->ID)){
	Timber::render('single-password.twig', $context);
} else {
	Timber::render(array('single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig'), $context);
}


