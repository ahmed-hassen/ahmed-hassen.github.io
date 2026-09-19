# Personal site

A static portfolio site — plain HTML, CSS, and a little JavaScript. No build
step, no dependencies, no framework to keep up to date.

## Files

| File | What it's for |
| --- | --- |
| `index.html` | All the content. This is the file you'll edit most. |
| `styles.css` | All the styling. Colors live in the `:root` block at the top. |
| `script.js` | Theme toggle, scroll-spy nav, footer year. Optional. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

## Editing

Open `index.html` and replace the placeholder text. The spots to change:

- Name and tagline in the `.hero` section
- Two paragraphs in `#about`, and the skill list below them
- Three cards in `#projects` — title, description, tags, links
- Two entries in `#experience`
- Email and social links in `#contact`
- The `<title>` and `<meta name="description">` at the top of the file

To change the accent color, edit `--accent` and `--accent-soft` in `styles.css`
(both the light block at the top and the two dark blocks under it).

Preview locally by double-clicking `index.html`, or run a local server:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing

See the setup instructions you were given, or the short version:

1. Create a repo named `<your-username>.github.io` on GitHub (public, empty).
2. From this folder:

```powershell
git init -b main
git add .
git commit -m "Initial site"
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

3. In the repo, go to **Settings → Pages** and confirm the source is
   **Deploy from a branch → main → / (root)**.

The site goes live at `https://<your-username>.github.io` within a minute or
two. Every later `git push` redeploys it.
