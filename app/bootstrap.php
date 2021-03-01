<?php

use Basecamp\Utils\Session;

// Load all composer packages
require_once __DIR__ . '/../vendor/autoload.php';

// Init Timber
$timber = new \Timber\Timber();

// Init Dotenv
$dotenv = new Dotenv\Dotenv(__DIR__ . '/..');
$dotenv->load();

// Load WordPress config files
require_once __DIR__ . '/../app/config/autoload.php';

// Init Sessions
Session::init();

/**
 * Loads the theme's translated strings.
 */
function localize()
{
    load_theme_textdomain('wptheme', get_template_directory() . '/resources/languages');
}

require_once __DIR__ . '/../app/utils/Misc.php';


function add_timber_context_options( $context ) {
    $context['options'] = get_fields('options');
    return $context;
}
add_filter( 'timber_context', 'add_timber_context_options'  );


remove_action('wpcf7_init', 'wpcf7_add_form_tag_submit');

add_action('wpcf7_init', 'twentysixteen_child_cf7_button');

/*adding out submit button tag*/
if (!function_exists('twentysixteen_child_cf7_button')) {
    function twentysixteen_child_cf7_button() {
    wpcf7_add_form_tag('submit', 'twentysixteen_child_cf7_button_handler');
    }
    }

    /*out button markup inside handler*/
if (!function_exists('twentysixteen_child_cf7_button_handler')) {
    function twentysixteen_child_cf7_button_handler($tag) {
    $tag = new WPCF7_FormTag($tag);
    $class = wpcf7_form_controls_class($tag->type);
    $atts = array();
    $atts['class'] = $tag->get_class_option($class);
    $atts['class'] .= ' twentysixteen-child-custom-btn';
    $atts['id'] = $tag->get_id_option();
    $atts['tabindex'] = $tag->get_option('tabindex', 'int', true);
    $value = isset($tag->values[0]) ? $tag->values[0] : '';
    if (empty($value)) {
    $value = esc_html__('Contact Us', 'twentysixteen');
    }
    $atts['type'] = 'submit';
    $atts = wpcf7_format_atts($atts);
    $html = sprintf('<button class="btn">%2$s</button>', $atts, $value);
    return $html;
    }
    }


