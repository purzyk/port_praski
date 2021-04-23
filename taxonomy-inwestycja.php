<?php

$templates        = ['taxonomy-inwestycja.twig', 'index.twig'];
$context          = Timber::get_context();
$context['title'] = single_tag_title('', false);
$context['post']        = $post;
$term = get_queried_object();
$glowne_zdjecie = get_field('glowne_zdjecie', $term);
$slogan = get_field('slogan', $term);
$lead = get_field('lead', $term);
$slider = get_field('slider', $term);
$opis = get_field('opis', $term);
$context['glowne_zdjecie'] = $glowne_zdjecie;
$context['slider'] = $slider;
$context['slogan'] = $slogan;
$context['lead'] = $lead;
$context['opis'] = $opis;
$context['posts']      = new Timber\PostQuery();
$context['pagination'] = Timber::get_pagination($pagination_mid_size);
$dodatkowo = get_terms( 'dodatkowo', array('hide_empty' => true) );
$context['dodatkowo'] = $dodatkowo;
$cat = get_queried_object()->term_id;
$lokale = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'lokale','posts_per_page' => '-1', 'order' => 'ASC', 'tax_query' => array(
    array(
      'taxonomy' => 'inwestycja',
      'terms'    => $cat,
    ),
  ),));

foreach($lokale as $lokal) {
    $lokal->rzut_3D = get_the_post_thumbnail_url($lokal->ID, 'full'); ;
    $lokal->inwestycje =  wp_get_post_terms( $lokal->ID, 'inwestycja', array( 'fields' => 'names' ) );
  }
$context['postsLoop'] = $lokale;
$context['cat'] = $cat;
Timber::render($templates, $context);