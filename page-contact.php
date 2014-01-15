    <?php

/*
Contact page, hi!
*/

$icon_path = get_stylesheet_directory_uri().'/library/images/icons/';
$img_path = get_stylesheet_directory_uri().'/library/images/';

?>

<?php get_header(); ?>
            
            <div id="content">
            
                <div id="inner-content">
            
                    <div id="main" class="clearfix wrap" role="main">
                        
                        <article id="post-<?php the_ID(); ?>" <?php post_class('page-contact'); ?> role="article">

                            <header class="article-header">
                                <h1 class="page-title"><?php the_title(); ?></h1>
                                <p class="page-desc">Let's chat!</p>
                            </header>
                            
                            <hr class="page-divider" />

                            <section class="entry-content fadein">
                                <h5>Shoot an email to:</h5>
                                <p class="subsection-tagline"><a href="mailto:lara@notlaura.com">lara<span class="special-dark"> at </span>notlaura.com</a></p>
                                <p>...or fill out my form and I'll get back to you ASAP.</p>
                                <div class="clearfix">
                                    <?php 
                                        if( function_exists( 'ninja_forms_display_form' ) ){
                                             ninja_forms_display_form( 1 ); 
                                    } ?>
                                </div>
                                
                            </section>
                            
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>