<?php get_header(); ?>

		<div id="content">

			<div id="inner-content" class="wrap clearfix">

					<div id="main" class="clearfix" role="main">

						<?php get_template_part( 'incl/page', 'header' ); ?>

						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<section class="contain" itemprop="articleBody">
								<?php get_template_part('incl/portfolio', 'section'); ?>
							</section>

						<?php endwhile; else : ?>

							<article id="post-not-found" class="hentry clearfix">
									<header class="article-header">
										<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
								</header>
									<section class="entry-content">
										<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
								</section>
								<footer class="article-footer">
										<p><?php _e( 'This is the error message in the page-custom.php template.', 'bonestheme' ); ?></p>
								</footer>
							</article>

						<?php endif; ?>

					</div>

			</div>

		</div>

<?php get_footer(); ?>
