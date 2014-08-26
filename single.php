<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap">

					<div id="main" class="clearfix" role="main">

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<?php if(!get_post_format()) {
						               get_template_part('incl/format', 'standard'); 
						          } else {
						               get_template_part('incl/format', get_post_format());
						          } ?>
								
								<footer class="article-footer">
									
									<?php edit_post_link(); ?>
									
									<nav class="clearfix prev-next project-nav">

										<div class="prev">
											<?php next_post_link('%link','<i class="fa fa-angle-left"></i><span class="nav-text h4">Previous</span>'); ?>
											<?php // silly hack for if there are no previous posts ?>
											&nbsp;
										</div>

										<div class="pv-middle">
											<?php the_tags( '<p class="tags"><span class="tags-title">' . __( 'Tags:', 'bonestheme' ) . '</span> ', ', ', '</p>' ); ?>	
										</div>

										<div class="next">
											<?php // silly hack for if there are no previous posts ?>
											&nbsp;
											<?php previous_post_link('%link','<span class="nav-text h4">Next</span><i class="fa fa-angle-right"></i>'); ?> 
										</div>
									</nav>
									
									<?php comments_template(); ?>
									
								</footer>
								
							</article>

						<?php endwhile; ?>

						<?php else : ?>

							<article id="post-not-found" class="hentry clearfix">
								<header class="article-header">
									<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
								</header>
								<section class="entry-content">
									<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
								</section>
								<footer class="article-footer">
										<p><?php _e( 'This is the error message in the single.php template.', 'bonestheme' ); ?></p>
								</footer>
							</article>

						<?php endif; ?>

					</div>
					
					<?php //get_sidebar('blog_sidebar'); ?>

				</div>

			</div>

<?php get_footer(); ?>
