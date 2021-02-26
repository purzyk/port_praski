<?php

function get_template_messages()
{
    return [
        // 404 Page
        '404' => [
            'title'     => __('404 - Page not found.', 'wptheme'),
            'body'      => __('The page you have looked for does not exist.', 'wptheme'),
            'link_text' => __('Back to home page', 'wptheme'),
        ],

        // Article Component
        'article' => [
            'edit' => __('Edit', 'wptheme'),
        ],

        // Base Page
        'base' => [
            'no_content' => __('Sorry, no content', 'wptheme'),
        ],

        // Comment Form Page
        'comment_form' => [
            'name'                => __('Name', 'wptheme'),
            'email'               => __('Email', 'wptheme'),
            'website'             => __('Website', 'wptheme'),
            'comment'             => __('Comment', 'wptheme'),
            'comment_placeholder' => __('Enter your comment here...', 'wptheme'),
            'post_comment'        => __('Post Comment', 'wptheme'),
            'reset'               => __('Reset', 'wptheme'),
        ],

        // Comment Page
        'comment' => [
            'reply' => __('Reply', 'wptheme'),
        ],

        // Search Page
        'search' => [
            'no_results' => __('Sorry, No Results. Try your search again.', 'wptheme'),
        ],

        // Search Form Page
        'search_form' => [
            'search' => __('Search', 'wptheme'),
        ],

        // Single Password Page
        'single_password' => [
            'password' => __('Password', 'wptheme'),
            'submit'   => __('Submit', 'wptheme'),
        ],

        // Single Page
        'single' => [
            'edit'     => __('Edit', 'wptheme'),
            'comments' => __('Comments', 'wptheme'),
        ],
    ];
}
