# Indra Madesh Miryala — portfolio

A five-page portfolio based on the Wix **Creative CV** template (#2846):
Home, Resume, Projects, Skills and Contact.

Plain HTML, CSS and JavaScript. No build step, no installs.

## How to change anything

**All content lives in `content.js`.** Edit it, save, and refresh the browser.
Every page updates automatically.

| To… | Do this in `content.js` |
|---|---|
| Change your name, email, about text | Edit the `profile` section |
| Add a project | Copy one `{ ... }` block in `projects`, paste it, change the text |
| Remove a project | Delete its whole `{ ... }` block, including the comma after it |
| Add or remove skills | Edit the `items` lists in `skills`, or add a new group |
| Add an achievement or certificate | Add a block to `achievements` (there's an example in the comments) |
| Add a link | Add `{ label: "...", url: "..." }` to `links` |
| Add a phone number | Set `phone: "..."` in `profile` |

An empty list (`[]`) hides its section. Achievements stay hidden until you add one.

**Images:**
- Your photo goes at `assets/photo.jpg` (square, at least 960×960px).
- Your résumé goes at `assets/resume.pdf`.
- Project screenshots go in `assets/projects/`. Set each project's `image` to the file path.

If a page goes blank after an edit, a comma or quote in `content.js` is probably missing.
Press F12 in the browser and the Console tab will show the line number.

## Files

| File | Purpose |
|---|---|
| `content.js` | **All your content. Edit this.** |
| `site.js` | Builds the pages from `content.js`. No need to edit. |
| `styles.css` | Design; colours and fonts are variables at the top |
| `*.html` | Small page shells; no content inside |
| `assets/` | Photo, résumé PDF, project screenshots |

## Run and deploy

Open `index.html` in a browser. To publish, upload the folder to any static host:
on Vercel, import it with no framework and no build command; on GitHub Pages, push it and enable Pages.

## Contact form

There's no server, so the form checks the fields and then opens the visitor's email app
with the message filled in. To receive messages directly, connect a service like Formspree.

## Content

Everything comes from your project folders and the profile you provided. Nothing is invented.
The screenshots come from running the real CyberShield 360 and Timetable Generator apps.
