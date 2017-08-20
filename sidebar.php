<?php
/**
 * The Template for displaying all single posts
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 */


$context = array();
$context['blog_widgets'] = Timber::get_widgets('blog_widgets');

Timber::render('sidebar.twig', $context);