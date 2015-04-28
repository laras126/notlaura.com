<?php 

/*

Template Name: Survey Form

*/

get_header(); ?>

	<div id="content">

		<div id="inner-content">

				<div id="main" role="main">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

							<?php get_template_part( 'incl/page', 'header' ); ?>

							<section class="entry-content clearfix" itemprop="articleBody">
								<?php the_content(); ?>
							</section>

							<footer class="article-footer">
								<?php the_tags( '<span class="tags">' . __( 'Tags:', 'bonestheme' ) . '</span> ', ', ', '' ); ?>
							</footer>

						</article>

					<?php endwhile; else : ?>

							<?php get_template_part('incl/post', 'notfound'); ?>

					<?php endif; ?>

				</div>

		</div>

	</div>

<?php get_footer(); ?>
