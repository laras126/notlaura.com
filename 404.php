<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap clearfix">

					<div id="main" role="main">

						<article id="post-not-found" class="hentry">

							<header class="page-header">
								<h1 class="page-title"><?php _e( 'Epic 404.', 'bonestheme' ); ?></h1>
								<p class="page-desc">Something's missing!</p>
							</header>

							<section class="entry-content">
								<p><?php _e( 'What you are looking for was not found, but maybe try looking again! <br>In the mean time, feast your eyes on my family\'s cute dog, Feebs:', 'bonestheme' ); ?></p>
								<figure class="fig-large">
									<img src="<?php echo $img_path_dev; ?>site/feebs6.png" alt="Cute dog!">	
									<figcaption>Feebs is part Sherpei...can you tell?</figcaption>
								</figure>
								
							</section>

						</article>

					</div>

				</div>

			</div>

<?php get_footer(); ?>
