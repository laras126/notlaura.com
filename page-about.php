<?php

/*
About page with custom sidebar
*/

$icon_path = get_stylesheet_directory_uri().'/library/images/icons/';
$img_path = get_stylesheet_directory_uri().'/library/images/';

?>

<?php get_header(); ?>
            
            <div id="content" class="about">
            
                <div id="inner-content" class="clearfix">
            
                    <div id="main" class="clearfix wrap" role="main">
                        
                        <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix, about-content'); ?> role="article">

                            <section class="">
                                    
                                <header class="article-header">
                                    <h1 class="name">My name is <span class="special">Lara</span>.</h1>
                                </header>
                                <p class="h4">...not <em>Laura</em>, though that's a nice name too.</p>

                                <p>I am a freelance web designer and educator based in <strong>Brooklyn, NY</strong>. I'd love to make a website for you, but I'd love more to make it <em>with</em> you.</p>
                                
                                <figure class="fig-large">
                                    <img src="<?php echo $img_path; ?>site/letters.jpg" alt="Wonderful photo of me" />
                                    <figcaption>See that? No "U".</figcaption>
                                </figure>
                                
                                <h3>What can I do?</h3>

                                <p>I wear many hats. I have worked extensively in custom WordPress development and HTML/CSS/jQuery development for web applications. I value semantic code and do my best to utlilize upcoming web technologies while continuing to support web standards.</p>

                                <p>In addition to web work, I am experience in graphic design and branding, illustration, and iOS UI/UX design. Take a look at my portfolio to see more.</p>

                                <h3>Teaching philosophy</h3>

                                <h5>Learn what you <strong>need to know</strong></h5>
                                <p>It's impossible to learn every nuance of a technology. I believe it is most effective to learn new skills because you need them, not because you are supposed to know them.</p>

                                <h5>Learn to <strong>teach yourself</strong></h5>
                                <p>Sure, one usually takes a class to learn from someone else. But like I said, it's impossible to know everything. I certainly don't! My ultimate goal in teaching is for you to leave with the mindset of "I don't know how to do this, but I can figure it out."</p>

                                
                                <h3>Experience</h3>
                                                                
                                <p>In addition to my work with individual clients, I currently instruct the <a href="https://generalassemb.ly/education/front-end-web-development/new-york-city" target="blank">Front-end Web Development course</a> at General Assembly in NYC, and last summer co-instructed Intro to Web Development at the <a href="http://saxifrageschool.org" target="blank">Saxifrage School</a> in Pittsburgh. I have taught workshops for both teens and adults through <a href="http://simplelabs.co" target="blank">Simple Labs</a>, the <a href="http://gpac.org" target="blank">Greater Pittsburgh Arts Council</a>, and the Girls, Math & Science Partnership through the Carnegie Science Center.</p>

                                
                                <h3>More About Me</h3>

                                <p>I have a background in Fine Arts, and spent my first two years of college studying Printmaking at the University of Colorado at Boulder. I had too much fun there, so finished up at Tufts University’s</strong> School of the Museum of Fine Arts Boston (SMFA) and received my B.F.A. in 2011.</p>

                                <p>In addition to all things web, I am passionate about games and learning. I work part-time as a Design Assistant for the <a href="http://instituteofplay.org" target="blank">Institute of Play</a>, an organization that is reinventing education through game-like learning. At some point I plan to go back to school for instructional design or a similar field - still figuring that one out.</p>

                            </section>
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>