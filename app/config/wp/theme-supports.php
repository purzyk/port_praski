<?php

/*
|--------------------------------------------------------------------------
| Theme Supports
|--------------------------------------------------------------------------
|
| Theme Supports are specific features that may be enabled by theme authors.
| Some features have already been enabled for you, but feel free
| to enable/disable these features as you like.
|
| More information at https://codex.wordpress.org/Theme_Features
*/

// Enables Post Formats support for a theme.
add_theme_support('post-formats', [
    'aside',   // Typically styled without a title.
    'audio',   // An audio file or playlist.
    'chat',    // A chat transcript
    'gallery', // A gallery of images.
    'image',   // A single image.
    'link',    // A link to another site.
    'quote',   // A quotation.
    'status',  // A short status update, similar to a Twitter status update.
    'video',   // A single video or video playlist.
]);

// Enables Post Thumbnails support for a theme
add_theme_support('post-thumbnails');

// Adds RSS feed links to HTML <head>
add_theme_support('automatic-feed-links');

// Allows the use of HTML5 markup for the listen options
add_theme_support('html5', [
    'caption',
    'comment-form',
    'comment-list',
    'gallery',
    'search-form',
]);

function cptui_register_my_cpts() {

	/**
	 * Post Type: Lokale.
	 */

	$labels = [
		"name" => __( "Lokale", "custom-post-type-ui" ),
		"singular_name" => __( "Lokal", "custom-post-type-ui" ),
		"all_items" => __( "Wszystkie lokale", "custom-post-type-ui" ),
		"add_new" => __( "Dodaj lokal", "custom-post-type-ui" ),
		"add_new_item" => __( "Dodaj nowy lokal", "custom-post-type-ui" ),
		"edit_item" => __( "Edytuj lokal", "custom-post-type-ui" ),
		"new_item" => __( "Nowy lokal", "custom-post-type-ui" ),
		"view_item" => __( "Zobacz lokal", "custom-post-type-ui" ),
		"view_items" => __( "Zobacz lokale", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Lokale", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "lokale", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "thumbnail" ],
	];

	register_post_type( "lokale", $args );

	/**
	 * Post Type: Dni otwarte.
	 */

	$labels = [
		"name" => __( "Dni otwarte", "custom-post-type-ui" ),
		"singular_name" => __( "Dzień otwarty", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Dni otwarte", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "dni_otwarte", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail", "excerpt" ],
	];

	register_post_type( "dni_otwarte", $args );

		/**
	 * Post Type: Wydarzenia.
	 */

	$labels = [
		"name" => __( "Wydarzenia", "custom-post-type-ui" ),
		"singular_name" => __( "Wydarzenie", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Wydarzenia", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "wydarzenia", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "excerpt" ],
	];

	register_post_type( "wydarzenia", $args );

	/**
	 * Post Type: Komunikaty.
	 */

	$labels = [
		"name" => __( "Komunikaty", "custom-post-type-ui" ),
		"singular_name" => __( "Komunikat", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Komunikaty", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "komunikaty", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
	];

	register_post_type( "komunikaty", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );




function cptui_register_my_taxes() {

	/**
	 * Taxonomy: Inwestycje.
	 */

	$labels = [
		"name" => __( "Inwestycje", "custom-post-type-ui" ),
		"singular_name" => __( "Inwestycja", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Inwestycje", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => true,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'inwestycja', 'with_front' => true, ],
		"show_admin_column" => true,
		"show_in_rest" => true,
		"rest_base" => "inwestycja",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => true,
			];
	register_taxonomy( "inwestycja", [ "lokale" ], $args );

	/**
	 * Taxonomy: dodatkowo.
	 */

	$labels = [
		"name" => __( "dodatkowo", "custom-post-type-ui" ),
		"singular_name" => __( "dodatkowo", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "dodatkowo", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => false,
		"hierarchical" => false,
		"show_ui" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'dodatkowo', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"rest_base" => "dodatkowo",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => true,
			];
	register_taxonomy( "dodatkowo", [ "lokale" ], $args );
}
add_action( 'init', 'cptui_register_my_taxes' );



function wptp_add_categories_to_attachments() {
    register_taxonomy_for_object_type( 'category', 'attachment' );
}
add_action( 'init' , 'wptp_add_categories_to_attachments' );


function cptui_register_my_cpts_galeria() {

	/**
	 * Post Type: Galeria.
	 */

	$labels = [
		"name" => __( "Galeria", "custom-post-type-ui" ),
		"singular_name" => __( "Galeria", "custom-post-type-ui" ),
		"all_items" => __( "Wszystkie zdjęcia", "custom-post-type-ui" ),
		"add_new" => __( "Dodaj nowe", "custom-post-type-ui" ),
		"add_new_item" => __( "Dodaj nowe zdjęcie", "custom-post-type-ui" ),
		"edit_item" => __( "Edytuj zdjęcie", "custom-post-type-ui" ),
		"new_item" => __( "Nowe zdjęcie", "custom-post-type-ui" ),
		"view_item" => __( "Zobacz", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Galeria", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => [ "slug" => "galeria", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-format-gallery",
		"supports" => [ "title", "thumbnail" ],
	];

	register_post_type( "galeria", $args );
}

add_action( 'init', 'cptui_register_my_cpts_galeria' );


function cptui_register_my_taxes_kategoria_zdjec() {

	/**
	 * Taxonomy: Kategorie zdjęć.
	 */

	$labels = [
		"name" => __( "Kategorie zdjęć", "custom-post-type-ui" ),
		"singular_name" => __( "Kategoria zdjęć", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Kategorie zdjęć", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => false,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'kategoria_zdjec', 'with_front' => true, ],
		"show_admin_column" => true,
		"show_in_rest" => true,
		"rest_base" => "kategoria_zdjec",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => true,
			];
	register_taxonomy( "kategoria_zdjec", [ "galeria" ], $args );
}
add_action( 'init', 'cptui_register_my_taxes_kategoria_zdjec' );


function posts_columns($defaults){
    $defaults['riv_post_thumbs'] = __('Thumbs');
    return $defaults;
}
 
function posts_custom_columns($column_name, $id){
        if($column_name === 'riv_post_thumbs'){
        echo the_post_thumbnail( 'thumbnail');
    }
}
add_filter('manage_posts_columns', 'posts_columns', 5);
add_action('manage_posts_custom_column', 'posts_custom_columns', 5, 2);


add_action('restrict_manage_posts', 'tsm_filter_post_type_by_taxonomy');
function tsm_filter_post_type_by_taxonomy() {
	global $typenow;
	$post_type = 'lokale'; // change to your post type
	$taxonomy  = 'inwestycja'; // change to your taxonomy
	if ($typenow == $post_type) {
		$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
		$info_taxonomy = get_taxonomy($taxonomy);
		wp_dropdown_categories(array(
			'show_option_all' => sprintf( __( 'Pokaż wszystkie %s', 'textdomain' ), $info_taxonomy->label ),
			'taxonomy'        => $taxonomy,
			'name'            => $taxonomy,
			'orderby'         => 'name',
			'selected'        => $selected,
			'show_count'      => true,
			'hide_empty'      => true,
		));
	};
}

add_filter('parse_query', 'tsm_convert_id_to_term_in_query');
function tsm_convert_id_to_term_in_query($query) {
	global $pagenow;
	$post_type = 'lokale'; // change to your post type
	$taxonomy  = 'inwestycja'; // change to your taxonomy
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}