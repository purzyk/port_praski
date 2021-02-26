<?php

function custom_taxonomy_genre()
{
    // Set UI labels for Custom Taxonomy
    $labels = [
        'name'              => _x('Genres', 'Taxonomy general name', 'wptheme'),
        'singular_name'     => _x('Genre', 'Taxonomy singular name', 'wptheme'),
        'search_items'      => __('Search Genres', 'wptheme'),
        'all_items'         => __('All Genres', 'wptheme'),
        'parent_item'       => __('Parent Genre', 'wptheme'),
        'parent_item_colon' => __('Parent Genre:', 'wptheme'),
        'edit_item'         => __('Edit Genre', 'wptheme'),
        'update_item'       => __('Update Genre', 'wptheme'),
        'add_new_item'      => __('Add New Genre', 'wptheme'),
        'new_item_name'     => __('New Genre Name', 'wptheme'),
        'menu_name'         => __('Genre', 'wptheme'),
    ];

    // Set other options for Custom Taxonomy
    // https://codex.wordpress.org/Function_Reference/register_taxonomy
    $args = [
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
    ];

    // Registering your Custom Taxonomy
    register_taxonomy('genre', ['post'], $args);
}

add_action('init', 'custom_taxonomy_genre', 0);
