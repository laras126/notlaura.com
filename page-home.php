<?php get_header(); ?>
<div id="content">

    <div id="inner-content" class="clearfix">

            <div id="main" class="clearfix" role="main">
                
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
                
                    <header class="article-header">
                        <div class="wrap">
                            <h1 class="page-title">I teach <span class="special">fishing</span>.</h2>
                            <p>Uhh..what?</p>
                            <img id="meFish" class="header-img" src="<?php echo $img_path ?>/site/svg/me-fish.svg">
                            <p class="subsection-tagline">You know that expression:</p>
                            <blockquote class="callout-quote">Give a man <span class="special">(or woman)</span> a fish and feed him <span class="special">(or her)</span> for a day, teach a man <span class="special">(or woman)</span> to fish and feed him <span class="special">(or her)</span> for a lifetime.<br />
                            </blockquote>

                            <p class="subsection-tagline">Like that, except <strong>HTML</strong>, <strong>CSS</strong>, <strong>WordPress</strong>, and whatnot.</p>
                            <p class="subsection-tagline"> Let me break it down:</p>
                        </div>
                    </header>
                    
                    <section class="entry-content">
                    
                        <div class="wrap clearfix">
                            <div class="subsection wrap">
                                <div class="subsection-title"><span>Option 1</span></div>
                                <img id="youFish" src="<?php echo $img_path; ?>site/svg/you-fish.svg">
                                <h2 class="subsection-tagline">I teach you to fish</h2>
                                <p class="summary">Want to learn the ins and outs of WordPress? Looking to sharpen your CSS chops? Let's sit down 1-on-1 and I'll teach you. We move at your pace and cover what you want to know.</p>
                            </div>

                            <div class="subsection">
                                <div class="subsection-title"><span>Option 2</span></div>
                                <img id="deliverFish" src="<?php echo $img_path; ?>site/svg/deliver-fish.svg">
                                <h2 class="subsection-tagline">I fish for you</h2>
                                <p class="summary">Oh yeah, I make websites! Home-baked WordPress themes and front-end are my speciality, but I wear many hats. See my portfolio for more.</p>
                            </div>

                            <div class="subsection">
                                <p class="subsection-title"><span>Option 3</span></p>
                                <img id="weFish" src="<?php echo $img_path; ?>site/svg/we-fish.svg">
                                <h2 class="subsection-tagline">We fish together</h2>
                                <p class="summary">Have a project you've been meaning to start or finish, but got stuck along the way? Let's work on it together in whatever way works best for you, whether it be private lessons or a more hands-off, directional role.</p> 
                            </div>
                        </div>
                    </section>

                    <footer class="article-footer">
                    </footer>

            </article>
           
        </div>

    </div>

</div>

<?php get_footer(); ?>
