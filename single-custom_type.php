<?php
	global $post;
    $prefix = '_cmb_';
	$desc = get_post_meta( $post->ID, $prefix.'project_desc', true );
	$client = get_post_meta( $post->ID, $prefix.'client_name', true );
	$link = get_post_meta( $post->ID, $prefix.'project_link', true );
	$skills = get_the_term_list( get_the_ID(), 'custom_tag', '<span class="tags-title">Skills:</span> ', ', ' );
	$categories = get_the_term_list( get_the_ID(), 'custom_cat', '<span class="tags-title">Filed under:</span> ', ', ' );
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="clearfix" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix single'); ?> role="article">

								<header class="article-header">

									<h1 class="single-title custom-post-type-title"><?php the_title(); ?></h1>
									<p class="byline vcard"><?php echo $categories; ?></p>

								</header>

								<section class="entry-content clearfix">

									<div class="clearfix project-content">									
										<?php the_content(); ?>
									</div>	
									<p><?php echo $desc; ?></p>

							
									<?php if($link != '') { ?>
										<p><a href="<?php echo $link; ?>" title="<?php the_title(); ?>" target="blank" class="dark-button">Project Link</a></p>
									<?php } ?>		


								</section>

								<footer class="article-footer">
									<?php edit_post_link(); ?>
									<p class="tags"><?php echo get_the_term_list( get_the_ID(), 'custom_tag', '<span class="tags-title">' . __( 'Skills:', 'bonestheme' ) . '</span> ', ', ' ) ?></p>

									<nav class="prev-next clearfix">
										<div class="prev">
											<?php previous_post_link('%link','<i class="fa fa-arrow-left"></i>'); ?> 
										</div>
										<div class="next last">
											<?php next_post_link('%link','<i class="fa fa-arrow-right"></i>'); ?>
										</div>
									</nav>
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
