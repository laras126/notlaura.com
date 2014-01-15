<?php

/*
About page, hi!
*/

$icon_path = get_stylesheet_directory_uri().'/library/images/icons/';
$img_path = get_stylesheet_directory_uri().'/library/images/';

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

                                <p>I work extensively in <strong>custom WordPress development</strong> and <strong>front-end design</strong> for web applications. I provide private and small group instruction and consultation, as well as graphic design and branding services.</p>

                                <p>I believe in the importance of <strong>the mobile web</strong>, clean and <strong>semantic code</strong>, and do my best to utlilize upcoming web technologies while continuing to support web standards.</p>

                                <h3>Experience</h3>
                                                                
                                <p>In addition to my work with individual clients, I currently teach <a href="https://generalassemb.ly/education/front-end-web-development/new-york-city" target="blank"><strong>Front-end Web Development</strong></a> at <strong>General Assembly</strong> in NYC. Past teaching endeavors include:</p>
                                <ul>
                                     <li>Intro to Web Development, <a href="http://saxifrageschool.org" target="blank">Saxifrage School</a> in Pittsburgh</li>
                                     <li>Website Bootcamp for Creative Professionals, <a href="http://simplelabs.co" target="blank">Simple Labs</a></li>
                                     <li>WordPress for Fine Artists, <a href="http://gpac.org" target="blank">Greater Pittsburgh Arts Council</a> </li>
                                     <li>Career mentorship for teens, <a href="http://www.carnegiesciencecenter.org/" target="blank">Carnegie Science Center</a> and the <a href="">International High School at Lafeyette</a> in Brooklyn</li>
                                 </ul>
                            

                                <h3>Teaching philosophy</h3>
                                
                                <p>As much as I love building websites, I equally love sharing what I know. I've got a few strong-held values in my teaching:</p>
                                
                                <div>

                                    <h5>Learn what you <strong>need to know</strong></h5>
                                    <p>It's impossible to learn <em>every</em> nuance of a technology. I believe it is most effective to learn new skills as you need them, not because you think you should know them.</p>

                                    <h5>Learn to <strong>teach yourself</strong></h5>
                                    <p>My ultimate goal in teaching is for you to leave with the ability to continue learning, and to approach challenges with the mindset <em>"..if I don't know how to do this, I can figure it out."</em></p>

                                    <h5><strong>Confusion</strong> is the goal</h5>
                                    <p>To truly internalize a concept, you need experience and break through the many frustrating moments of confusion on your own. My goal to set up those moments for you, and provide guidance along the way.</p>
                                
                                </div>

                                <h3>More About Me</h3>

                                <p>In addition to all things web, I am passionate about games and learning. I work part-time as a Design Assistant for the <a href="http://instituteofplay.org" target="blank"><strong>Institute of Play</strong></a> at Quest to Learn, a public middle/high school that is reinventing education through game-like learning. At some point I plan to go back to school for instructional design or a similar field - still figuring that one out.</p>

                                <p>Finally, my background is in Fine Arts. I spent my first two years of college studying Printmaking at the University of Colorado at Boulder and finished up at Tufts University’s School of the Museum of Fine Arts Boston (SMFA) and received my <strong>B.F.A.</strong> in 2011.</p>
                                

                                <h3>Let's talk</h3>
                                <p>Finally, I love coffee and I love meeting people. Whether or not you have a project in mind, feel free to get in touch - I'd love to hear from you.</p>
                            </section>

                            <footer class="article-footer text-center fadein">
                                <hr />
                                <p class="h3"><a class="dark-button" href="<?php echo site_url('/contact', 'http'); ?>">Go fish.</a></p>
                                <p>(i.e. go to my contact page)</p>
                            </footer>
                        
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>