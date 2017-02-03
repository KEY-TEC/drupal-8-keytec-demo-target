<?php

$function = new Twig_SimpleFunction(
  'modifier_array',
  /**
   * Builds an array of modifier strings.
   *
   * @param string|array $modifier
   *   One or more modifier strings, either as array, space-separated string or
   *   array of space-separated strings
   *
   * @return string
   *   An array of single modifiers.
   */
  function ($modifier) {
    // Modifier may be an array or a whitespace separated string, or both. So we
    // first glue everything together and split afterwards to get an array of
    // modifiers.
    if (is_array($modifier)) {
      $modifier = implode(' ', $modifier);
    }
    return array_filter(array_unique(explode(' ', $modifier)));
  },
  array()
);
