<?php get_header(); ?>
    <main class="site-content" role="main">
        
        <!-- <article id="post-<?php the_ID(); ?>" <?php post_class('entry-'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting"> -->

            <header class="article-header">
                <div class="contain animated fadeInDown">
                    <h1 class="page-title">I teach <span class="special">fishing</span>.</h1>
                    <p>Uhh...what?</p>
                    <img id="meFish" class="splash-img" src="<?php echo $img_path ?>site/svg/me-fish.min.svg">
                    <div class="entry-content">
                        <p class="summary">You know that expression:</p>
                        <blockquote class="callout-quote">Give a man <span class="special">(or woman)</span> a fish and feed him <span class="special">(or her)</span> for a day, teach a man <span class="special">(or woman)</span> to fish and feed him <span class="special">(or her)</span> for a lifetime.<br />
                        </blockquote>
                        <p class="summary">Like that, but <strong>HTML</strong>, <strong>CSS</strong>, <strong>WordPress</strong>, etc. <br>Let's break it down:</p>
                    </div>
                </div>
            </header>
            
            <section class="contain">

                <div class="subsection">
                    <div class="subsection-title">Option 1</div>
                    <img id="youFish" src="<?php echo $img_path; ?>site/svg/you-fish.min.svg" alt="I teach you to fish.min." />
                    <h2 class="subsection-tagline">I teach you to fish</h2>
                    <div class="entry-content">
                        <p class="lead">Want to learn the ins and outs of WordPress? Looking to sharpen your CSS chops? Let's sit down 1-on-1 and I'll teach you. We move at your pace and cover what you want to know.</p>
                    </div>
                </div> <!-- /subsection -->

                <div class="subsection">
                    <div class="subsection-title">Option 2</div>
                    <img id="deliverFish" src="<?php echo $img_path; ?>site/svg/deliver-fish.min.svg" alt="Me fishing for you." />
                    <h2 class="subsection-tagline">I fish for you</h2>
                    <div class="entry-content">
                        <p class="lead">Oh yeah, I make things! Front-end design, custom WordPress themes, logos and branding are my specialty. <br>See <a href="<?php echo site_url("/portfolio/", "http"); ?>">my portfolio</a> for more.</p>    
                    </div>
                </div> <!-- /subsection -->

                <div class="subsection">
                    <p class="subsection-title">Option 3</p>
                    <img src="<?php echo $img_path; ?>site/svg/we-fish.min.svg" alt="Fishing together!" />
                    <h2 class="subsection-tagline">We fish together</h2>
                    <div class="entry-content">
                        <p class="lead">Have a project you've been meaning to start or finish, but got stuck along the way? Let's work on it together however is best for you, whether it be private lessons or a more hands-off, directional role.</p>     
                    </div>
                </div> <!-- /subsection -->

            </section>

            <?php echo do_shortcode( '[cta text="Ok, sold?"]' ); ?>
        <!-- </article> -->
    </main>

<?php get_footer(); ?>