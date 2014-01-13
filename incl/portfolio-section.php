<?php
// $terms = get_terms('custom_cat');

// foreach($terms as $term) {
    wp_reset_query();
    $args = array('post_type' => 'custom_type'
	); ?>

	<div class="subsection">
		<!-- <h1 class="subsection-title special"><?php echo $term->name; ?></h1>
		<p><?php echo $term->description; ?></p>
		 -->
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

<?php //} ?>