(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.teaserHover = {
    attach: function (context) {
      $('[data-hover]', context).once('teaserHover').mouseover(function() {
        var src = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-hover"));
        $(this).attr("data-hover", src);
      }).mouseout(function() {
        var src = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-hover"));
        $(this).attr("data-hover", src);
      });
    }
  };
})(jQuery, Drupal);
