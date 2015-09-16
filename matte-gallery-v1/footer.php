        </div>
        <footer class="<?php if ( is_home() ) : ?>white-text<?php else : ?> black-text<?php endif; ?>">
            <div class="footer-content">
                <div class="footer-column">
                    <div class="text-2">Finish</div>
                    <p>For any inquiries, please reach us at: <br /><a href="mailto:info@matte-finish.org">info@matte-finish.org</a><br />T. +1 212 256 1942</p>
                </div>
                <div class="footer-column">
                    <div class="text-2">Films</div>
                    <p>If you would like to see more of our film <br />work, please visit us at: <br /><a href="http://www.matte-films.com" target="_blank">www.matte-films.com</a></p>
                </div>
                <div class="footer-column">
                    <div class="text-2">Talent</div>
                    <p>If you are interested in joining our team, <br />please send a resume/portfolio to: <br /><a href="mailto:careers@matte-finish.com">careers@matte-finish.com</a></p>
                </div>
            </div>
            <div class="italic text-2">What a long strange trip its been.</div>
            <div class="designed-by-matte">Designed by Matte</div>
        </footer>
        <script src="<?php bloginfo('url'); ?>/wp-content/themes/matte-gallery-v1/js/vendor/jquery-1.11.3.min.js"></script>
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>-->
        <script src="<?php bloginfo('url'); ?>/wp-content/themes/matte-gallery-v1/js/plugins.js"></script>
        <script src="<?php bloginfo('url'); ?>/wp-content/themes/matte-gallery-v1/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
        <?php wp_footer(); ?>
    </body>
</html>
