<?php get_header(); ?>
<!-- what to do with this? -->
<?php if ( have_posts() ) : ?>
	<div class="page-inner">
	<?php while ( have_posts() ) : the_post(); ?>

		<?php the_content(); ?>

	<?php endwhile; ?>
	</div>
<?php endif; ?>

<?php get_footer(); ?>