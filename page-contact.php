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
                                <h1 class="page-title">Connect</h1>
                                <p class="text-center">I'd love to hear from you.</p>
                            </header>

                            <section class="entry-content">
                                
                                <h3>Seriously, I really like meeting people!</h3>
                                <p>And I love coffee, so whether or not you have a project in mind, feel free to reach out. I'm still new to NYC and always looking to connect with people in the web world.</p>

                                <h3>Wait, where's your fancy form?</h3>
                                <p>Eh, I kinda hate those. You are contacting a real person, and it should feel like it! I'll get back to you ASAP and we'll chat.</p>

                                <p class="h1"><a href="mailto:lara@notlaura.com">lara<span class="special-dark">@</span>notlaura.com</a></p>

                            </section>
                            
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>