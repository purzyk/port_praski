<?php

/**
 * Register scripts and styles and enqueue them
 */
function base_camp_scripts_and_styles()
{
    // Helps to prevent CSS caching
    $suffix = bc_env('MODE', 'production') === 'development' ? '?' . bc_random_string(16) : '';

    // Register styles
    wp_register_style('wptheme-styles', assets('styles.css') . $suffix, [], '', 'all');
        // Register scripts
    wp_register_script('wptheme-vendor', assets('vendor.js'), [], '', true);
    wp_register_script('wptheme-scripts', assets('scripts.js') . $suffix, ['wptheme-vendor'], '', true);
    wp_register_script( 'wptheme-slider', get_template_directory_uri() . '/js/bootstrap-slider.js' );
    wp_register_script( 'wptheme-jPages', get_template_directory_uri() . '/js/jPages.min.js' );
    wp_register_script( 'wptheme-ion.rangeSlider', get_template_directory_uri() . '/js/ion.rangeSlider.min.js' );
    wp_register_script( 'wptheme-mixitup', get_template_directory_uri() . '/js/mixitup.min.js' );
    wp_register_script( 'wptheme-mixitup-multifilter', get_template_directory_uri() . '/js/mixitup-multifilter.js' );
    
       

    // Enqueue scripts and styles
    
    wp_enqueue_script('wptheme-scripts');
    wp_enqueue_script('wptheme-vendor');
    wp_enqueue_script('wptheme-slider');
    wp_enqueue_script('wptheme-ion.rangeSlider');
    wp_enqueue_script('wptheme-jPages');
    wp_enqueue_script('wptheme-mixitup');
    wp_enqueue_script('wptheme-mixitup-multifilter');
    wp_enqueue_style('wptheme-styles');

    // comment reply script for threaded comments
    if (is_singular() && comments_open() && (get_option('thread_comments') == 1)) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'base_camp_scripts_and_styles', 999);
