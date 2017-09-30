<?php

/**
 * Template Name: Story Layout
 */

function nl_story_scripts() {
	wp_enqueue_script( 'gsap-js', '//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js', null, '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'nl_story_scripts' );

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render('page-story.twig', $context);
