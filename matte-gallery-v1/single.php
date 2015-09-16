<?php get_header(); ?>

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

		<h1><?php the_title(); ?></h1>
		<!-- function testing if content != null before printing html would be good -->
		<div class="post-content">
			<?php the_content(' ,'); ?>
		</div>
		<p class="post-date"><?php the_date(''); ?></p>

	<?php endwhile; endif; ?>

<?php get_footer(); ?>