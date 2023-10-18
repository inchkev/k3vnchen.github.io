### [kevinnchen.com](https://kevinnchen.com) and [inchkev.com](https://inchkev.com) and [terrible.day](https://terrible.day)

Create pages as json in `content/`, link them in `content/home.json`,
media goes in `media/`, edit templates in `views/`, render everything to
html using `npm run build` which calls `node src/render.js` under the hood.

`src/render.js` parses the jsons and uses ejs to fill in the relevant templates.
The ejs templates can be found in `views/`.

`js/main.js` is in `index.html` and does some hover highlighting. `js/project.js`
is in every project html and does some math to smooth zoom-in on images when clicked.

`css/` contains all the website's css.