<?php
/**
 * Template Name: Kontakt
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$komunikatyLoop = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'komunikaty','posts_per_page' => '-1', 'order' => 'ASC'));
$context['komunikatyLoop'] = $komunikatyLoop;

Timber::render(['page-kontakt.twig', 'page.twig'], $context);
