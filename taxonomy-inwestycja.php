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

Timber::render($templates, $context);
