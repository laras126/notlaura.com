<?php get_header(); ?>
<div id="content">

    <div id="inner-content" class="clearfix">

            <div id="main" class="clearfix text-center fadein" role="main">
                
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
                
                    <header class="article-header">
                        <div class="wrap">
                            <h1 class="page-title">I teach <span class="special">fishing</span>.</h1>
                            <p>Uhh..what?</p>
                            <img id="meFish" class="header-img" src="<?php echo $img_path ?>/site/svg/me-fish.svg">
                            <p class="subsection-tagline">You know that expression:</p>
                            <blockquote class="callout-quote">Give a man <span class="special">(or woman)</span> a fish and feed him <span class="special">(or her)</span> for a day, teach a man <span class="special">(or woman)</span> to fish and feed him <span class="special">(or her)</span> for a lifetime.<br />
                            </blockquote>
                            <p class="subsection-tagline">Like that, except <strong>HTML</strong>, <strong>CSS</strong>, <strong>WordPress</strong>, etc.</p>
                            <p class="subsection-tagline"> Let's break it down:</p>
                        </div>
                    </header>
                    
                    <section class="entry-content">
                    
                        <div class="wrap clearfix">
                            <div class="subsection wrap">
                                <div class="subsection-title">Option 1</div>
                                <img id="youFish" src="<?php echo $img_path; ?>site/svg/you-fish.svg" alt="I teach you to fish." />
                                <h2 class="subsection-tagline">I teach you to fish</h2>
                                <p class="summary">Want to learn the ins and outs of WordPress? Looking to sharpen your CSS chops? Let's sit down 1-on-1 and I'll teach you. We move at your pace and cover what you want to know.</p>
                            </div>

                            <div class="subsection">
                                <div class="subsection-title">Option 2</div>
                                <img id="deliverFish" src="<?php echo $img_path; ?>site/svg/deliver-fish.svg" alt="Me fishing for you." />
                                <h2 class="subsection-tagline">I fish for you</h2>
                                <p class="summary">Oh yeah, I make websites! Home-baked front-end and WordPress themes are my speciality, but I wear many hats. See <a href="<?php echo site_url("/portfolio/", "http"); ?>">my portfolio</a> for more.</p>
                            </div>

                            <div class="subsection">
                                <p class="subsection-title">Option 3</p>
                                <img src="<?php echo $img_path; ?>site/svg/we-fish.svg" alt="Fishing together!" />
                                <h2 class="subsection-tagline">We fish together</h2>
                                <p class="summary">Have a project you've been meaning to start or finish, but got stuck along the way? Let's work on it together however works best for you, whether it be private lessons or a more hands-off, directional role.</p> 
                            </div>

                        </div>
                    </section>

                    <footer class="article-footer wrap text-center">
                        <hr />
                        <h3 class="h1 text-center">Ok, sold?</h1>
                        <p class="h3"><a class="dark-button" href="<?php echo site_url('/contact', 'http'); ?>">Go fish.</a></p>
                        <p>(i.e. go to my contact page)</p>
                    </footer>

            </article>
           
        </div>

    </div>

</div>

<?php get_footer(); ?>
