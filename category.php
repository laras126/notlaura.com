<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package 	WordPress
 * @subpackage 	Timber
 * @since 		Timber 0.2
 */

		$templates = array('archive.twig', 'index.twig');

		$data = Timber::get_context();

		$cat = new TimberTerm();
		$data['category'] = $cat;
		$data['title'] = $cat->name;
		$data['posts'] = Timber::get_posts();

		Timber::render(array('category-' . $cat->name . '.twig', 'archive.twig', 'index.twig'), $data);

