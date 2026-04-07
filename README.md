# Guide to start the project
1. Download Node.js
2. Check installation from powershell:
- node -v
- npm -v
3. Create a Vue project
- npm create vite@latest NAMEofPROJECT
- cd NAMEofPROJECT
- npm install
4. Open project in VS code
5. ctrl + æ to show terminal:
- npm run dev (now open the site in browser http://localhost:5173)
6. Now build your webapp in src/App.vue
7. Build for production:
- npm run build

# Guide to hosting it online
1. Deploy to Vercel.com
- login to Vercel.com
- Click "Overview" or "Projects"
- Create new project, you can import the project from git or:
2. In VS code terminal:
- npm install -g vercel
- vercel
3. Now you should be able to push the project to vercel via terminal:
- vercel --prod
4. On Vercel.com -> Domains:
- Add existing
- Add the project you created in step 1.
5. Go to your hosting website (example: One.com) and update the DNS
- A record → "yourWebsiteName.com" → 321.321.79.1 (the DNS is shown on Vercel.com under "Domains")
- CNAME → www → 8bdddd443333ae2.vercel-dns-027.com (also shown on Vercel.com under "Domains")
6. When developing, "npm run dev". When deploying online, "npm run build" then "vercel --prod". This should push the build online.

# pasteup-site

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
