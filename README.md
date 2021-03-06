# Svelte Playground

The goal of this project is to gain practical experience and insight working with web components and the [Svelte UI framework](https://svelte.technology).

It uses Svelte's [webpack-template](https://github.com/sveltejs/template-webpack).

## Initial Setup

Clone the repo...

```bash
git clone https://github.com/joeblethephilgray/svelte-playground.git
```

Install the dependencies...

```bash
cd svelte-playground
npm install
```

## Development

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running. Edit a component file in `src`, save it, and the page should reload with your changes.

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
