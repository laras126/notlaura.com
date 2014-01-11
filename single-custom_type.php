<?php
	global $post;
    $prefix = '_cmb_';
	$desc = get_post_meta( $post->ID, $prefix.'project_desc', true );
	$client = get_post_meta( $post->ID, $prefix.'client_name', true );
	$link = get_post_meta( $post->ID, $prefix.'project_link', true );
	$skills = get_the_term_list( get_the_ID(), 'custom_tag', '<span class="tags-title">Skills:</span> ', ', ' );
	$categories = get_the_term_list( get_the_ID(), 'custom_cat', '', ', ' );
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="clearfix" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix single'); ?> role="article">

								<header class="article-header">	
									
									<div class="clearfix prev-next">
										
										<div class="prev">
											<?php previous_post_link('%link','<i class="fa fa-arrow-left"></i>'); ?> 
										</div>
										<div class="pv-middle">
											<h3 class="h5 text-center"><?php echo $categories; ?></h3>
										</div>
										<div class="next">
											<?php next_post_link('%link','<i class="fa fa-arrow-right"></i>'); ?>
										</div>
									</div>

								</header>

								<section class="entry-content project-content clearfix">
															
									<?php the_content(); ?>
									<h1 class="h3"><?php the_title(); ?></h1>

									<p class="h5"><?php echo get_the_term_list( get_the_ID(), 'custom_tag', '<span class="tags-title">' . __( 'Keywords:', 'bonestheme' ) . '</span> ', ', ' ) ?></p>

									<p><?php echo $desc; ?></p>

							
									<?php if($link != '') { ?>
										<a href="<?php echo $link; ?>" title="<?php the_title(); ?>" target="blank" class="dark-button">Project Link</a></p>
									<?php } ?>		


								</section>

								<footer class="article-footer">
									<?php edit_post_link(); ?>
								</footer>

							</article>

							<?php endwhile; ?>

							<?php else : ?>

									<?php get_template_part('incl/post', 'notfound'); ?>

							<?php endif; ?>

						</div>

				</div>

			</div>

<?php get_footer(); ?>
