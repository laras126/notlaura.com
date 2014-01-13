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
                                <p class="page-desc">I'd love to hear from you.</p>
                            </header>
                            
                            <hr class="page-divider" />

                            <section class="entry-content">

                                <h3>I love people and I love coffee</h3>
                                <p>...so whether or not you have a project in mind, feel free to get in touch. I'm always looking to connect with people in the web world.</p>

                                <h3>Do you like forms?</h3>
                                <p>Here ya go. This goes straight to my inbox, so I'll get back to you ASAP.</p>
                                <?php 
                                // global $ninja_forms_processing;
                                //if( function_exists( 'ninja_forms_display_form' ) ){ ninja_forms_display_form( 3 ); } ?>
                                
                                <h3>Do you hate forms?</h3>
                                <p>I get that. So, fellow old fashioned folk, send your message this way:</p>
                                <p class="subsection-tagline"><a href="mailto:lara@notlaura.com">lara<span class="special-dark"> at </span>notlaura.com</a></p>

                            </section>
                            
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>