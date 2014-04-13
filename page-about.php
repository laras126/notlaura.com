<?php

/*
About page, hi!
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
                                    <img src="<?php echo $img_path; ?>site/letters.jpg" alt="Wonderful photo of me" />
                                    <figcaption>See that? No "U".</figcaption>
                                </figure>

                                <p class="summary">I am a freelance web designer, developer, and instructor based in <strong>Brooklyn, NY</strong>. I'd love to make a website for you, but I'd also love to make it <em>with</em> you.</p>
                                
                                <h3>What can I do?</h3>

                                <p>I work extensively in <strong>custom WordPress development</strong> and <strong>front-end</strong> design and development for web applications. I provide <strong>private instruction</strong> and consultation for individuals and small groups, as well as illustration, graphic design and branding services.</p>
                                <p>I believe in the importance of <strong>the mobile web</strong>, clean and <strong>semantic code</strong>, and do my best to utlilize upcoming web technologies while continuing to support web standards.</p>

                                <h3>Experience</h3>
                                                                
                                <h5>Teaching</h5>
                                <p>In addition to my work with individual clients, I currently teach <a href="https://generalassemb.ly/education/front-end-web-development/new-york-city" target="blank"><strong>Front-end Web Development</strong></a> at <strong>General Assembly</strong> in NYC, and last summer co-instructed the 12 week Intro to Web Development course through the <a href="http://saxifrageschool.org" target="blank">Saxifrage School</a> in Pittsburgh. I have taught workshops for creatives through <a href="http://simplelabs.co" target="blank">Simple Labs</a> and the <a href="http://gpac.org" target="blank">Greater Pittsburgh Arts Council</a> and have mentored teens through the <a href="http://www.carnegiesciencecenter.org/" target="blank">Carnegie Science Center</a> and the <a href="">International High School at Lafeyette</a> in Brooklyn.</p>

                                <h5>Education</h5>
                                <p>My background is in Fine Arts. I spent my first two years of college studying Printmaking at the University of Colorado at Boulder and finished up at <strong>Tufts University</strong>’s School of the Museum of Fine Arts Boston (SMFA) and received my <strong>B.F.A.</strong> in 2011.</p>

                                <h3>More About Me</h3>
                                <p>In addition to all things web, I am passionate about <strong>games and learning</strong>. I work part-time as a Design Assistant for the <a href="http://instituteofplay.org" target="blank"><strong>Institute of Play</strong></a> at Quest to Learn, a public middle/high school that is reinventing education through game-like learning. At some point I plan to go back to school for instructional design or a similar field - still figuring that one out.</p>

                                
                                <h3>Let's talk</h3>
                                <p>Finally, I love coffee and I love meeting people. Whether or not you have a project in mind, feel free to get in touch - I'd love to hear from you.</p>
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