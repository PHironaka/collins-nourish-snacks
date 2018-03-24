var $bites = $('.bites__grid'),
    $biteItems;

var updateBiteColors = function(el) {
    var $el = $(el),
        primaryColor = $el.data('primary-color'),
        secondaryColor = $el.data('secondary-color');

    $el.closest('.bites').css({
        'background-color': primaryColor,
        'color': secondaryColor
    });

    $('.mission').css({
        'color': primaryColor
    }).find('strong').css({
        'color': secondaryColor
    });
}

var addBiteHover = function() {
    $biteItems.addClass('is-hovered');
}

var removeBiteHover = function() {
    $biteItems.removeClass('is-hovered');
}

if ( $bites.length ) {
    $bites.flickity({
        // options
        wrapAround: true,
        watchCSS: true,
        pageDots: false,
        prevNextButtons: false
    });

    // get the instance
    var flkty = $bites.data('flickity');

    $bites.on( 'select.flickity', function() {
        updateBiteColors( flkty.selectedElement );
    });

    // hover
    $biteItems = $bites.find('.bite__link');
    $biteItems.on('mouseenter', function() {
        updateBiteColors( $(this).closest('.bite__item')[0] );
        addBiteHover();
    }).on('mouseleave', removeBiteHover);
}