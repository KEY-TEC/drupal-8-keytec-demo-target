## Images

Required images should be saved in special folders, so the compilation script 
can process/optimize them correclty and save them to the `dest/` directory.

* Component-specific images have to be saved in 
  `source/_patterns/[COMPONENT_TYPE]/[COMPONENT]/`
* Component-unspecific images have to be saved somewhere useful in `images/`
* Demo images have to be saved in `images/demo/` within a component-specific 
  subdirectory

## SVGs

Use `sketch/items.sketch` for SVGs that need preprocessing/redrawing etc.

**NOTICE:** Please inform other team members when making changes to the Sketch 
file to avoid binary merge conflicts!
