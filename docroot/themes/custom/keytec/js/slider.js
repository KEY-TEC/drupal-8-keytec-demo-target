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
    attach: function (context) {
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
        }
        else {
          options.value = [value];
        }

        // Initilaize slider element.
        $(this).find('[data-slider-widget]').slider(options);
      });
    }
  };
})(jQuery, Drupal);
