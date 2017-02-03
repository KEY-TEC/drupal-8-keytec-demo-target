<?php

namespace Drupal\keytec_theme\TwigExtension;

use Drupal\Core\Template\Attribute;
use Drupal\Core\Template\TwigExtension;

/**
 * Class KeytecTheme.
 *
 * @package Drupal\keytec_theme\TwigExtension
 */
class KeytecTheme extends TwigExtension {

  /**
   * @inheritdoc
   */
  public function getFunctions() {
    return [
      new \Twig_SimpleFunction('modifier_array', array($this, 'modifierArray')),
      new \Twig_SimpleFunction('modifier_class', array($this, 'modifierClass')),
      new \Twig_SimpleFunction('attributes_object', array($this, 'attributesObject')),
    ];
  }

  /**
   * @inheritdoc
   */
  public function getName() {
    return 'keytec_theme';
  }

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
  public static function modifierClass($base_class, $modifier) {
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
  }

  /**
   * @param $attributes
   */
  public static function attributesObject($attributes = array()) {
    return new Attribute($attributes);
  }
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
   public static function modifierArray ($modifier) {
    // Modifier may be an array or a whitespace separated string, or both. So we
    // first glue everything together and split afterwards to get an array of
    // modifiers.
    if (is_array($modifier)) {
      $modifier = implode(' ', $modifier);
    }
    return array_filter(array_unique(explode(' ', $modifier)));
  }
}
