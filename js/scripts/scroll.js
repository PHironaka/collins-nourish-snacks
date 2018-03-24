var $scrolledTrigger = $('.js-scrolled-trigger').first();

if ( $scrolledTrigger.length ) {
    // set some base vars
    var $window = $(window),
        $menu = $('[role="banner"]'),
        menuHeight,
        triggerOffset,
        currentlyScrolled = false;

    var scrolledSetup = function() {
        menuHeight = $menu.outerHeight( true );

        triggerOffset = $scrolledTrigger.offset().top;
    }

    var scrolledCheck = function() {
        scrolledSetup();

        var scrollPosition = $window.scrollTop();

        if ( scrollPosition + menuHeight >= triggerOffset ) {
            console.log('scrolled');
            if ( !currentlyScrolled ) {
                $menu.addClass('is-scrolled');
                currentlyScrolled = true;
            }
        } else {
            console.log('not scrolled');
            if ( currentlyScrolled ) {
                $menu.removeClass('is-scrolled');
                currentlyScrolled = false;
            }
        }
    }

    $window.on({
        'scroll.scrolled': _.throttle( scrolledCheck, 250 ),
        'resize.scrolled': _.throttle( scrolledSetup, 250 )
    });

    scrolledSetup();
}