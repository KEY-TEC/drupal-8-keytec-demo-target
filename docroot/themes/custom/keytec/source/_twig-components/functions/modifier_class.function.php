<?php

$function = new Twig_SimpleFunction(
  'modifier_class',
  /**
   * Builds modifier class(es).
   *
   * @param string $base_class
   *   The base class to be "modified", e.g. `my-class`
   * @param string|array $modifier
   *   One or more modifier strings, either as array, space-separated string or
   *   array of space-separated strings
   *
   * @return string
   *   A space-separated string of modifier classes. If modifier is empty an
   *   empty string will be returned.
   */
  function ($base_class, $modifier) {
    // Modifier may be an array or a whitespace separated string, or both. So we
    // first glue everything together and split afterwards to get an array of
    // modifiers.
    if (is_array($modifier)) {
      $modifier = implode(' ', $modifier);
    }
    $modifiers = array_filter(array_unique(explode(' ', $modifier)));
    foreach ($modifiers as &$mod) {
      $mod = $base_class . '--' . $mod;
    }
    return implode(' ', $modifiers);
  },
  array()
);
