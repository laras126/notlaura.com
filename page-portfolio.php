<?php

/**
 * Template Name: Portfolio
 */

$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

$project_args = array(
				'post_type' => 'project',
				'posts_per_page' => -1
			);
$context['types'] = Timber::get_terms('project-type');
$context['sidebar'] = "stuff";
$context['projects'] = Timber::get_posts($project_args);

Timber::render(array('page-portfolio.twig', 'page.twig'), $context);
