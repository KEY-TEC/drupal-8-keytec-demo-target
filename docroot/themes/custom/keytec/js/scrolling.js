/**
 * @file
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.test = {
    attach: function (context) {
      /**
       * simple scrollto
       *
       * Usage:
       * <tag data-scrollto=".scroll-to-element-selector" [data-scrollto-offset="value-or-selector"]
       *
       * - set data-scrollto with an selector of the element you want to scroll to
       *   or just set "next" as value to automatically scroll to the next neighbour element found - useful for section scrolling.
       * - set data-scrollto-offset if you need an offset to the scroll position. value in or selector possible
       * */
      $('[data-scrollto]').show();
      $('[data-scrollto]').click(function() {
        var scrollto = $(this).data('scrollto');
        var target;
        var offset = 0;

        if(scrollto=='next') {//search and scroll to next container
          if($('+ *', this).length) {
            target = $('+ *', this);
          }else {
            target = $($('+ *', $(this).parents())[0]);
          }
        }else {
          target = $(scrollto);
        }

        if(typeof $(this).data('scrollto-offset') !== typeof undefined && $(this).data('scrollto-offset') !== false) {
          var scrolloffset = $(this).data('scrollto-offset');
          if($.isNumeric(scrolloffset)) {
            offset = scrolloffset;
          }else if($($(this).data('scrollto-offset')).length>0) {
            offset = $($(this).data('scrollto-offset')).outerHeight(true);
          }
        }

        $('html,body').animate({
          scrollTop: target.offset().top - offset
        }, 500);
      });

    }
  };
})(jQuery, Drupal);
