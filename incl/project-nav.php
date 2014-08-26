<nav class="clearfix prev-next project-nav">
	<div class="prev">
		<?php next_post_link('%link','<i class="fa fa-angle-left"></i><span class="nav-text">Previous</span>'); ?>
		<?php // silly hack for if there are no previous posts ?>
		&nbsp;
	</div>

	<div class="next">
		&nbsp;
		<?php previous_post_link('%link','<span class="nav-text">Next</span><i class="fa fa-angle-right"></i>'); ?> 
		<?php // silly hack for if there are no previous posts ?>
		
	</div>
</nav>