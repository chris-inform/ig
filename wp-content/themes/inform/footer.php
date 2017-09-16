<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Inform
 */

?>

	</div><!-- #content -->

	<div id="section-eight">
	  	<div class="bg-contact"></div>
	  	<div class="blue-bar">
				<div class="container-skew">
					<div class="inner">
						<div class="container-skew-remove">
							<strong>Say</strong><br>
							<em>Hello!</em>
						</div>
					</div>
				</div>
	  	</div>
		<div class="container">
			<div class="col-md-offset-6 col-md-6">
				<div class="form-wrapper">
					<?php echo do_shortcode("[contact-form-7 id='129' title='Contact Form']"); ?>
				</div>
	  		</div>
	  	</div>
	</div>
	<!-- <div id="section-nine">
		<div class="container">
		<ul>
			<li><a href="#">Sydney</a></li>
			<li><a href="#">Singapore</a></li>
			<li><a href="#">Manila</a></li>
			</ul>                                         
		</div>
	</div> -->

	<footer class="site-footer" role="contentinfo">
		<div class="container">
			<div class="col-md-6 col-sm-6 left">
				<a href="#" class="logo-footer"><img src="<?php echo esc_url( home_url( '/wp-content/themes/inform/' ) ); ?>imgs/inform-logo.svg" alt="Inform" class="img-responsive"></a>
				<p>Inform Group 2017</p>
			</div>
			<div class="col-md-6 col-sm-6 right">
				<div class="inner">
					<span>Follow Us</span>
					<ul>
						<li><a href="https://www.facebook.com/Informgroupptyltd/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
						<li><a href="https://www.linkedin.com/company/inform-group-pty-ltd" target="_blank" title="Linked In"><i class="fa fa-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
		</div><!-- .container -->
	</footer><!-- #footer -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
