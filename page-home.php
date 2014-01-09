<?php get_header(); ?>
<div id="content">

    <div id="inner-content" class="clearfix">

            <div id="main" class="clearfix" role="main">
                
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
                
                    <header class="article-header">
                        <div class="wrap">
                            <h1 class="page-title">I teach <strike class="special">fishing</strike>.</h2>
                            <p>Oh, I mean web design and front-end dev.</p>
                            <img class="subsection-img" src="<?php echo $img_path ?>/site/svg/me-fish.svg">
                            <p>You know that expression:</p>
                            <blockquote class="callout-quote">Give a man a fish and feed him for a day, teach a man to fish and feed him for a lifetime.<br />
                            <!-- <span class="bq-source">Chinese Proverb (<a href="http://www.quotationspage.com/quote/2279.html">apparently</a>)</span> -->
                            </blockquote>
                            <p class="callout">Like that, except WordPress, HTML, CSS, and whatnot.</p>
                            <p>Let's break it down:</p>
                        </div>
                    </header>
                    
                    <section class="entry-content">
                        <!-- <div class=""> -->
                            <div class="wrap clearfix">
                                <div class="subsection wrap">
                                    <div class="subsection-title"><span>Option 1</span></div>
                                    <img src="<?php echo $img_path; ?>site/svg/you-fish.svg">
                                    <h2 class="subsection-tagline">I teach you to fish</h2>
                                    <p class="summary">What about the web do you want to learn? Let's sit down 1-on-1 and I'll teach it to you. We move at your pace and cover what you want to know.</p>
                                </div>

                                <div class="subsection">
                                    <div class="subsection-title"><span>Option 2</span></div>
                                    <img src="<?php echo $img_path; ?>site/svg/deliver-fish.svg">
                                    <h2 class="subsection-tagline">I fish for you</h2>
                                    <p class="summary">Oh yeah, I make websites! Custom WordPress themes are my specialty, but I wear many hats. Take a look at my portfolio for some examples.</p>
                                </div>

                                <div class="subsection">
                                    <p class="subsection-title"><span>Option 3</span></p>
                                    <img class="subsection-img" src="<?php echo $img_path; ?>site/svg/we-fish.svg">
                                    <h2 class="subsection-tagline">We fish together</h2>
                                    <p class="summary">Have a project you've been meaning to start or finish, but got stuck along the way? Let's work on it together.</p> 
                                </div>
                            </div>
                        <!-- </div> -->
                    </section>

                    <footer class="article-footer">
                    </footer>

            </article>
           
        </div>

    </div>

</div>

<?php get_footer(); ?>
