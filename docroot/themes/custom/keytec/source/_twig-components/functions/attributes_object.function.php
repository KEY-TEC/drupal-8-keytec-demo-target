<?php

use Drupal\Core\Template\Attribute;

$function = new Twig_SimpleFunction(
  'attributes_object',
  /**
   * Builds attributes object.
   *
   * @param array $attributes
   *
   * @return object
   *   Drupal attributes object
   */
  function ($attributes = array()) {
    return new Attribute($attributes);
  },
  array()
);
