<?php

/*
|--------------------------------------------------------------------------
| Pagination mid size
|--------------------------------------------------------------------------
|
| Here you can define that how many pagination items there are before and after current
| pagination item in pagination list. First and last item are always visible.
|
| For example:
| $pagination_mid_size = 1 => 1 ... 5 [6] 7 ... 11
| $pagination_mid_size = 2 => 1 ... 4 5 [6] 7 8 ... 11
| $pagination_mid_size = 3 => 1 ... 3 4 5 [6] 7 8 9 ... 11
| $pagination_mid_size = 3 => 1 2 3 4 [5] 6 7 8 ... 11
|
| Supported Mid size value: 1 - n
|
*/

$pagination_mid_size = 2;

$pagination_mid_size += 2; // DON'T TOUCH

/*
|--------------------------------------------------------------------------
| Template paths
|--------------------------------------------------------------------------
|
| Here you may specify an array of paths where to load templates.
|
| Default path: 'resources/views'
|
*/

Timber::$dirname = ['resources/views'];

/**
 * Adds data to Timber context.
 *
 * @param $data
 *
 * @return mixed
 */
function add_to_context($data)
{
    //$data['lang'] 						= icl_get_languages('skip_missing=0&orderby=code');
    //$data['curr_lang'] 					= ICL_LANGUAGE_CODE;
    // Add Main Menu to Timber context object
    $data['mainMenu'] = new TimberMenu('main_menu');
    $data['footerMenu'] = new TimberMenu('footer_menu');
    $data['mobileMenu'] = new TimberMenu('mobile_menu');

    // Add main-sidebar to Timber context object
    $data['main_sidebar'] = Timber::get_widgets('main-sidebar');

    // Add Locale strings to Timber context object
    $data['messages'] = get_template_messages();

    // Logo
    $data['logo'] = images_path('wptheme-logo.png');

    // Favicon
    $data['favicon'] = images_path('favicon.png');

    // Current Template File Name
    $data['current_template_file'] = basename($GLOBALS['template']);

    // Extend TimberSite object
    $data['site'] = new BaseCampSite();

    $data['in_production'] = bc_env('MODE', 'production') === 'production';

    return $data;
}

add_filter('timber_context', 'add_to_context');
