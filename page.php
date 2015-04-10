<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

// Get sibling pages
// http://pastebin.com/SUCUP6qu
$pagelist = get_pages('sort_column=menu_order&amp;sort_order=asc&amp;child_of='.$post->post_parent);
$pages = array();
 
foreach ($pagelist as $page) {
       $pages[] += $page->ID;
}

$current = array_search($post->ID, $pages);


$context = Timber::get_context();
$post = new TimberPost();

$context['post'] = $post;

$context['prev'] = new TimberPost($pages[$current-1]);
$context['next'] = new TimberPost($pages[$current+1]);

Timber::render(array('page-' . $post->post_name . '.twig', 'page.twig'), $context);
