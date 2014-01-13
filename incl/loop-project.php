<?php
	global $post;
    $prefix = '_cmb_';
	$desc = get_post_meta( $post->ID, $prefix.'project_desc', true );
	$client = get_post_meta( $post->ID, $prefix.'client_name', true );
	$link = get_post_meta( $post->ID, $prefix.'project_link', true );
	$skills = get_the_term_list( get_the_ID(), 'custom_tag', '<span class="tags-title">Skills:</span> ', ', ' );
	$categories = get_the_term_list( get_the_ID(), 'custom_cat', '<span class="tags-title">Filed under:</span> ', ', ' );
?>

<figure <?php post_class('thumb'); ?> role="article">
    <a href="<?php the_permalink(); ?>" class="thumb-link">
		<div class="thumb-image">
			<?php if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
				the_post_thumbnail('bones-thumb-300');
			} ?> 
			<?php the_title('<h5 class="line-clamp h5 thumb-title">', '</h5>'); ?>
		</div>
	</a>
	<figcaption class="thumb-meta">
		<!-- <p class="thumb-meta-tags"><?php echo $categories ?></p>
		<p class="thumb-meta-tags"><?php echo $skills ?></p>
		<?php edit_post_link('edit', '<p>', '</p>'); ?> -->
	</figcaption>
</figure>
