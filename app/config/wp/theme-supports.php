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

// Enables Custom_Backgrounds support for a theme
//add_theme_support('custom-background', [
//    'default-image'          => '',
//    'default-preset'         => 'default',
//    'default-position-x'     => 'left',
//    'default-position-y'     => 'top',
//    'default-size'           => 'auto',
//    'default-repeat'         => 'repeat',
//    'default-attachment'     => 'scroll',
//    'default-color'          => '',
//    'wp-head-callback'       => '_custom_background_cb',
//    'admin-head-callback'    => '',
//    'admin-preview-callback' => '',
//]);

// Enables Custom_Headers support for a theme
//add_theme_support('custom-header', [
//    'default-image'          => '',
//    'random-default'         => false,
//    'width'                  => 0,
//    'height'                 => 0,
//    'flex-height'            => false,
//    'flex-width'             => false,
//    'default-text-color'     => '',
//    'header-text'            => true,
//    'uploads'                => true,
//    'wp-head-callback'       => '',
//    'admin-head-callback'    => '',
//    'admin-preview-callback' => '',
//    'video'                  => false,
//    'video-active-callback'  => 'is_front_page',
//]);

// Enables Theme_Logo support for a theme
//add_theme_support('custom-logo', [
//    'height'      => 100,
//    'width'       => 400,
//    'flex-height' => true,
//    'flex-width'  => true,
//    'header-text' => ['site-title', 'site-description'],
//]);

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
		"supports" => [ "title", "editor", "thumbnail" ],
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
		"rewrite" => [ "slug" => "wydarzeni", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
	];

	register_post_type( "wydarzeni", $args );

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
		"supports" => [ "title", "editor", "thumbnail" ],
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


function cptui_register_my_cpts_lokale() {

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
}

add_action( 'init', 'cptui_register_my_cpts_lokale' );


function cptui_register_my_cpts_dni_otwarte() {

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
		"supports" => [ "title", "editor", "thumbnail" ],
	];

	register_post_type( "dni_otwarte", $args );
}

add_action( 'init', 'cptui_register_my_cpts_dni_otwarte' );



function cptui_register_my_cpts_wydarzeni() {

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
		"rewrite" => [ "slug" => "wydarzeni", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
	];

	register_post_type( "wydarzeni", $args );
}

add_action( 'init', 'cptui_register_my_cpts_wydarzeni' );


function cptui_register_my_cpts_wydarzenia() {

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
		"supports" => [ "title", "editor", "thumbnail" ],
	];

	register_post_type( "wydarzenia", $args );
}

add_action( 'init', 'cptui_register_my_cpts_wydarzenia' );


function cptui_register_my_cpts_komunikaty() {

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

add_action( 'init', 'cptui_register_my_cpts_komunikaty' );


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


function cptui_register_my_taxes_inwestycja() {

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
}
add_action( 'init', 'cptui_register_my_taxes_inwestycja' );


function cptui_register_my_taxes_dodatkowo() {

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
add_action( 'init', 'cptui_register_my_taxes_dodatkowo' );


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
