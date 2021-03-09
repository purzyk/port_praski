<?php
/**
 * Template Name: Znajdź lokal
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$terms = get_terms('inwestycja');
$inwestycjaPosts = get_field('inwestycja');
$slogan = get_field('slogan', 'inwestycja_19');
$termsInwestycja = get_terms( array(
  'taxonomy' => 'inwestycja',
) );
$lokale = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'lokale','posts_per_page' => '-1', 'order' => 'ASC', 'tax_query' => array(
    array(
      'taxonomy' => 'inwestycja',
      'terms'    => $inwestycjaPosts,
    ),
  ),));
  

$context['postsLoop'] = $lokale;
$context['slogan'] = $slogan;
$context['termsInwestycja'] = $termsInwestycja;
$context['inwestycjaPosts'] = $inwestycjaPosts;
$dodatkowo = get_terms( 'dodatkowo', array('hide_empty' => true) );
$context['dodatkowo'] = $dodatkowo;
$context['categories'] = Timber::get_terms('inwestycja');


Timber::render(['page-znajdzLokal.twig', 'page.twig'], $context);
