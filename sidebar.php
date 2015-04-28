<?php
/**
 * The Template for displaying all single posts
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 */


$context = array();
$context['footer_widgets'] = Timber::get_widgets('footer_widgets');

Timber::render('partials/sidebar-footer.twig', $context);