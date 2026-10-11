/* ==================================================================
   Builds every page from the data in content.js.
   You normally don't need to edit this file. Change content.js instead.
   ================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var P = S.profile;
  var page = document.body.getAttribute("data-page");

  /* ---------- helpers ---------- */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function list(arr) { return Array.isArray(arr) ? arr : []; }
  function ext(url) {
    return /^https?:/i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }
  function paras(arr, cls) {
    return list(arr).map(function (t) { return "<p" + (cls ? ' class="' + cls + '"' : "") + ">" + esc(t) + "</p>"; }).join("");
  }

  var ICONS = {
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>',
    github: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/>',
    email: '<path d="M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 2.85-8 5-8-5V17h16V9.85z"/>',
    external: '<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
    download: '<path d="M11 3h2v9.17l3.59-3.58L18 10l-6 6-6-6 1.41-1.41L11 12.17V3zM4 18h16v2H4v-2z"/>',
    link: '<path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.4-3.4a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM8.5 19a4.5 4.5 0 0 1-3.2-7.7l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5a2.5 2.5 0 0 0 3.5 3.5l2.5-2.5a1 1 0 1 1 1.4 1.4l-2.5 2.5A4.5 4.5 0 0 1 8.5 19zm7-5.5a1 1 0 0 1-.7-1.7l2.5-2.5a2.5 2.5 0 0 0-3.5-3.5l-2.5 2.5a1 1 0 1 1-1.4-1.4l2.5-2.5a4.5 4.5 0 0 1 6.4 6.4l-2.5 2.5a1 1 0 0 1-.8.2z"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.link) + "</svg>";
  }

  /* GitHub + demo + any extra links of a project, as small buttons */
  function projectLinks(p, cls) {
    var all = [];
    if (p.github) all.push({ label: "GitHub", url: p.github, icon: "github" });
    if (p.demo) all.push({ label: "Live demo", url: p.demo, icon: "external" });
    list(p.links).forEach(function (l) { if (l && l.url) all.push({ label: l.label || "Link", url: l.url, icon: "link" }); });
    if (!all.length) return "";
    return '<div class="' + cls + '">' + all.map(function (l) {
      return '<a class="link-btn" href="' + esc(l.url) + '"' + ext(l.url) + ">" + icon(l.icon) + "<span>" + esc(l.label) + "</span></a>";
    }).join("") + "</div>";
  }

  /* ---------- header ---------- */
  var NAV = [
    { id: "resume", label: "Resume", href: "resume.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "skills", label: "Skills", href: "skills.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ];

  function renderHeader() {
    var el = document.querySelector("[data-site-header]");
    if (!el) return;
    el.innerHTML =
      '<a class="brand" href="index.html" aria-label="' + esc(P.name) + ', home">' +
        '<span class="brand-dot" aria-hidden="true"></span>' +
        '<span class="brand-name">' + esc(P.name) + "</span>" +
        (P.role ? '<span class="brand-role">' + esc(P.role) + "</span>" : "") +
      "</a>" +
      '<nav aria-label="Site"><ul class="nav">' +
        NAV.map(function (n) {
          return '<li><a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
        }).join("") +
      "</ul></nav>";
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    var el = document.querySelector("[data-site-footer]");
    if (!el) return;
    var cols = [];
    if (P.phone) cols.push('<div class="footer-col"><h2>Phone</h2><a href="tel:' + esc(P.phone.replace(/\s+/g, "")) + '">' + esc(P.phone) + "</a></div>");
    else if (P.location) cols.push('<div class="footer-col"><h2>Location</h2><p>' + esc(P.location) + "</p></div>");
    if (P.email) cols.push('<div class="footer-col"><h2>Email</h2><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a></div>");
    if (list(S.social).length) {
      cols.push('<div class="footer-col"><h2>Follow Me</h2><div class="social">' +
        list(S.social).map(function (s) {
          return '<a href="' + esc(s.url) + '"' + ext(s.url) + ' aria-label="' + esc(s.label) + '">' + icon(s.icon) + "</a>";
        }).join("") + "</div></div>");
    }
    while (cols.length < 3) cols.push("<div></div>");
    el.innerHTML = '<div class="footer-inner">' + cols.join("") +
      '<p class="copyright">&copy; ' + new Date().getFullYear() + " By " + esc(P.name) + ".</p></div>";
  }

  /* ---------- pages ---------- */
  function home() {
    return '<section class="hero">' +
      '<div class="hero-photo">' +
        (P.photo ? '<img src="' + esc(P.photo) + '" alt="Portrait of ' + esc(P.name) + '" onerror="this.remove()" />' : "") +
      "</div>" +
      '<div class="hero-text">' +
        '<h1 class="hello">Hello !!</h1>' +
        '<h2 class="about-title">A Bit About Me</h2>' +
        paras(P.about, "about-text") +
        '<div class="circle-block">' +
        '<nav class="circles" aria-label="Explore">' +
          '<a class="circle circle-orange" href="resume.html">Resume</a>' +
          '<a class="circle circle-red" href="projects.html">Projects</a>' +
          '<a class="circle circle-teal" href="skills.html">Skills</a>' +
        "</nav>" +
        '<a class="btn-contact" href="contact.html">Contact</a>' +
        "</div>" +
      "</div></section>";
  }

  function section(id, heading, body) {
    return '<section class="resume-section" aria-labelledby="' + id + '"><h2 id="' + id + '">' + heading + "</h2>" + body + "</section>";
  }

  function educationTimeline() {
    return '<div class="timeline">' + list(S.education).map(function (e) {
      return '<div class="tl-item"><p class="tl-date">' + esc(e.period) + '</p><div class="tl-body">' +
        '<h3 class="tl-title">' + esc(e.institution) + "</h3>" +
        (e.degree ? '<p class="tl-meta">' + esc(e.degree) + "</p>" : "") +
        (e.location ? "<p>" + esc(e.location) + "</p>" : "") +
        (e.details ? "<p>" + esc(e.details) + "</p>" : "") +
        "</div></div>";
    }).join("") + "</div>";
  }

  function resume() {
    var out = '<div class="container page"><h1 class="page-title">Resume</h1>';
    if (P.resumePdf) out += '<p class="resume-actions"><a class="btn-dark" href="' + esc(P.resumePdf) + '" download>' + icon("download") + "<span>Download PDF</span></a></p>";
    if (list(S.projects).length) {
      out += section("r-projects", "Project<br />Experience", '<div class="timeline">' + list(S.projects).map(function (p) {
        return '<div class="tl-item"><p class="tl-date">' + esc(p.year) + '</p><div class="tl-body">' +
          '<h3 class="tl-title">' + esc(p.title) + (p.status ? ' <span class="status status-inline">' + esc(p.status) + "</span>" : "") + "</h3>" +
          (list(p.tags).length ? '<p class="tl-meta">' + list(p.tags).map(esc).join(", ") + "</p>" : "") +
          "<p>" + esc(p.resumeSummary || list(p.description)[0] || "") + "</p>" +
          projectLinks(p, "project-links project-links-sm") +
          "</div></div>";
      }).join("") + "</div>");
    }
    if (list(S.education).length) out += section("r-education", "Education", educationTimeline());
    if (list(S.skills).length) {
      out += section("r-skills", "Skills<br />&amp; Expertise", '<ul class="bullet-list">' + list(S.skills).map(function (g) {
        return "<li><b>" + esc(g.group) + ":</b> " + list(g.items).map(esc).join(", ") + "</li>";
      }).join("") + "</ul>");
    }
    return out + "</div>";
  }

  function projects() {
    return '<div class="container page"><h1 class="page-title">Projects</h1>' + list(S.projects).map(function (p) {
      var media = p.image
        ? '<figure class="project-media"><img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || p.title) + '" loading="lazy" /></figure>'
        : '<div class="project-media placeholder" role="img" aria-label="Screenshot coming soon">Screenshot coming soon</div>';
      return '<article class="project"><div class="project-body">' +
        "<h2>" + esc(p.title) + "</h2>" +
        (p.status ? '<span class="status">' + esc(p.status) + "</span>" : "") +
        paras(p.description) +
        (list(p.tags).length ? '<p class="project-tags">' + list(p.tags).map(esc).join(" · ") + "</p>" : "") +
        projectLinks(p, "project-links") +
        "</div>" + media + "</article>";
    }).join("") + "</div>";
  }

  function skills() {
    var out = '<div class="container page"><h1 class="page-title">Skills</h1>';
    if (P.lookingFor) out += '<p class="page-lead">' + esc(P.lookingFor) + "</p>";

    if (list(S.skills).length) {
      out += section("s-skills", "Technical<br />Skills", '<div class="skill-groups">' + list(S.skills).map(function (g) {
        return '<div class="skill-group"><h3>' + esc(g.group) + "</h3>" +
          '<ul class="chips">' + list(g.items).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>" +
          (list(g.usedIn).length ? '<p class="used-in">Used in: ' + list(g.usedIn).map(esc).join(", ") + "</p>" : "") +
          "</div>";
      }).join("") + "</div>");
    }

    if (list(S.education).length) out += section("s-education", "Education", educationTimeline());

    if (list(S.achievements).length) {
      out += section("s-achievements", "Achievements<br />&amp; Certifications", '<div class="timeline">' + list(S.achievements).map(function (a) {
        return '<div class="tl-item"><p class="tl-date">' + esc(a.date) + '</p><div class="tl-body">' +
          '<h3 class="tl-title">' + esc(a.title) + "</h3>" +
          (a.issuer ? '<p class="tl-meta">' + esc(a.issuer) + "</p>" : "") +
          (a.description ? "<p>" + esc(a.description) + "</p>" : "") +
          (a.url ? '<p><a class="text-link" href="' + esc(a.url) + '"' + ext(a.url) + ">View credential</a></p>" : "") +
          "</div></div>";
      }).join("") + "</div>");
    }

    var links = [];
    if (P.email) links.push({ label: "Email", url: "mailto:" + P.email, text: P.email, icon: "email" });
    list(S.social).forEach(function (s) { links.push({ label: s.label, url: s.url, text: s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), icon: s.icon }); });
    if (P.resumePdf) links.push({ label: "Resume (PDF)", url: P.resumePdf, text: "Download", icon: "link", download: true });
    list(S.links).forEach(function (l) { links.push({ label: l.label, url: l.url, text: l.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), icon: "link" }); });
    if (links.length) {
      out += section("s-links", "Links", '<ul class="link-list">' + links.map(function (l) {
        return '<li><a href="' + esc(l.url) + '"' + ext(l.url) + (l.download ? " download" : "") + ">" +
          '<span class="link-icon">' + icon(l.icon) + "</span>" +
          '<span class="link-label">' + esc(l.label) + "</span>" +
          '<span class="link-url">' + esc(l.text) + "</span></a></li>";
      }).join("") + "</ul>");
    }
    return out + "</div>";
  }

  function contact() {
    var items = "";
    if (P.phone) items += '<div class="contact-item"><h2>Phone</h2><a href="tel:' + esc(P.phone.replace(/\s+/g, "")) + '">' + esc(P.phone) + "</a></div>";
    if (P.email) items += '<div class="contact-item"><h2>Email</h2><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a></div>";
    if (P.location) items += '<div class="contact-item"><h2>Location</h2><p>' + esc(P.location) + "</p></div>";
    if (list(S.social).length) items += '<div class="contact-item"><h2>Profiles</h2><p>' + list(S.social).map(function (s) {
      return '<a href="' + esc(s.url) + '"' + ext(s.url) + ">" + esc(s.label) + "</a>";
    }).join(" &nbsp;&middot;&nbsp; ") + "</p></div>";

    function field(id, label, type, required, auto, full) {
      var input = type === "textarea"
        ? '<textarea id="' + id + '" name="' + id + '"' + (required ? ' required aria-describedby="' + id + '-err"' : "") + "></textarea>"
        : '<input id="' + id + '" name="' + id + '" type="' + type + '"' + (auto ? ' autocomplete="' + auto + '"' : "") + (required ? ' required aria-describedby="' + id + '-err"' : "") + " />";
      return '<div class="field' + (full ? " full" : "") + '"><label for="' + id + '">' + label + (required ? " *" : "") + "</label>" + input +
        '<span class="error" id="' + id + '-err" aria-live="polite"></span></div>';
    }

    return '<div class="container page"><div class="contact-grid">' +
      '<div class="contact-intro"><h1 class="page-title">Contact</h1>' +
        (S.contact && S.contact.intro ? '<p class="lead">' + esc(S.contact.intro) + "</p>" : "") + items + "</div>" +
      '<form class="form" id="contact-form" novalidate>' +
        field("first", "First Name", "text", true, "given-name") +
        field("last", "Last Name", "text", true, "family-name") +
        field("email", "Email", "email", true, "email") +
        field("subject", "Subject", "text", false) +
        field("message", "Message", "textarea", true, null, true) +
        '<button class="btn-submit" type="submit">Submit</button>' +
        '<p class="form-status" id="form-status" role="status"></p>' +
      "</form></div></div>";
  }

  function wireContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var rules = {
      first: function (v) { return v ? "" : "Please enter your first name."; },
      last: function (v) { return v ? "" : "Please enter your last name."; },
      email: function (v) { return !v ? "Please enter your email." : (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email."); },
      message: function (v) { return v ? "" : "Please write a message."; }
    };
    function check(name) {
      var input = form.elements[name];
      var msg = rules[name](input.value.trim());
      var f = input.closest(".field");
      f.setAttribute("data-invalid", msg ? "true" : "false");
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      f.querySelector(".error").textContent = msg;
      return !msg;
    }
    Object.keys(rules).forEach(function (name) {
      form.elements[name].addEventListener("blur", function () { check(name); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = Object.keys(rules).map(check).every(Boolean);
      if (!ok) {
        status.textContent = "Please fix the highlighted fields.";
        form.querySelector('[aria-invalid="true"]').focus();
        return;
      }
      var f = form.elements;
      var subject = f.subject.value.trim() || "Portfolio enquiry";
      var body = f.message.value.trim() + "\n\n- " + f.first.value.trim() + " " + f.last.value.trim() + " (" + f.email.value.trim() + ")";
      window.location.href = "mailto:" + P.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      status.textContent = "Thanks! Your email app should open with the message ready to send.";
    });
  }

  /* ---------- render ---------- */
  var PAGES = { home: home, resume: resume, projects: projects, skills: skills, contact: contact };
  var TITLES = { home: P.name + " | " + P.role, resume: "Resume", projects: "Projects", skills: "Skills", contact: "Contact" };

  renderHeader();
  var main = document.querySelector("[data-site-main]");
  if (main && PAGES[page]) main.innerHTML = PAGES[page]();
  renderFooter();
  wireContactForm();
  document.title = page === "home" ? TITLES.home : TITLES[page] + " | " + P.name;
})();
