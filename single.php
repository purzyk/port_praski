<?php

$context                = Timber::get_context();
$post                   = new TimberPost();
$context['post']        = $post;
$context['post_type']        = get_post_type( $post->ID );
$dodatkowo = get_field('dodatkowo');
$inwestycja = get_the_terms( $post->ID, 'inwestycja' );
$context['inwestycja'] = $inwestycja;
$context['dodatkowo'] = $dodatkowo;
$pdf = get_field('pdf');
$base_path = dirname( __DIR__ );
$context['pdf'] = $pdf;
$context['cancel_link'] = get_cancel_comment_reply_link(__('Cancel reply', 'wptheme'));

if (post_password_required($post->ID)) {
    Timber::render('single-password.twig', $context);
} else {
    $post_type = $post->post_type === 'revision' ? get_post_type($post->post_parent)  : $post->post_type;
    Timber::render(['single-' . $post->ID . '.twig', 'single-' . $post_type . '.twig', 'single.twig'], $context);
}
