<?php

	if (!class_exists('Timber')){
		add_action( 'admin_notices', function(){
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . admin_url('plugins.php#timber') . '">' . admin_url('plugins.php') . '</a></p></div>';
		});
		return;
	}

	class StarterSite extends TimberSite {

		function __construct(){
			add_theme_support('post-formats', array('link', 'image', 'quote', 'status', 'video'));
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
			$context['callout_tf'] = get_field('callout_tf', 'options');
			$context['callout_bar'] = get_field('callout_bar', 'options');
			$conext['ENV'] = WP_ENV;
			$context['main_nav'] = new TimberMenu('main_nav');
			$context['footer_nav'] = new TimberMenu('footer_nav');
			$context['footer_widgets'] = Timber::get_sidebar('sidebar.php');
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
	 */


	// add_action( 'send_headers', 'nl_add_header' );
	// function nl_add_header() {
		// if( WP_ENV != 'development') {
		// 	header( 'Link: <'.get_template_directory_uri() . '/assets/css/main.min.css>; rel=preload; as=style' );
		// }
	// }


	// Shortcode for buttons
	function nl_btn_func( $atts ) {
		$a = shortcode_atts( array(
				'text' => 'Launch Project',
				'url' => '#',
				'icon' => 'new-window'
		), $atts );

		$elem = "<p><a class=\"btn -has-icon\" href=\"{$a['url']}\">";
		$elem .= esc_html($a['text']);
		$elem .= "<svg viewBox=\"0 0 100 100\" class=\"icon-inline icon-inline-{$a['icon']}\">";
		$elem .= "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#svg-{$a['icon']}\"></use></svg></a></p>";
		return $elem;
	}
	add_shortcode( 'btn', 'nl_btn_func' );



  // add_action('nav_menu_css_class', 'nl_add_current_nav_class', 10, 2 );
	function nl_add_current_nav_class($classes, $item) {

		// Getting the current post details
		global $post;

		// Getting the post type of the current post
		$current_post_type = get_post_type_object(get_post_type($post->ID));
		$current_post_type_slug = $current_post_type->rewrite[slug];

		// Getting the URL of the menu item
		$menu_slug = strtolower(trim($item->url));

		// If the menu item URL contains the current post types slug add the current-menu-item class
		if (strpos($menu_slug,$current_post_type_slug) !== false) {

		   $classes[] = 'current-menu-item';

		}

		// Return the corrected set of classes to be added to the menu item
		return $classes;

	}


	// Enqueue scripts
	function nl_scripts() {

		// Use jQuery from CDN, enqueue in footer
		if (!is_admin()) {
			wp_deregister_script('jquery');
			wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), null, true);
			wp_enqueue_script('jquery');
		}

		// Enqueue stylesheet
		if( WP_ENV != 'development' ) {
			wp_enqueue_style( 'nl-styles', get_template_directory_uri() . '/assets/css/main.min.css', 1.0);
			wp_enqueue_script( 'gsap-js', '//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js', null, '1.0.0', true );
			wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/js/build/scripts.min.js', array('jquery'), '1.0.0', true );
		} else {
			wp_enqueue_style( 'nl-styles', get_template_directory_uri() . '/assets/css/main.css', 1.0);
			wp_enqueue_script( 'gsap-js', '//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js', null, '1.0.0', true );
			wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/js/build/scripts.js', array('jquery', 'gsap-js'), '1.0.0', true );
		}

	}
	add_action( 'wp_enqueue_scripts', 'nl_scripts' );


	// Add Options Page
	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page('Theme Settings');
	}





	/*
	 *
	 * Nice to Haves
	 *
	 * These functions aren't necessary,
	 * more things I find myself writing over and over
	 *
	 */



	// Change Title field placeholders for Custom Post Types
	// (You'll need to register the types, of course)

	function nl_title_placeholder_text ( $title ) {
		if ( get_post_type() == 'project' ) {
			$title = __( 'Project Name' );
		}
		return $title;
	}
	add_filter( 'enter_title_here', 'nl_title_placeholder_text' );



	// Customize the editor style
	// NOTE: You need to make this file yourself (not included in Simple Sassy Starter). I usually snipe the one from Roots, which is just the Bootstrap Typography, but does a nice job:
	// https://github.com/roots/roots-sass/blob/master/assets/css/editor-style.css
	function nl_editor_styles() {
		add_editor_style( 'assets/css/editor-style.css' );
	}
	add_action( 'after_setup_theme', 'nl_editor_styles' );




	// Add excerpts to pages
	function nl_add_excerpts_to_pages() {
		add_post_type_support( 'page', 'excerpt' );
	}
	add_action( 'init', 'nl_add_excerpts_to_pages' );



	// Add a 'Very Simple' toolbar style for the WYSIWYG editor in ACF
	// http://www.advancedcustomfields.com/resources/customize-the-wysiwyg-toolbars/
	function nl_acf_wysiwyg_toolbar( $toolbars ) {

		$toolbars['Text Based'] = array();

		// Only one row of buttons
		$toolbars['Text Based'][1] = array('formatselect' , 'bold' , 'link' , 'italic' , 'unlink' );

		return $toolbars;
	}
	add_filter( 'acf/fields/wysiwyg/toolbars' , 'nl_acf_wysiwyg_toolbar'  );


	// Remove inline gallery styles
	add_filter( 'use_default_gallery_style', '__return_false' );




	// Google Analytics snippet from HTML5 Boilerplate
	// Cookie domain is 'auto' configured. See: http://goo.gl/VUCHKM

	define('GOOGLE_ANALYTICS_ID', 'UA-12198561-4');
	function mtn_google_analytics() { ?>
	<script>
	  <?php if (WP_ENV === 'production') : ?>
	    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	    e.src='//www.google-analytics.com/analytics.js';
	    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	  <?php else : ?>
	    function ga() {
	      console.log('GoogleAnalytics: ' + [].slice.call(arguments));
	    }
	  <?php endif; ?>
	  ga('create','<?php echo GOOGLE_ANALYTICS_ID; ?>','auto');ga('send','pageview');
	</script>

	<?php }

	if (GOOGLE_ANALYTICS_ID && (WP_ENV !== 'production' || !current_user_can('manage_options'))) {
	  add_action('wp_footer', 'mtn_google_analytics', 20);
	}



add_filter( 'timber_context', 'mytheme_timber_context'  );

function mytheme_timber_context( $context ) {
    $context['options'] = get_fields('option');
    return $context;
}
