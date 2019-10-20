$(function() {
  $( "#tabs" ).tabs({ classes: { "ui-tabs-panel": "row" } });
  $( "#tabs2" ).tabs();
  $('.single-item').slick({
    dots: true,
  
    prevArrow: '\
      <div class="prev-arrow">\
        <span><</span>\
        <button type="button" class="slick-prev"></button>\
      </div>\
    ',
    nextArrow: '\
      <div class="next-arrow">\
        <span>></span>\
        <button type="button" class="slick-next"></button>\
      </div>\
    '
  });
  $('.section-open').on('click', function(e){
    e.preventDefault();
    $('.section-open').parents('.section-bg').addClass('open');
  });
  $('.btn-toggle').on('click', function(e){
    e.preventDefault();
    $('.btn-toggle').parents('#header').toggleClass('open');
  });
  
});