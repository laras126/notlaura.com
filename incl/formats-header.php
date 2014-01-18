<header class="article-header">
	<h1 class="<?php if (is_single() ) { echo 'single-title'; } else { echo 'post-title'; } ?>">
		<?php if (!is_single() ) { ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
		<?php } ?>

		<?php if ( isset($icon) ) { ?>
			<i class="format-type fa <?php echo $icon; ?>"></i>	
		<?php } ?>
		
		<?php the_title(); ?>
		
		<?php if (!is_single() ) { ?>
			</a>
		<?php } ?>
	</h1>

    <p class="byline vcard"><?php _e('Posted', 'bonestheme'); ?> <time class="updated" datetime="<?php echo the_time('Y-m-j'); ?>" pubdate><?php the_time(get_option('date_format')); ?></time> <span class="amp">&</span> <?php _e('filed under', 'bonestheme'); ?> <?php the_category(', '); ?>.</p>

</header> <!-- end article header -->


