## Assets

Install front end libraries with:

    bower install {project-name} --save-dev

Inject all necessary JS/CSS files into Pattern Lab by extending the 
```gulpconfig.yml``` file in the following section:
    
    patternLab:
      injectFiles:
        - path/to/file.js
        - path/to/file.css
        
Extend ```food.libraries.yml``` with all necessary information, so Drupal will 
also be capable of loading a particular library.

**NOTICE:** If you need to install a library for Pattern Lab that is already 
shipped with Drupal core, perform the steps above, but only add the correct 
dependency in ```food.libraries.yml``` instead of duplicating a library 
definition.
