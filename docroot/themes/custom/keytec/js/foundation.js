/**
 * @file
 * Foundation init script
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.foundation = {
    attach: function (context) {
      /*
      * fooo
      * */
      $('body', context).once('foundation').each(function() {
        $(document).foundation();
      });
    }
  };
})(jQuery, Drupal);
