# brunch-dish (Brunch dish &amp; Soda machine)

Project stub with Brunch & Gulp. Now version 4.0.0.

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

## Other helpers

Сan be used as separate parts to not clutter the project.

- [png-chef](https://github.com/ethcrawford/png-chef) - Cook your png sprite.
- [svg-baker](https://github.com/ethcrawford/svg-baker) - Bake your svg sprite.
- [washer](https://github.com/ethcrawford/washer) - Wash your images.
- [prefix-helper](https://github.com/ethcrawford/prefix-helper) - Run autoprefixer from cli.

## License

MIT License

Copyright (c) 2018-2019 Ethan Crawford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
