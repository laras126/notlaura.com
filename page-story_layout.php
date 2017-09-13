<?php

/**
 * Template Name: Story Layout
 */

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

Timber::render('page-story.twig', $context);
