#xlcss

##development
To install all required dependencies for development, run

```
npm install
```

To build the `dist/xlcss.css` and `dist/xlcss.min.css` files out of the `sass/*` files, run 

```
gulp build
```

During development, you can also use the sass watch task. It runs the build task whenever a file change in `sass/*` is triggered.

```
gulp sass:watch
```