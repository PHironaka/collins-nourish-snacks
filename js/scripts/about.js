$('.about__opener-icons').on('click', function() {
  $(this).toggleClass('opened closed')
  $(this).parent().next().toggleClass('opened closed')
})
