<?php
/**
 * Template Name: Aktualności
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$postLoop = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'post','posts_per_page' => '-1', 'order' => 'ASC'));
$context['postLoop'] = $postLoop;

$wydarzeniaLoop = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'wydarzenia','posts_per_page' => '-1', 'order' => 'ASC'));
$context['wydarzeniaLoop'] = $wydarzeniaLoop;

$dniotwarteLoop = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'dni_otwarte','posts_per_page' => '-1', 'order' => 'ASC'));
$context['dniotwarteLoop'] = $dniotwarteLoop;


Timber::render(['page-aktualnosci.twig', 'page.twig'], $context);
