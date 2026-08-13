# RallyLab Ranking Website — Version 1

A lightweight, responsive static tennis ranking website for RallyLab.

## Files

- `index.html` — website structure
- `styles.css` — design and responsive layout
- `app.js` — ranking display logic
- `data.js` — players, points and match results
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## How to update players

Open `data.js` and edit the `players` array.

Example:

```js
{id:9,name:"New Player",class:"B1",points:650,wins:8,losses:6,movement:2}
```

## How to add a match

Add an item to the `matches` array:

```js
{date:"2026-08-13",tournament:"RallyLab Open Play",p1:"New Player",p2:"Mark Robin",score:"4–2",winner:"New Player"}
```

Version 1 uses manually maintained ranking points. The next version can calculate points automatically from tournament results and/or connect to Google Sheets.

## GitHub Pages

GitHub Pages can publish static HTML, CSS and JavaScript directly from a repository. On GitHub Free, use a public repository.

1. Create a new GitHub repository, e.g. `rallylab-rankings`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for the site to publish.

Your project site will normally be available at:

`https://YOUR-USERNAME.github.io/rallylab-rankings/`

