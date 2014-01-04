<?php
$terms = get_terms('custom_cat');

foreach($terms as $term) {
    wp_reset_query();
    $args = array('post_type' => 'custom_type',
		'tax_query' => array(
			array(
				'taxonomy' => 'custom_cat',
				'field' => 'slug',
				'terms' => $term->slug,
			),
		),
	); ?>

	<div class="subsection">
		<h1><a href="<?php echo $term->slug; ?>"><?php echo $term->name; ?></a></h1>
		<p><?php echo $term->description; ?></p>
		
		<div class="subsection-thumbs clearfix">
			<?php
			
			$loop = new WP_Query($args);
			
			if($loop->have_posts()) {

				while($loop->have_posts()) : $loop->the_post(); ?>
							
				<?php get_template_part('incl/loop', 'project'); ?>

			<?php endwhile;
			
			} ?>
		</div>
	</div> 

<?php } ?>