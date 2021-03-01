<?php
/**
 * Template Name: Wizja
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;


Timber::render(['page-wizja.twig', 'page.twig'], $context);
