<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Inform
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php if ( get_field('banner_title') ) : ?>
			<div class="banner <?php the_field('banner_classname') ?>" style="background-image: url(<?php the_field('banner_image'); ?>);">
			  <div class="title-wrapper">
			    <div class="text-wrap">
			      <div class="title"><span>/</span><?php the_field('banner_title'); ?><span>/</span></div>
			      <?php if ( get_field('banner_subtitle') ) : ?>
			      	<div class="subtitle"><?php the_field('banner_subtitle'); ?></div>
			      <?php endif; ?>
			      <div class="desc">
			        <?php the_field('banner_description'); ?>
			      </div>
			    </div>
			  </div>
			</div>
		<?php endif; ?>

		<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'inform' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
				edit_post_link(
					sprintf(
						/* translators: %s: Name of current post */
						esc_html__( 'Edit %s', 'inform' ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					),
					'<span class="edit-link">',
					'</span>'
				);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-## -->
