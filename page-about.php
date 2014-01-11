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
                                <p class="text-center">...not <em>Laura</em>, though that's a nice name too.</p>
                            </header>

                            <section class="entry-content">

                                <figure class="fig-large">
                                    <img src="<?php echo $img_path; ?>site/letters.jpg" alt="Wonderful photo of me" />
                                    <figcaption>See that? No "U".</figcaption>
                                </figure>

                                <p class="summary">I am a freelance web designer and educator based in <strong>Brooklyn, NY</strong>. I'd love to make a website for you, but I'd love more to make it <em>with</em> you.</p>
                                
                                <h3>What can I do?</h3>

                                <p>Lots!</p>

                                <p>I work extensively in custom WordPress development and HTML5/CSS3/jQuery development for web applications. I believe in the importance of content, semantic code, the mobile web, and do my best to utlilize upcoming web technologies. I try hard to stay up-to-date with <!-- <a href="http://notlaura.com/2013-web-design-shout-outs/" target="blank"> -->the latest and greatest<!-- </a> -->.</p>

                                <p>In addition to all things web, I work in illustration, graphic design and branding, and iOS UI/UX design. Take a look at my portfolio to see more.</p>

                                <h3>Teaching philosophy</h3>
                                
                                <p>As much as I love building things, I equally love sharing what I know. I've got a few strong-held values in my teaching:</p>
                                
                                <div>

                                    <h5>Learn what you <strong>need to know</strong></h5>
                                    <p>It's impossible to learn <em>every</em> nuance of a technology. I believe it is most effective to learn new skills as you need them, not because you think you should know them.</p>

                                    <h5>Learn to <strong>teach yourself</strong></h5>
                                    <p>Sure, one usually takes a class to learn from someone else. But like I said, it's impossible to know everything. I certainly don't! My ultimate goal in teaching is for you to leave with the mindset of "I don't know how to do this, but I can figure it out."</p>

                                    <h5><strong>Confusion</strong> is the goal</h5>
                                    <p>Sounds horrible, right? No way! To truly internalize a concept, you need experience and break through those frustrating moments of confusion on your own. My goal to set up those moments for you, and provide guidance along the way.</p>
                                
                                </div>

                                <h3>Experience</h3>
                                                                
                                <p>In addition to my work with individual clients, I currently instruct the <a href="https://generalassemb.ly/education/front-end-web-development/new-york-city" target="blank">Front-end Web Development course</a> at General Assembly in NYC, and last summer co-instructed Intro to Web Development at the <a href="http://saxifrageschool.org" target="blank">Saxifrage School</a> in Pittsburgh. I have taught workshops for both teens and adults through <a href="http://simplelabs.co" target="blank">Simple Labs</a>, the <a href="http://gpac.org" target="blank">Greater Pittsburgh Arts Council</a>, and the Girls, Math & Science Partnership through the <a href="http://www.carnegiesciencecenter.org/" target="blank">Carnegie Science Center</a>.</p>

                                
                                <h3>More About Me</h3>

                                <p>I have a background in Fine Arts, and spent my first two years of college studying Printmaking at the University of Colorado at Boulder. I had entirely too much fun there, so finished up at Tufts University’s School of the Museum of Fine Arts Boston (SMFA) and received my B.F.A. in 2011.</p>

                                <p>In addition to all things web, I am passionate about games and learning. I work part-time as a Design Assistant for the <a href="http://instituteofplay.org" target="blank">Institute of Play</a> at Quest to Learn, a public middle/high school that is reinventing education through game-like learning. At some point I plan to go back to school for instructional design or a similar field - still figuring that one out.</p>

                                <h3>Let's talk</h3>
                                <p>Finally, I love coffee and I love meeting people. Whether or not you have a project in mind, feel free to get in touch - I'd love to hear from you.</p>
                            </section>
                            
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>