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
| Add a GitHub or demo link to a project | Paste the URL into that project's `github: ""` or `demo: ""` (empty hides the button) |
| Add other project links | Add `{ label: "Docs", url: "..." }` to that project's `links` |
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

## Run locally

Open `index.html` in a browser.

## Deploy for free (GitHub Pages)

GitHub Pages hosts static sites like this one for free, with no time limit, as long as
the repository is public. HTTPS is included.

**Before publishing:** add your résumé at `assets/resume.pdf` and your photo at
`assets/photo.jpg`. Everything in a public repository is visible to anyone.

1. **Commit your changes**
   ```
   git add -A
   git commit -m "Update site"
   ```
2. **Create the repository.** Go to <https://github.com/new>, name it exactly
   `indramadesh.github.io`, and set it to **Public**. With this name the site gets the short
   address `https://indramadesh.github.io`; any other name gives `indramadesh.github.io/<repo-name>`.
3. **Push the code**
   ```
   git remote add origin https://github.com/indramadesh/indramadesh.github.io.git
   git push -u origin main
   ```
4. **Turn on Pages.** In the repository, open **Settings → Pages**. Under *Build and deployment*,
   choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.

About a minute later the site is live at **https://indramadesh.github.io**.

### Updating the live site

```
git add -A
git commit -m "Update content"
git push
```

The live site updates within a minute or two.

### Optional

- **Custom domain:** buy a domain (e.g. `indramadesh.dev`, roughly ₹800–1,500 a year) and add it
  under **Settings → Pages → Custom domain**. Hosting stays free.
- **Other free hosts:** Cloudflare Pages, Netlify and Vercel also host static sites for free.
  Connect the GitHub repository, choose no framework and no build command, and they redeploy
  on every push.

## Contact form

There's no server, so the form checks the fields and then opens the visitor's email app
with the message filled in. To receive messages directly, connect a service like Formspree.

## Content

Everything comes from your project folders and the profile you provided. Nothing is invented.
The screenshots come from running the real CyberShield 360 and Timetable Generator apps.
"# My-portfolio" 
