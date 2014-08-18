<?php

/*
Template Name: About
*/

?>

<?php get_header(); ?>

            <div id="content">

                <div id="inner-content">

                    <div id="main" class="clearfix wrap" role="main">

                        <article id="post-<?php the_ID(); ?>" <?php post_class('page-about'); ?> role="article">

                            <header class="article-header">
                                <h1 class="page-title">My name is <span class="special">Lara</span>.</h1>
                                <p class="page-desc">...not <em>Laura</em>, though that's a nice name too.</p>
                            </header>

                            <section class="entry-content fadein">

                                <figure class="fig-large">
                                    <img src="http://nl.local/wp-content/themes/notlaura/library/images/build/site/letters.jpg" alt="Wonderful photo of me" />
                                    <p></p><figcaption>See that? No "U".</figcaption>
                                </figure>

                                <p class="lead">I am a freelance <strong>teacher</strong>, designer, and developer based in <strong>New York City</strong>. I'd love to make a website for you, but I'd rather make it <em>with</em> you.</p>

                                <h3>What's with the fishing?</h3>
                                
                                <p><strong>I love teaching</strong>, and I firmly believe that the best way to learn is either 1-on-1 or in a small group. Larger classes can be great, but the variation in ability among students can hamper the experience for everyone (including your teacher!).</p>

                                <p>Working with me is different. During our sessions you will not be listening to me read through slides, and you will not be memorizing HTML tags. Instead, we will code side-by-side, learning the architecture of problem solving and workflow - the stuff that isn't so easy to get from tutorials.</p>

                                <p>That's what I mean by fishing.</p>

                                <h3>Experience</h3>

                                <h5>Teaching</h5>
                                <p>In addition to my independent work with clients, I teach with various organizations including:</p>

                                <ul>
                                     <li><strong>Pratt Insitute of Design:</strong> Coding II and Prototyping in Code (upcoming)</li>
                                     <li><strong>Decoded:</strong> <a href="http://decoded.co/us/code-in-a-day/" target="blank">Code_in a Day</a> facilitator (current)</li>
                                     <li><strong>General Assembly:</strong> <a href="https://generalassemb.ly/education/front-end-web-development" target="blank">Front-end Web Development</a></li>
                                     <li><strong>Noble Desktop:</strong> WordPress.org</li>
                                     <li><strong>Saxifrage School:</strong> Intro to Web Development (Pittsburgh)</li>
                                 </ul>

                                <p>Additionally, I have taught workshops through <a href="http://simplelabs.co" target="blank">Simple Labs</a> and the <a href="http://gpac.org" target="blank">Greater Pittsburgh Arts Council</a> and have mentored teens through the <a href="http://www.carnegiesciencecenter.org/" target="blank">Carnegie Science Center</a> and the <a href="inths.org">International High School at Lafayette</a> in Brooklyn.</p>

                                <h5>Speaking</h5>
                                <p>Over the past few months I've developed a love for speaking as well as teaching. A few highlights:</p>
                                <ul>
                                    <li><strong>WordCamp Montreal:</strong> <a href="2014.montreal.wordcamp.org/session/sassy-wordpress/" target="blank">Sassy WordPress</a> (upcoming)</li>
                                    <li><strong>WordCamp NYC:</strong> <a href="http://2014.nyc.wordcamp.org/session/freelancing-real-talk/" target="blank">Freelancing, Real Talk</a></li>
                                    <li><strong>Smashing Conf NYC</strong> Jam Session: PHP for Front-end Developers</li>
                                    <li><strong>WPNYC Meetup:</strong> Child Themes (<a href="http://wpnyc.org/presenter/lara-schenck/" target="blank">video here</a>)</li>
                                    <li><strong>Per Scholas:</strong> Freelancing...FTW? (<a href="http://notlaura.com/talk-freelancing-per-scholas/" target="blank">video here</a>)</li>
                                </ul>

                                <h5>Education</h5>
                                <p>My background is in Fine Arts. I spent my first two years of college studying Printmaking at the University of Colorado at Boulder and finished up at <strong>Tufts University</strong>’s School of the Museum of Fine Arts Boston (SMFA) and received my <strong>B.F.A.</strong> in 2011.</p>

                                <h3>Let's talk</h3>
                                <p>Finally, I love coffee and I love meeting people. Feel free to <a href="<?php echo site_url('/contact', 'http'); ?>">get in touch</a> - I'd love to hear from you.</p>
                            </section>

                            <footer class="article-footer text-center fadein">
                                <hr />
                                <a class="dark-button" href="<?php echo site_url('/contact', 'http'); ?>">Go fish.</a>
                                <p>(i.e. go to my contact page)</p>
                            </footer>

                        </article>

                    </div>

                </div>

            </div>

<?php get_footer(); ?>