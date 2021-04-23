<?php
/**
 * Template Name: Znajdź lokal
 */

$context         = Timber::get_context();
$post            = new TimberPost();
$context['post'] = $post;
$inwestycjaPosts = get_terms('inwestycja');
$termsTest = get_field('inwestycja');
$inwestycjaPosts =  array(
  19
);
/*$inwestycjaPosts = get_field('inwestycja');*/
foreach( $termsTest as $post ) {
  $id = $post->term_id;
$lokaleLoop[] = $id;
}
foreach( $termsTest as $post ) {
  $id = $post->term_id;
  $slug = $post->slug;
  $title = $post->name;
  $lokaleFiltry[] = array(
    'id' => $id,
    'slug' => $slug,
'image' => get_field('glowne_zdjecie', 'term_'.$id), 
'title' => $title, 
);
}
$slogan = get_field('slogan', 'inwestycja_19');
$termsInwestycja = get_terms( array(
  'taxonomy' => 'inwestycja',
) );
$lokale = Timber::get_posts(array('orderby' => 'title', 'post_type' => 'lokale','posts_per_page' => '-1', 'order' => 'ASC', 'tax_query' => array(
    array(
      'taxonomy' => 'inwestycja',
      'terms'    => $lokaleLoop,
    ),
  ),));
  
  foreach( $lokale as $post ) {
    $id = $post->ID;
		$permalink = substr(get_permalink( $post->ID ), 0, -1);
        $post_thumbnail = ( has_post_thumbnail( $id ) ) ? get_the_post_thumbnail_url( $id, array(800,577)) : null;
		$powierzchnia = get_field('powierzchnia', $id);
		$inwestycja =  wp_get_post_terms( $post->ID, 'inwestycja', array( 'fields' => 'names' ) );
		$typ = get_field('typ', $id);
		$liczba_pokoi = get_field('liczba_pokoi', $id);
		$pietro = get_field('pietro', $id);
		$status = get_field('status', $id);
		
		$lokaleNew[] = array(
            'status' => $status,
			'url' => $permalink,
            'nr_lokalu' => get_the_title( $id ),
            'rzut_3D' => $post_thumbnail,
			'powierzchnia' => $powierzchnia,
			'inwestycja' => $inwestycja,
			'typ' => $typ,
			'liczba_pokoi' => $liczba_pokoi,
			'pietro' => $pietro,
        );
}

$context['postsLoop'] = $lokaleNew;
$context['slogan'] = $slogan;
$context['lokaleFiltry'] = $lokaleFiltry;
$context['inwestycjaPosts'] = $inwestycjaPosts;
$dodatkowo = get_terms( 'dodatkowo', array('hide_empty' => true) );
$context['dodatkowo'] = $dodatkowo;
$context['categories'] = Timber::get_terms('inwestycja');


Timber::render(['page-znajdzLokal.twig', 'page.twig'], $context);