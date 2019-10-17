$(function() {
  $( "#tabs" ).tabs({ classes: { "ui-tabs-panel": "row" } });
  $( "#tabs2" ).tabs();
  $('.single-item').slick({
  });
  $('.section-open').on('click', function(e){
    e.preventDefault();
    $('.section-open').parents('.section-bg').addClass('open');
  });
});