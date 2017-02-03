[![Build Status](https://travis-ci.com/BurdaMagazinOrg/theme-food.svg?token=eFqBQ7QeZqSCA9DcjnWC&branch=8.x-1.x)](https://travis-ci.com/BurdaMagazinOrg/theme-food)

## Requirements

* [Composer](https://getcomposer.org/)
* [Node.js/npm](https://nodejs.org)

## QuickStart

    npm install
    npm start

If you're using Drupal 8, get the 
[Component Libraries module](https://www.drupal.org/project/components) to have
Twig namespaces for all component types available in Drupal:

    drush dl components
    drush en components -y

That's it.

## Orientation

* `source/_patterns/` - contains all Pattern Lab templates and the majority of 
  the Sass files.
* `scss/` - Sass files that aren't really tied to a component, so not in the 
  above location.
* `js/` - all JS files here are transpiled by Babel and combined into a single 
  `dest/script.js` file. Please group related JS files in subdirectories. 
  **NOTICE:** All files are combined alphabetically by their path. So if you 
  need a special order, please use prefixes to move files/directories to the
  start/end of the compilation process
* `icons/src/` - all SVGs here are combined into font icons and have classes and 
  Sass mixins made for each based on file name. See `Atoms` / `Icons` in Pattern 
  Lab.
* `images/sample` - all demo image files should be located here (with 
  pattern-specific subdirectories).
* `dest/sassdoc/` - Open this in a browser to see documentation on all Sass 
  thanks to [SassDoc](http://sassdoc.com).

## Commands

Compile everything:

```bash
npm run compile
```

Start up watches and local server after compiling:

```bash
npm run start # or `npm start`
```

Run Tests:

```bash
npm run test # or `npm test`
```

Create a new component folder in Pattern Lab with scss, twig, md, & yml/json by 
running:

```bash
npm run new
```

---

**Please see the `docs/` folder for more details!**

---

### Useful links

* [Pattern Lab](http://patternlab.io/)
* [Data Transform Plugin for Pattern Lab](https://github.com/aleksip/plugin-data-transform)
