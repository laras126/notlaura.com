<?php
/*
This is the custom post type taxonomy template.
If you edit the custom taxonomy name, you've got
to change the name of this template to
reflect that name change.

i.e. if your custom taxonomy is called
register_taxonomy( 'shoes',
then your single template should be
taxonomy-shoes.php

*/
?>

<?php get_header(); ?>
			
			<div id="content" class="portfolio">
			
				<div id="inner-content" class="wrap">
			
				    <div id="main" class="clearfix" role="main">
				    	
				    	<header class="article-header twelvecol clearfix">
							<h1 class="portfolio-title h5">Portfolio</h1> 
							<?php wp_nav_menu( array('menu' => 'Portfolio Menu', 'container_class'=>'nav portfolio-menu' )); ?>
								<h2 class="project-title"><span><?php _e( '', 'bonestheme' ); ?></span> <?php single_cat_title(); ?></h2>	
							<?php
								$term_desc = term_description( '', get_query_var( 'taxonomy' ) );
								if($term_desc != '') : ?>
									<p class="tag-desc"><?php echo $term_desc; ?></p>
							<?php endif; ?>
						</header>

						<?php 
						// Custom paging: Will need to figure this out once more projects are added
						// Right now it only works with Graphic Design + Website cats, not sure why
						// if ( get_query_var('paged') )
						//     $paged = get_query_var('paged');
						// elseif ( get_query_var('page') )
						//     $paged = get_query_var('page');
						// else
						//     $paged = 1;

						// $proj_type = get_the_term_list( get_the_ID(), 'custom_cat');
						// query_posts(array('custom_cat' => $proj_type, 'posts_per_page' => '99', 'paged' => $paged ));

						?>
						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
							<?php get_template_part('incl/loop', 'project'); ?>
					    <?php endwhile; ?>	
					
					        <?php if (function_exists('bones_page_navi')) { ?>
					            <?php bones_page_navi(); ?>
					        <?php } else { ?>
					            <nav class="wp-prev-next">
					                <ul class="clearfix">
					        	        <li class="prev-link"><?php next_posts_link(_e('&laquo; Older Entries', "bonestheme")) ?></li>
					        	        <li class="next-link"><?php previous_posts_link(_e('Newer Entries &raquo;', "bonestheme")) ?></li>
					                </ul>
					            </nav>
					        <?php } ?>
					        
					    <?php else : ?>
					
        					<article id="post-not-found" class="hentry clearfix">
        						<header class="article-header">
        							<h1><?php _e("Oops, Post Not Found!", "bonestheme"); ?></h1>
        						</header>
        						<section class="entry-content">
        							<p><?php _e("Uh Oh. Something is missing. Try double checking things.", "bonestheme"); ?></p>
        						</section>
        						<footer class="article-footer">
        						    <p><?php _e("This is the error message in the taxonomy-custom_cat.php template.", "bonestheme"); ?></p>
        						</footer>
        					</article>
					
					    <?php endif; ?>
			
				    </div> <!-- end #main -->
				    
				</div> <!-- end #inner-content -->
    
			</div> <!-- end #content -->

<?php get_footer(); ?>