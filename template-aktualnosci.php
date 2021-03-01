<?php
/**
 * Template Name: Aktualności
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;


Timber::render(['page-aktualnosci.twig', 'page.twig'], $context);
