<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>MATTE Gallery <?php wp_title( '|', true, 'left' ); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
        <script src="<?php bloginfo('url'); ?>/wp-content/themes/matte-gallery-v1/js/vendor/modernizr-2.8.3.min.js"></script>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <header id="header">
            <div class="inner-wrap content-wrapper">
                <a href="<?php bloginfo( 'url' ); ?>">
                    <div id="logo">
                        <img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/matte-gallery-v1/img/logo.png" alt="MATTE">
                    </div>
                </a>
                <div id="nav">
                    <ul>
                        <li>
                            <button class="text-0" id="contact">contact</button>
                        </li>
                    </ul> 
                </div>
                <div class="clear"></div>               
            </div>
        </header>
        <div class="content-wrapper">
