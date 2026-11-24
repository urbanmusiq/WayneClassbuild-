/* Builds shared header/footer and renders each page from content/content.js */
(function () {
  "use strict";
  var S = window.SITE || {};
  var page = document.body.getAttribute("data-page") || "home";

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function isPh(s) { return typeof s === "string" && s.indexOf("PLACEHOLDER") === 0; }
  function txt(tag, s, cls) { return el(tag, { text: s, class: (cls || "") + (isPh(s) ? " placeholder" : "") }); }
  function srcLine(x) { return (x && S.showSources !== false) ? el("span", { class: "src", text: "Source: " + x }) : null; }
  function mount(id) { return document.getElementById(id); }

  /* ---------- Header and footer ---------- */
  var pages = [["story","Story","story.html"],["music","Music","music.html"],["watch","Watch","watch.html"],
    ["gallery","Gallery","gallery.html"],["collaborations","Collaborations","collaborations.html"],["press","Press","press.html"]];
  var header = mount("site-header");
  if (header) {
    header.className = "site-header";
    header.appendChild(el("a", { class: "mark", href: "index.html", text: (S.name || "").toUpperCase() }));
    var btn = el("button", { class: "menu-btn", type: "button", "aria-expanded": "false", "aria-controls": "nav", "aria-label": "Menu", text: "☰" });
    var nav = el("nav", { class: "nav", id: "nav", "aria-label": "Main" });
    pages.forEach(function (p) {
      var a = el("a", { href: p[2], text: p[1] });
      if (page === p[0]) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    var book = el("a", { class: "btn", href: "book.html", text: "Book a show" });
    if (page === "book") book.setAttribute("aria-current", "page");
    nav.appendChild(book);
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.appendChild(btn); header.appendChild(nav);
  }
  var footer = mount("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.appendChild(el("span", { text: "© " + new Date().getFullYear() + " " + (S.name || "") }));
    var links = el("span");
    var soc = S.social || {};
    Object.keys(soc).forEach(function (k) {
      if (soc[k]) { links.appendChild(el("a", { href: soc[k], rel: "noopener", text: k.charAt(0).toUpperCase() + k.slice(1) })); links.appendChild(document.createTextNode("  ")); }
    });
    footer.appendChild(links);
  }

  /* ---------- Home ---------- */
  var intro = mount("intro");
  if (intro) intro.appendChild(txt("p", S.intro || "", "lede"));
  var since = mount("since");
  if (since) since.textContent = (S.roles || "") + " · Since " + (S.careerStart || "");

  /* ---------- Story: biography and timeline ---------- */
  var bio = mount("bio");
  if (bio) (S.biography || []).forEach(function (p) { bio.appendChild(txt("p", p)); });
  var tl = mount("timeline");
  if (tl) {
    (S.timeline || []).slice().sort(function (a, b) { return a.year - b.year; }).forEach(function (t) {
      tl.appendChild(el("li", { class: "t-item" }, [
        el("div", { class: "t-year", text: String(t.year) }),
        el("div", { class: "t-body" }, [txt("h3", t.title), txt("p", t.text), srcLine(t.source)])
      ]));
    });
  }

  /* ---------- Music: audio player ---------- */
  function fmt(s) { if (!isFinite(s)) return "0:00"; var m = Math.floor(s / 60), r = Math.floor(s % 60); return m + ":" + (r < 10 ? "0" : "") + r; }
  var songsEl = mount("songs");
  if (songsEl) {
    var current = null;
    function stopCurrent() { if (current) { current.audio.pause(); current.set(false); } }
    (S.songs || []).forEach(function (s) {
      var li = el("li", { class: "song" });
      var has = !!s.file;
      var b = el("button", { class: "play", type: "button", "aria-label": has ? "Play " + s.title : s.title + " (audio coming soon)", text: "▶" });
      if (!has) b.disabled = true;
      var info = el("div", {}, [txt("h3", s.title), el("small", { text: [s.year, s.note].filter(Boolean).join(" · ") })]);
      var right = has ? el("span", { class: "time", text: "0:00" }) : el("span", { class: "soon", text: "Audio coming soon" });
      li.appendChild(b); li.appendChild(info); li.appendChild(right);
      if (has) {
        var audio = new Audio(); audio.preload = "none"; audio.src = s.file;
        var bar = el("div", { class: "bar", role: "progressbar", "aria-label": "Progress" }); var fill = el("i"); bar.appendChild(fill); li.appendChild(bar);
        var state = { audio: audio, set: function (on) { b.textContent = on ? "❚❚" : "▶"; b.setAttribute("aria-label", (on ? "Pause " : "Play ") + s.title); li.classList.toggle("active", on || audio.currentTime > 0); } };
        b.addEventListener("click", function () {
          if (audio.paused) { if (current && current !== state) stopCurrent(); current = state; audio.play().catch(function () { right.textContent = "Cannot play"; }); state.set(true); }
          else { audio.pause(); state.set(false); }
        });
        audio.addEventListener("timeupdate", function () { fill.style.width = (audio.currentTime / (audio.duration || 1) * 100) + "%"; right.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration); });
        audio.addEventListener("ended", function () { state.set(false); fill.style.width = "0"; });
        bar.addEventListener("click", function (e) { var r = bar.getBoundingClientRect(); if (audio.duration) audio.currentTime = (e.clientX - r.left) / r.width * audio.duration; });
      }
      songsEl.appendChild(li);
    });
  }
  var disc = mount("discography");
  if (disc) (S.discography || []).forEach(function (d) {
    var cover = el("div", { class: "cover" });
    if (d.cover) cover.appendChild(el("img", { src: d.cover, alt: "Cover of " + d.title, loading: "lazy" })); else cover.textContent = "Cover";
    disc.appendChild(el("article", { class: "card" }, [cover, el("div", { class: "body" }, [
      el("div", { class: "meta", text: [d.type, d.year].filter(Boolean).join(" · ") }), txt("h3", d.title), txt("p", d.detail || "")])]));
  });

  /* ---------- Watch: video ---------- */
  var vids = mount("videos");
  if (vids) (S.videos || []).forEach(function (v) {
    var frame = el("div", { class: "frame" });
    function load() {
      frame.textContent = "";
      if (v.file) { frame.appendChild(el("video", { src: v.file, controls: "", autoplay: "", playsinline: "", poster: v.poster || "" })); }
      else if (v.youtube) { frame.appendChild(el("iframe", { src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.youtube) + "?autoplay=1", title: v.title, allow: "autoplay; encrypted-media; picture-in-picture; fullscreen", allowfullscreen: "" })); }
      else if (v.vimeo) { frame.appendChild(el("iframe", { src: "https://player.vimeo.com/video/" + encodeURIComponent(v.vimeo) + "?autoplay=1", title: v.title, allow: "autoplay; fullscreen; picture-in-picture", allowfullscreen: "" })); }
    }
    if (v.file || v.youtube || v.vimeo) { var g = el("button", { class: "go", type: "button", "aria-label": "Play " + v.title, text: "▶  Play video" }); g.addEventListener("click", load); frame.appendChild(g); }
    else frame.appendChild(el("span", { class: "soon", text: "Video coming soon" }));
    vids.appendChild(el("article", { class: "video" }, [frame, el("div", { class: "body" }, [el("div", { class: "meta", text: v.kind || "" }), txt("h3", v.title)])]));
  });

  /* ---------- Gallery with lightbox ---------- */
  var gal = mount("gallery");
  if (gal) {
    var lb = el("div", { class: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": "Photograph" });
    var lbImg = el("img", { alt: "" }), lbCap = el("p", { class: "cap" }), lbClose = el("button", { class: "btn ghost", type: "button", text: "Close" });
    lb.appendChild(lbClose); lb.appendChild(lbImg); lb.appendChild(lbCap); document.body.appendChild(lb);
    function closeLb() { lb.classList.remove("open"); }
    lbClose.addEventListener("click", closeLb); lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
    (S.gallery || []).forEach(function (g) {
      var inner = g.file ? el("img", { src: g.file, alt: g.alt, loading: "lazy" }) : el("div", { class: "ph", text: "Photograph" });
      var b = el("button", { class: "shot", type: "button", "aria-label": "Open photograph: " + g.alt }, [inner, el("span", { text: g.caption || "" })]);
      if (g.file) b.addEventListener("click", function () { lbImg.src = g.file; lbImg.alt = g.alt; lbCap.textContent = [g.caption, g.credit && ("Photo: " + g.credit)].filter(Boolean).join(" · "); lb.classList.add("open"); lbClose.focus(); });
      else b.disabled = true;
      gal.appendChild(b);
    });
  }

  /* ---------- Collaborations, achievements ---------- */
  var collabs = mount("collaborations");
  if (collabs) (S.collaborations || []).forEach(function (c) { collabs.appendChild(el("div", { class: "row" }, [txt("h3", c.name), txt("p", c.text), srcLine(c.source)])); });
  var ach = mount("achievements");
  if (ach) (S.achievements || []).forEach(function (c) { ach.appendChild(el("div", { class: "row" }, [txt("h3", c.label), txt("p", c.text), srcLine(c.source)])); });

  /* ---------- Press ---------- */
  var press = mount("press");
  if (press) (S.press || []).forEach(function (p) {
    var q = el("p", { class: "quote" + (isPh(p.quote) ? " placeholder" : ""), text: "“" + p.quote + "”" });
    var who = p.link ? el("a", { href: p.link, rel: "noopener", text: p.outlet }) : txt("span", p.outlet);
    press.appendChild(el("div", { class: "row" }, [q, el("p", {}, [who, document.createTextNode(p.date ? "  ·  " + p.date : "")])]));
  });
  var ints = mount("interviews");
  if (ints) (S.interviews || []).forEach(function (i) {
    var t = i.link ? el("a", { href: i.link, rel: "noopener", text: i.title }) : txt("span", i.title);
    ints.appendChild(el("div", { class: "row" }, [el("h3", {}, [t]), txt("p", [i.outlet, i.date].filter(Boolean).join(" · "))]));
  });

  /* ---------- Booking form: opens the visitor's own email app ---------- */
  var form = mount("book-form");
  if (form) {
    mount("book-email").textContent = S.bookingEmail; mount("book-email").href = "mailto:" + S.bookingEmail;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var body = ["Name: " + f.get("name"), "Email: " + f.get("email"), "Event: " + f.get("event"), "Date: " + f.get("date"), "Place: " + f.get("place"), "", f.get("message")].join("\n");
      window.location.href = "mailto:" + S.bookingEmail + "?subject=" + encodeURIComponent("Booking enquiry: " + f.get("event")) + "&body=" + encodeURIComponent(body);
    });
  }
})();
