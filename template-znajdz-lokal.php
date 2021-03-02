<?php
/**
 * Template Name: Znajdź lokal
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$terms = get_terms('inwestycja');
$lokale = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'lokale','posts_per_page' => '-1', 'order' => 'ASC'));
$context['postsLoop'] = $lokale;

Timber::render(['page-znajdzLokal.twig', 'page.twig'], $context);
