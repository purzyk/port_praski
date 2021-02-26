<?php

/**
 * Registers a custom Navigation Menu in the custom menu editor
 */
function base_camp_register_menus()
{
    register_nav_menu('main_menu', __('Main menu', 'wptheme'));
    register_nav_menu('footer_menu', __('Footer menu', 'wptheme'));
    register_nav_menu('mobile_menu', __('Mobile menu', 'wptheme'));
}

add_action('after_setup_theme', 'base_camp_register_menus');
