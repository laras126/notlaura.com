<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

						<div id="main" class="clearfix" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

								<article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

									<header class="article-header">

										<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>
										
									</header>

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
