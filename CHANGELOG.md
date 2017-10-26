## 5.0.0 - 26.10.2017
### breaking changes
- renamed `.hidden-` to `.hide-`

## 4.1.5
- fixed `.show-##` bug

## 4.1.4
- optimized `setContrast` function

## 4.1.3
- improved `data-flex="grid"` for `<ul>`

## 4.1.2
- optimized `setContrast` function

## 4.1.1
- optimized `setContrast` function

## 4.1.0
- optimized `setContrast` function

## 4.0.0
### breaking changes
- changed `$base-size` to `$root-size`
- removed `/core/_body.scss`
- removed `/globals/_typo.scss`
- removed `/globals/globals.scss` to `/layout/layout.scss`
- moved `/core/_reset.scss` to `/_reset.scss`
- removed `/core`
- removed `/helper/_list.scss`, `/helper/_img.scss`, `/helper/_typo.scss`, `/helper/_padding.scss` and `/helper`
- moved `/helper/_hide.scss`, `/helper/_show.scss` and `/helper/_pull.scss` to `/layout`
- removed `@mixin gradient-striped`,  `@mixin stripes`
- removed `/mixins/_state.scss`
- renamed `[data-flex~="tile"]` to `[data-flex~="tiles"]`

### changes
- optimized `setContrast` for best contrast and opacity support

### added
- new function `flattenColor()`  
- new function `getBreakpoint()`  
- new mixin `media()`  
- new mixin `set-colors()`  
- new attribute for `data-row` - `small-grid`  

## 3.0.16
### changed
- fixed `data-flex="grid"` width bug

## 3.0.15
### changed
- removed list-style for `ul` using `[data-flex]`;

## 3.0.14
### added
- easy grid for `data-flex="grid"` 

## 3.0.13
### changed
- fixed `data-flex="grid"` gutter bug

## 3.0.12
### changed
- fixed `data-flex="grid"` width bug

## 3.0.11
### changed
- changed `$threshold: 7; // 4.5 = WCAG AA,7= WCAG AAA` in `setContrast()` function
- renamed `textContrast` function in `setContrast`
- removed whitespace

## 3.0.10
### changed
- optmized `getColor` function, base colors can be retrieved just writing `getColor(link)`, other values of `$colors` can be retrieved with `getColor(text, invert)`.

## 3.0.9
### removed
- unitSize function
- button-style mixin

### added
- responsive breakpoints to all `data-flex` values e.g. `data-flex="column-xs"`

### changed
- changed all variables to kebap-case
- breakpoints to
    - `$bp-xs`: 0
    - `$bp-sm`: 480px
    - `$bp-md`: 720px
    - `$bp-lg`: 1024px
    - `$bp-xl`: 1280px
    - `$bp-xxl`: 1920px

## 3.0.8
### added
- data-row value no-gutter `data-row="no-gutter"`
- data-flex value no-gutter `data-flex="no-gutter"`

## 3.0.7
### changed
- changed `data-flex-col` to `data-col

## 3.0.6
### added 
- `data-flex` with `data-flex="grid" 

### changed
- added a folder for grid `globals/grid/grid.scss`
- moved grid config variables to `_config.scss`

## 3.0.5

### added 
- new mixin `setText`
- new function `nearest` 

### deprecations
- mixins/state
- mixins/unitSize

## 3.0.4

### added 
- responsive reset for offset-columns e.g. `data-col="+0sm"`
``
### removed
- unused mixin in `_grid-column-offset.scss

## 3.0.3

### changed
 - removed `°` character in comments

## 3.0.2

### added 
- new mixin `headings.scss`

### changed
- `_varColor.scss` function for colors with alpha transparency

## 3.0.1
### removed
- `sandbox.scss`

## 3.0.0
### changed
- simplified helper classes for show and hide  
- Fix typos in zh-CN translation.
- Fix typos in pt-BR translation.

### breaking changes`
- deleted `core/_typo.scss`
- deleted `globals/_btn.scss`
- deleted `globals/_dl.scss`
- deleted `globals/_fieldset.scss`
- deleted `globals/_figure.scss`
- deleted `globals/_form.scss`
- deleted `globals/_headings.scss`
- deleted `globals/_nav.scss`
- deleted `globals/_scrollbar.scss`
- deleted `globals/_table.scss`
- deleted `%ellipsis`
- removed unused variables from `config.scss`
- removed bower

## 2.2.1
### changed
- optimized grid styles

### added
- responsive grid sorting styles

## 2.1.5
- initial public release on github
