<?php 

get_header();

$args = array( 'post_type' => 'page', 'posts_per_page' => -1 );
$galleries = get_posts( $args ); ?>

<ul class="galleries masonry">
	<li class="grid-sizer"></li>
<?php foreach ( $galleries as $post ) : setup_postdata( $post ); 
		$thumb_width = get_field( 'thumbnail_width' );
		$width_class = strtolower( $thumb_width ); 
		$project_location = get_field( 'project_location' );
		$project_date = new DateTime( get_field('project_date') ); ?>
	<li class="gallery grid-item <?php echo $width_class; ?>">
		<a href="<?php the_permalink(); ?>">
			<div class="grid-item-inner">
				<div class="gallery-meta">
					<div class="gallery-meta-inner">
						<p class="title text-1">
							<?php the_title(); ?>
						</p>
						<!--<p class="location">
							<?php // if ( $project_location ) : echo $project_location; endif; ?>
						</p>-->
						<p class="date text-0">
							<?php if ( $project_date ) : echo $project_date->format('j F, Y'); endif; ?>
						</p>
					</div>
				</div>
				<?php the_post_thumbnail( array(600, 600) ); ?>
			</div>
		</a>
	</li>
<?php endforeach; wp_reset_postdata(); ?>
</ul>

<?php get_footer(); ?>