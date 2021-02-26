<?php

function custom_post_type_movie()
{
    // Set UI labels for Custom Post Type
    $labels = [
        'name'               => _x('Movies', 'Post Type General Name', 'wptheme'),
        'singular_name'      => _x('Movie', 'Post Type Singular Name', 'wptheme'),
        'menu_name'          => __('Movies', 'wptheme'),
        'parent_item_colon'  => __('Parent Movie', 'wptheme'),
        'all_items'          => __('All Movies', 'wptheme'),
        'view_item'          => __('View Movie', 'wptheme'),
        'add_new_item'       => __('Add New Movie', 'wptheme'),
        'add_new'            => __('Add New', 'wptheme'),
        'edit_item'          => __('Edit Movie', 'wptheme'),
        'update_item'        => __('Update Movie', 'wptheme'),
        'search_items'       => __('Search Movie', 'wptheme'),
        'not_found'          => __('Not Found', 'wptheme'),
        'not_found_in_trash' => __('Not found in Trash', 'wptheme'),
    ];

    // Set other options for Custom Post Type
    $args = [
        'label'               => __('movies', 'wptheme'),
        'description'         => __('Movie', 'wptheme'),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => [
            'title',
            'editor',
            'excerpt',
            'author',
            'thumbnail',
            'comments',
            'revisions',
            'custom-fields',
        ],
        // You can associate this CPT with a taxonomy or custom taxonomy.
        'taxonomies'          => [''],
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => null, // https://developer.wordpress.org/resource/dashicons
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
    ];

    // Registering your Custom Post Type
    register_post_type('movie', $args);
}

add_action('init', 'custom_post_type_movie', 0);
