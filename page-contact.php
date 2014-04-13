<?php

/*
Template Name: Contact page
*/

$icon_path = get_stylesheet_directory_uri().'/library/images/icons/';
$img_path = get_stylesheet_directory_uri().'/library/images/';

?>

<?php get_header(); ?>
            
            <div id="content">
            
                <div id="inner-content">
            
                    <div id="main" class="clearfix wrap" role="main">
                        
                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class('page-contact'); ?> role="article">

                                <header class="article-header">
                                    <h1 class="page-title"><?php the_title(); ?></h1>
                                    <p class="page-desc">Let's chat!</p>
                                </header>
                                
                                <hr class="page-divider" />

                                <section class="entry-content fadein">
                                    <?php the_content(); ?>
                                </section>
                                
                            </article>
                        <?php endwhile; else : ?>

                                <?php get_template_part('incl/post', 'notfound'); ?>

                        <?php endif; ?>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>