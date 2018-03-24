$('.js-toggle').each(function() {
    var $this = $(this);

    $('<button class="js-toggle-trigger">' + $this.data('toggle-trigger') + '<span></span></button>').insertBefore( $this );
    $this.hide();
});

$('.js-toggle-trigger').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('is-active').next('.js-toggle').slideToggle("300");
});