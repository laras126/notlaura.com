<header class="article-header">
	<h1 class="<?php if (is_single() ) { echo 'single-title'; } else { echo 'h2'; } ?>"><a href="<?php echo get_post_meta($post->ID,'_format_link_url',true); ?>" target="blank" rel="bookmark" title="<?php the_title_attribute(); ?>">
	<i class="format-type fa fa-chain"></i> 
		<?php the_title(); ?>
	</a></h1>
	
	<p class="byline vcard"><?php _e('Posted', 'bonestheme'); ?> <time class="updated" datetime="<?php echo the_time('Y-m-j'); ?>" pubdate><?php the_time(get_option('date_format')); ?></time><span class="amp">&</span> <?php _e('filed under', 'bonestheme'); ?> <?php the_category(', '); ?>.</p>
</header>

<section class="entry-content clearfix">
    <?php the_content(); ?>
</section>