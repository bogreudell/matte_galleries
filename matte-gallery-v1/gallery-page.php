<?php 

/*
 * Template name: Gallery Page
 */

get_header(); 

// project meta
$project_location = get_field( 'project_location' );
$project_date = new DateTime( get_field( 'project_date' ) );
$lores_download = get_field( 'lo_res_collection' );
$hires_download = get_field( 'hi_res_collection' );

// get project user
$project_user = get_field('project_user');
$project_user_ID = $project_user['ID']; 

// get current user
$current_user = wp_get_current_user();
$current_user_ID = $current_user->ID; ?>
<?php if ( have_posts() ) : ?>
	<div class="page-inner">
		<div class="gallery-header">
			<div class="gallery-title">
				<div class="text-3"><?php the_title(); ?></div>
				<div class="text-1"><?php echo $project_location; ?></div>
				<div class="text-0"><?php echo $project_date->format('j F, Y'); ?></div>
				<ul class="gallery-social">
					<li>
						<a class="gallery-share" href="https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '" target="_blank">
							<img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/facebook_black.svg" alt="">
						</a>
					</li>
					<li>
						<a class="gallery-share" href="https://twitter.com/home?status=' + window.location.href + '" target="_blank">
							<img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/twitter_black.svg" alt="">
						</a>
					</li>
					<li>
						<a class="gallery-share" href="https://www.pinterest.com/pin/create/button/?media=' + img_href + '&url=' + window.location.href + '&description=' + img_title + ',%20by%20MATTE" target="_blank">
							<img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/pinterest_black.svg" alt="">
						</a>
					</li>
					<li>
						<a class="gallery-share" href="" target="_blank">
							<img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/tumblr_black.svg" alt="">
						</a>
					</li>
				</ul>
			</div>
			<div class="gallery-download">
			<?php if ( $current_user_ID == $project_user_ID || current_user_can('delete_others_posts') )  : ?>
			<ul>
				<?php if ( $lores_download || $hires_download ) : ?>
				<li>
					<a href="#"><span><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/download.svg" alt=""></span> <span>Download Collection</span></a>
					<ul style="display:none;">
						<?php if ( $lores_download ) : ?><li><a href="<?php echo $lores_download; ?>">High Resolution (zip)</a></li><?php endif; ?>
						<?php if ( $hires_download ) : ?><li><a href="<?php echo $hires_download; ?>">Low Resolution (zip)</a></li><?php endif; ?>
					</ul>
				</li>
					
				<?php endif; ?>
				<li>
					<a href="<?php echo wp_logout_url( get_permalink() ); ?>"><span><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/login.svg" alt=""></span><span>Logout</span></a>
				</li>
			</ul> 
			<?php else : ?>
			<button id="client-login"><span><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/login.svg" alt=""></span> Login</button>
			<?php endif; ?>
			</div>
			<div class="clear"></div>
		</div>	
	<?php 
		while ( have_posts() ) : the_post(); 
		$banner_video = get_field( 'banner_video'); 

		if ( $banner_video ) : ?>
		
		<div id="banner-video">
			<?php echo $banner_video; ?>
		</div>

		<?php endif; the_content(); ?>

	<?php endwhile; ?>
	</div>
	<div class="login-wrapper">
		<div class="gallery-thick-border">
			<div class="gallery-login-form">
				<div id="logo-large">
                    <img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/logo.png" alt="MATTE">
                </div>
				<div class="text-2">Client Login</div>
				<?php wp_login_form(); ?>
			</div>
		</div>
	</div>
<?php else : ?>
	<h1>404</h1>
<?php endif; ?>

<?php get_footer(); ?>