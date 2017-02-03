## Conventions

### SCSS/CSS

* We rely on [BEM](http://getbem.com/naming/) for naming our classes: 
  `component--modifier__element`
* We also make use of the _Responsive Suffixes_ as introduced in 
  [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
* For binding JS-functionality we make use of `data-`-Attributes and avoid using
  classes or IDs as selectors. 
* Within a Pattern Lab component we have some special scss files:
  * `[component].scss`: styling for this component only
  * `_00.vars.scss`: Holds any component specific SCSS-Variables
  * `_xx.overrides.scss`: In rare cases a "hack" is a better approach than
    building yet another variant. The overrides.scss shall only hold overrides
    the given component: e.g. `.context .component { margin-top: 0; }`
  * `_00.[component].js.scss`: In case the given component is associated to a JS
    handling, this is where the default attribute-based styles go into
    
### Component assets
    
* Place component-specific image files in the component directory, to have all 
  required component assets grouped - these images will automatically be 
  processed/optmized by the compilation script and saved in the `dest/` 
  directory
* When linking assets (CSS, JS, image files etc.), always use the auto-generated 
  derivatives in `dest/`, because this directory contains the optimized files to 
  use. Please also keep in mind to use the correct relative path, to avoid 
  broken paths on other hosts

### Templates

* Suppress whitespaces in templates where necessary (see 
  [Twig documentation](http://twig.sensiolabs.org/doc/templates.html#whitespace-control))
* Do not produce dead code! So if you output a Twig variable that has a wrapper
  element, please ensure that this wrapper is not rendered when the variable is 
  empty
* Surround variable outputs with Twig blocks where useful, to allow easy 
  template implementation in Drupal (so data may be injected via variable or
  Twig block)
* Use `modifier_class()` Twig function for the implementation of possible 
  component variations, but also allow Drupal's attribute objects in templates
