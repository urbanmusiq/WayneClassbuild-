# Wayne Marshall website (Stage Light, black and gold)

Plain static site. No build step. Open `index.html` in a browser to preview.

## Publish on GitHub Pages
1. Create a new repository on GitHub (for example `wayne-marshall-site`).
2. Upload everything in this folder to the repository root (index.html must sit at the top level).
3. Repository Settings, then Pages, then Source: "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
Note: a public repository makes every file, including placeholder text, public.

## Update the website
Edit one file: `content/content.js`. Every section is a list there. Lines starting with PLACEHOLDER wait for your real information. Set `showSources` to false before publishing.

## Add audio, photos, video
- Audio (MP3): put in `assets/audio/`, set `file: "assets/audio/name.mp3"` on the song.
- Photographs: `assets/img/`, set `file` and a real `alt` description.
- Video: a YouTube id, a Vimeo id, or an MP4 in `assets/video/`.

## Structure
- `index.html`, `story.html`, `music.html`, `watch.html`, `gallery.html`, `collaborations.html`, `press.html`, `book.html`, `404.html`
- `css/styles.css` all styling and colours (variables at the top)
- `js/main.js` header, footer, audio player, video, gallery viewer
- `content/content.js` all content
- `assets/` audio, img, video folders
- `design/` the approved first-screen prototype and its screenshots (reference only)

## Rules kept
Facts come only from the Dossier. No prices. Dark mode only.
