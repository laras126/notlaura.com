
<?php 
$format = "Video"; 
$icon = "fa-youtube-play";

include('formats-header.php'); ?>

<section class="entry-content clearfix">
	<figure class="media-wrap">
		<?php echo get_post_meta($post->ID, '_format_video_embed',true) ?>
	</figure>
    <?php the_content(); ?>
</section> <!-- end article section -->
