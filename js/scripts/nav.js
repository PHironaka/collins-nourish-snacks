var $activeNav = $('.site-nav a.is-active');

if ( $activeNav.length ) {
    var $window = $(window),
        activeNavWidth,
        $navStyles;

    var setNavWidth = function() {
        var patternWidth = 14,
            navModulo = activeNavWidth % patternWidth,
            patternDifference,
            newActiveNavWidth;

        console.log(navModulo);


        if ( navModulo !== 0 ) {
            patternDifference = patternWidth - navModulo;
            newActiveNavWidth = activeNavWidth + patternDifference;

            if ( $navStyles ) {
                $navStyles.remove();
            }

            $navStyles = $('<style>.site-nav a.is-active::after{width:' + newActiveNavWidth + 'px;}</style>');
            $navStyles.appendTo('head');
        }
    }

    var checkNavWidth = function() {
        var currentActiveNavWidth = $activeNav.width();

        if ( currentActiveNavWidth !== activeNavWidth ) {
            activeNavWidth = currentActiveNavWidth;
            setNavWidth();
        }
    }

    $window.on({
        'resize.nav': _.throttle( checkNavWidth, 250 ),
        'load.nav': checkNavWidth
    });

    checkNavWidth();
}