'use strict';

/**
 * @file
 * Foundation init script
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.foundation = {
    attach: function attach(context) {
      /*
      * fooo
      * */
      $('body', context).once('foundation').each(function () {
        $(document).foundation();
      });
    }
  };
})(jQuery, Drupal);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @file
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.test = {
    attach: function attach(context) {
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
      $('[data-scrollto]').click(function () {
        var scrollto = $(this).data('scrollto');
        var target;
        var offset = 0;

        if (scrollto == 'next') {
          //search and scroll to next container
          if ($('+ *', this).length) {
            target = $('+ *', this);
          } else {
            target = $($('+ *', $(this).parents())[0]);
          }
        } else {
          target = $(scrollto);
        }

        if (_typeof($(this).data('scrollto-offset')) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && $(this).data('scrollto-offset') !== false) {
          var scrolloffset = $(this).data('scrollto-offset');
          if ($.isNumeric(scrolloffset)) {
            offset = scrolloffset;
          } else if ($($(this).data('scrollto-offset')).length > 0) {
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
'use strict';

/**
 * @file
 * Initializes slider elements utilizing jQuery UI slider library.
 */

(function ($, Drupal) {
  'use strict';

  /**
   * Initialize slider elements.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior to initialize sliders.
   */

  Drupal.behaviors.foodSlider = {
    attach: function attach(context) {
      $('[data-slider]', context).once('foodSlider').each(function () {
        var isRange = $(this).attr('data-slider-range') === 'true';
        var value = $(this).attr('data-slider-value');

        // Prepare slider options.
        var options = {
          max: Number($(this).attr('data-slider-max')),
          min: Number($(this).attr('data-slider-min')),
          range: isRange ? true : 'min',
          step: Number($(this).attr('data-slider-step'))
        };

        // Set slider value(s).
        if (isRange) {
          options.values = value.split('|');
        } else {
          options.value = [value];
        }

        // Initilaize slider element.
        $(this).find('[data-slider-widget]').slider(options);
      });
    }
  };
})(jQuery, Drupal);
//# sourceMappingURL=script.js.map
