<?php
/**
 * Template Name: Galeria
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$galeria = Timber::get_posts(array('post_type' => 'galeria','posts_per_page' => '-1'));
$context['galeriaLoop'] = $galeria;
$terms2 = get_terms('kategoria_zdjec', array('orderby' => 'id'));
$context['terms2'] = $terms2;
Timber::render(['page-galeria.twig', 'page.twig'], $context);
