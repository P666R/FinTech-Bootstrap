# FinTech Website

Bootstrap website for a financial advisor startup. This website has a light, business-like design.

## Desktop

<img src="./images/desktop-screenshot.png"  />

## Mobile

<img src="./images/mobile1-screenshot.png"  />

## Mobile (Desktop)

<img src="./images/mobile2-screenshot-d.png"  />

## Features

- Modern layout with custom animations/styles/backgrounds
- Responsive design
- Sticky navbar with style changes on scroll
- Bootstrap modals
- Testimonials with a carousel slider
- Many other features

## Usage

This website is built with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/).

In order to customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Bootstrap and Sass. To build your CSS files from Sass, run:

```bash
npm run sass:build
```

To watch your Sass files for changes, run:

```bash
npm run sass:watch
```

You can add Bootstrap variables to the `bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add your own custom styles, use the `styles.scss` file.
