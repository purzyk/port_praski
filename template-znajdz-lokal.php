<?php
/**
 * Template Name: Znajdź lokal
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;


Timber::render(['page-znajdzLokal.twig', 'page.twig'], $context);
