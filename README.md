# xlcss - dragon fruit

scss framework with a set of mixins, functions, resets and global styles.
This framework is deprecated. please go to <https://github.com/entrecode/x.ui>

## development

To install all required dependencies for development, run

```sh
npm i xlcss --save
```

To build the `dist/xlcss.css` and `dist/xlcss.min.css` files out of the `sass/*` files including the docs, run 

```sh
npm run build
```

## Update Information

### update to 6.0.0

- globally find and replace all breakpoint variable
  - `$bp-xs` => `getBreakpoint(xs)`,
  - `$bp-xs-max` => `getBreakpoint(xs, max)`

***

[imprint & privacy](https://entrecode.de/datenschutz)