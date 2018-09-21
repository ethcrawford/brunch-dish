# brunch-dish

Static site builder. Now version 1.3.0.

This is a HTML5 application, built with [Brunch](http://brunch.io).

## Getting started

- Install (if you don't have them):
  - [Node.js](http://nodejs.org): `brew install node` on OS X
  - [Brunch](http://brunch.io): `npm install -g brunch`
  - Brunch plugins and app dependencies: `npm install`
- Run:
  - `npm run watch` — watches the project with continuous rebuild.
  - `npm run build` — builds minified project for production
- Learn:
  - `public/` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
  - Place static files you want to be copied from `app/assets/` to `public/`.
  - [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## Auto-reload

This build does not include automatic reload for server. If your need it
- Run:
  - `npm i auto-reload-brunch --save-dev` — It will work out of the box.

  The server reload script will be placed in the output file.js. When the `npm run build` command is executed, it will be deleted.

## Other useful products

Сan be used as separate parts to not clutter the project.

- [png-chef](https://github.com/ethcrawford/png-chef) - Cook your png sprite.
- [svg-baker](https://github.com/ethcrawford/svg-baker) - Bake your svg sprite.
- [washer](https://github.com/ethcrawford/washer) - Wash your images.
- [prefix-helper](https://github.com/ethcrawford/prefix-helper) - Run autoprefixer from cli.
