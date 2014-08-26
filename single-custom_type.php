<?php
	global $post;
    $prefix = '_cmb_';
	$categories = get_the_term_list( get_the_ID(), 'custom_cat', '', ', ' );
	$desc = get_post_meta( $post->ID, $prefix.'project_desc', true );
	$link = get_post_meta( $post->ID, $prefix.'project_link', true );

	// Print keywords not linked
	$keywords = wp_get_object_terms( $post->ID, 'custom_tag' );
	$categories = wp_get_object_terms( $post->ID, 'custom_cat' );

	foreach( $keywords as $k ) {
		$k_names[] = $k->name;
	}

	if( !empty($k_names) ) {
		$k_list = implode( ', ', $k_names );
	}	

	foreach( $categories as $c ) {
		$c_names[] = $c->name;
	}

	if( !empty($c_names) ) {
		$c_list = implode( ', ', $c_names );
	}	
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="clearfix" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix single'); ?> role="article">

								<header class="article-header">	
									<?php if (!empty($c_list)) { ?>
										<h3 class="h5 text-center special"><?php echo $c_list; ?></h3>
									<?php } ?>

									<nav class="contain prev-next project-nav">
										<div class="prev">
											<?php next_post_link('%link','<i class="fa fa-angle-left"></i><span class="nav-text">Previous</span>'); ?>
											<?php // silly hack for if there are no previous posts ?>
											&nbsp;
										</div>
										<div class="pv-middle">
											<h1 class="project-title"><?php the_title(); ?></h1>		
										</div>
										<div class="next">
											<?php previous_post_link('%link','<span class="nav-text">Next</span><i class="fa fa-angle-right"></i>'); ?> 
											&nbsp;<?php // silly hack for if there are no previous posts ?>
										</div>
									</nav>
									
								</header>

								<section class="entry-content project-content clearfix fadein">
															
									<?php the_content(); ?>
										
									<?php if (!empty($k_list)) { ?>
										<p class="h5"><strong>Keywords:</strong> <?php echo $k_list; ?></p>
									<?php } ?>

									<p><?php echo $desc; ?></p>

							
									<?php if($link != '') { ?>
										<a href="<?php echo $link; ?>" title="<?php the_title(); ?>" target="blank" class="dark-button h4">Project Link</a>
									<?php } ?>		


								</section>
								
								<footer class="article-footer">
									<?php get_template_part('incl/project', 'nav'); ?>
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
