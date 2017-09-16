<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Inform
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta id="metaRobots" name="robots" content="noindex, nofollow" />
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<!-- <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'inform' ); ?></a> -->

	<header id="masthead" class="site-header row" role="banner">
		<div class="site-branding col-md-3 col-lg-3 vcenter first">
			<?php
			if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/inform-logo.svg" alt="Inform" class="img-responsive"></a></h1>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/inform-logo.svg" alt="Inform" class="img-responsive"></a></p>
			<?php
			endif;

			$description = get_bloginfo( 'description', 'display' );
			if ( $description || is_customize_preview() ) : ?>
				<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
			<?php
			endif; ?>
		</div><!--
		--><nav id="site-navigation" class="main-navigation col-md-7 col-lg-6 vcenter second" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
		</nav><!--
		--><div class="menu-toggle col-md-2 col-lg-3 vcenter third">
			<a href="#" onClick="openNav()" title="Menu"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/menu-toggle-more.svg" alt="More" class="img-responsive"></a>
		</div>

		<!-- The overlay -->
		<div id="main-nav" class="overlay">
		  <!-- Button to close the overlay navigation -->
		  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/menu-close.svg" alt="More" class="img-responsive"></a>

		  <div class="menu-container" id="menu-container">
		  	<div class="menu-logo-wrapper">
		  		<div class="menu-logo">
		  			<div class="inner"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/inform-logo.svg" alt="Inform" class="img-responsive"></div>
		  		</div>
		  	</div><!--
		  	--><div class="overlay-content first-menu single">
		  		<div class="inner">
		  			<?php wp_nav_menu( array( 'theme_location' => 'site-menu', 'menu_id' => 'site-menu' ) ); ?>
		  		</div>
		  	</div><!--
		  	--><div class="overlay-content second-menu">
		  		<div class="inner">
		  			<div class="menu-site-menu-container"></div>
		  		</div>
		  	</div>
		  </div>
		</div>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
