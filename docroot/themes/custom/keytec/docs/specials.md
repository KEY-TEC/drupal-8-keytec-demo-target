## Specials

The project contains some special files that are handled auto-magically ;)

* `source/_patterns/00-base/01-colors/_color-vars.scss` - all contained variables
  with `$c-` prefix are used to compile the 
  `source/_patterns/00-base/01-colors/colors.json` file automatically in order 
  to have color previews in Pattern Lab
* `source/_patterns/00-base/02-typography/00-font-sizes/_font-sizes.scss` - all
  contained variables with `$fs--` prefix are used to compile the
  `source/_patterns/00-base/02-typography/00-font-sizes/font-sizes.json` file
  automatically in order to have font size previews in Pattern Lab
* `scss/00-config/_breakpoints.scss` - all contained variables with `$bp--` 
  prefix are used to compile the 
  `source/_patterns/00-base/breakpoints/breakpoints.json` file automatically in
  order to have breakpoint previews in Pattern Lab
* `scss/00-config/_spacing.scss` - all variables with `$spacing--` prefix are 
  used to compile the `source/_patterns/00-base/spacing/spacing.json` file 
  automatically in order to have spacing previews in Pattern Lab
* `scss/00-config/_icons.scss` - this file is generated automatically based on 
  the SVG icons in `icons/src/` (while using the `icons/templates/_icons.scss`
  template file. If you have to make modifications, they should go in here)
* `source/_patterns/01-atoms/icons/icons.twig` - this file is generated 
  automatically based on the SVG icons in `icons/src/` (while using the 
  `icons/templates/icons.twig` template file. If you have to make modifications, 
  they should go in here
