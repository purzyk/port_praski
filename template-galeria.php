<?php
/**
 * Template Name: Galeria
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;


Timber::render(['page-galeria.twig', 'page.twig'], $context);
