<header class="article-header">
	<h1 class="h2"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
	<span class="format-type"><i class="fa <?php echo $icon; ?>"></i><span class="summary">Video: </span></span> 
	<?php the_title(); ?>
	</a></h1>
	<p class="byline vcard"><?php printf( __( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> <span class="amp">&</span> filed under %4$s.', 'bonestheme' ), get_the_time('Y-m-j'), get_the_time(get_option('date_format')), bones_get_the_author_posts_link(), get_the_category_list(', '));
	?></p>
</header>

<section class="entry-content clearfix">
	<?php the_content(); ?>
</section>
