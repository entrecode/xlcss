# xlcss - dragon fruit
scss framework with a set of mixins, functions, resets and global styles.

## development

To install all required dependencies for development, run

```
npm install xlcss
```

To build the `dist/xlcss.css` and `dist/xlcss.min.css` files out of the `sass/*` files including the docs, run 

```
npm run build
```

### Update
## update to 6.0.0
- globally find and replace all breakpoint variable
    - `$bp-xs` => `getBreakpoint(xs)`,
    - `$bp-xs-max` => `getBreakpoint(xs, max)`