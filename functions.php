<?php

	if (!class_exists('Timber')){
		add_action( 'admin_notices', function(){
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . admin_url('plugins.php#timber') . '">' . admin_url('plugins.php') . '</a></p></div>';
		});
		return;
	}

	class StarterSite extends TimberSite {

		function __construct(){
			add_theme_support('post-formats');
			add_theme_support('post-thumbnails');
			add_theme_support('menus');
			add_filter('timber_context', array($this, 'add_to_context'));
			add_filter('get_twig', array($this, 'add_to_twig'));
			add_action('init', array($this, 'register_post_types'));
			add_action('init', array($this, 'register_taxonomies'));
			add_action('init', array($this, 'register_menus'));
			add_action('init', array($this, 'register_widgets'));

			parent::__construct();
		}


		// Note that the following included files only need to contain the taxonomy/CPT/Menu arguments and register_whatever function. They are initialized here.
		// http://generatewp.com is nice
		
		function register_post_types(){
			require('lib/custom-types.php');
		}

		function register_taxonomies(){
			require('lib/taxonomies.php');
		}

		function register_widgets() {
			require('lib/widgets.php');
		}

		function register_menus() {
			// require('lib/menus.php');
			$locations = array(
				'main_nav' => __( 'Primary Menu', 'mtnmeister' ),
				'footer_nav' => __( 'Footer Links', 'mtnmeister' ),
			);
			register_nav_menus( $locations );
		}

		function add_to_context($context) {
			
			$context['main_nav'] = new TimberMenu('main_nav');
			$context['footer_nav'] = new TimberMenu('footer_nav');
			$context['footer_widgets'] = Timber::get_sidebar('sidebar.php');

			$social = array(
				'twitter' => 'http://twitter.com/laras126',
				'linkedin' => 'http://www.linkedin.com/in/notlaura/',
				'github' => 'http://github.com/laras126'
			);

			$context['social'] = $social;

			$context['site'] = $this;
			return $context;
		}

		function add_to_twig($twig){
			/* this is where you can add your own fuctions to twig */
			$twig->addExtension(new Twig_Extension_StringLoader());
			$twig->addFilter('myfoo', new Twig_Filter_Function('myfoo'));
			return $twig;
		}

	}

	new StarterSite();

	
	/*
	 **************************
	 * Custom Theme Functions *
	 **************************
	 *
	 * Namespaced "nl" - find and replace with your own three-letter-thing.
	 * 
	 */ 

	// Enqueue scripts
	function nl_scripts() {

		// Use jQuery from CDN, enqueue in footer
		if (!is_admin()) {
			wp_deregister_script('jquery');
			wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', array(), null, true);
			wp_enqueue_script('jquery');
		}

		// Enqueue stylesheet
		if( WP_ENV == 'production' ) {
			wp_enqueue_style( 'nl-styles', get_template_directory_uri() . '/assets/css/main.min.css', 1.0);
		} else {
			wp_enqueue_style( 'nl-styles', get_template_directory_uri() . '/assets/css/main.css', 1.0);
		}

		// Add our JS
		wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/js/build/scripts.js', array('jquery'), '1.0.0', true );
	}
	add_action( 'wp_enqueue_scripts', 'nl_scripts' );

	
	
	// Load Gravity Forms JS in the footer...really? Sheesh.
	// https://bjornjohansen.no/load-gravity-forms-js-in-footer

	function nl_wrap_gform_cdata_open( $content = '' ) {
		$content = 'document.addEventListener( "DOMContentLoaded", function() { ';
		return $content;
	}
	add_filter( 'gform_cdata_open', 'nl_wrap_gform_cdata_open' );

	function nl_wrap_gform_cdata_close( $content = '' ) {
		$content = ' }, false );';
		return $content;
	}
	add_filter( 'gform_cdata_close', 'nl_wrap_gform_cdata_close' );




	/* 
	 * 
	 * Nice to Haves
	 *
	 * These functions aren't necessary, more things I find myself writing over and over
	 */

	

	// Change Title field placeholders for Custom Post Types
	// (You'll need to register the types, of course)

	function nl_title_placeholder_text ( $title ) {
		if ( get_post_type() == 'service' ) {
			$title = __( 'Service Name' );
		} else if ( get_post_type() == 'case-study' ) {
	        $title = __( 'Case Study Name' );
		} else if ( get_post_type() == 'testimonial' ) {
	        $title = __( 'Testimonial Nickname' );
		}
		return $title;
	} 
	// add_filter( 'enter_title_here', 'nl_title_placeholder_text' );

	// Remove autop from Blank block field
	function nl_blank_block() {
		$block = get_sub_field('blank');
		echo $block;
		echo '<span style="text-align:center">doh!</span>';
	}


	// Customize the editor style
	// NOTE: You need to make this file yourself (not included in Simple Sassy Starter). I usually snipe the one from Roots, which is just the Bootstrap Typography, but does a nice job:
	// https://github.com/roots/roots-sass/blob/master/assets/css/editor-style.css
	function nl_editor_styles() {
		add_editor_style( 'assets/css/editor-style.css' );
	}
	add_action( 'after_setup_theme', 'nl_editor_styles' );



		

