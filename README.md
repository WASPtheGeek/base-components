# Shared components

## To publish a package:

- commit all your changes
- `npm run publish-package` to prepare files and publish package to git. During prep following commands are executed:
  - `npm run bundle` to create a dist folder
  - `npm version patch` to update version
  - `npm publish` to publish a package

How to publish an npm package with next.js?
With a great help:
https://www.niftylittleme.com/articles/creating-npm-packages-in-nextjs-for-nextjs?blogId=cly6fvtgc00018hk5e9njuckk%3Fslug%3Dcreating-npm-packages-in-nextjs-for-nextjs
