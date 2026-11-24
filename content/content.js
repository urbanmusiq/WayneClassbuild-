/* =====================================================================
   CONTENT FILE: the only file you need to edit to update the website.
   Rules for this file
   - Every fact below comes from the Dossier. Nothing is invented.
   - A line starting with "PLACEHOLDER" is waiting for your real information.
   - To add an item, copy one block inside a list and change the words.
   - Audio files go in assets/audio/, photos in assets/img/, videos in assets/video/.
   ===================================================================== */

window.SITE = {

  /* ---------- Basics ---------- */
  name: "Wayne Marshall",
  roles: "Singer · Recording artist",
  careerStart: 1985,
  /* true = show a small "Source:" line under facts (good while you review). Set to false before publishing. */
  showSources: true,
  intro: "PLACEHOLDER: your one-line introduction, in your own words.",
  bookingEmail: "wayne@waynemarshall.co.uk",
  /* Social links: leave "" until you give the real address. Empty ones are hidden. */
  social: { instagram: "", youtube: "", facebook: "", tiktok: "" },

  /* ---------- Story page ---------- */
  biography: [
    "PLACEHOLDER: your biography and personal story goes here, in your words. Add one paragraph per line, in quotes, separated by commas.",
    "PLACEHOLDER: a second paragraph, for example how music began for you."
  ],

  /* ---------- Career timeline, 1985 to 2026 ----------
     year: number, title: text, text: text, source: where the fact comes from.
     Add or remove blocks freely. The page sorts them by year. */
  timeline: [
    { year: 1985, title: "Music House and a first 12-inch",
      text: "Starts at Music House, Seven Sisters Road, learning disc cutting. The 12-inch Give Me The Mix / Mike In My Hand (Jah Tubbys JT 013) is released, credited to Wayne Marshal & The Offbeat Posse (the label's spelling).",
      source: "Dossier" },
    { year: 1989, title: "Eden Grove",
      text: "Music House moves to Eden Grove, N7, and adds processing for stampers.",
      source: "Dossier" },
    { year: 1994, title: "Ooh Aah (G-Spot) reaches UK No. 29",
      text: "Enters the UK national chart on 1 October 1994 and spends five weeks on it.",
      source: "Official Charts Company" },
    { year: 1994, title: "Black Music Awards, Wembley",
      text: "Four awards on 25 November 1994: Best Single, Best Album, Best Newcomer and Best Male Artist.",
      source: "Wayne Marshall" },
    { year: 1995, title: "Spirit",
      text: "Enters the UK national chart, peaking at No. 58 over three weeks.",
      source: "Official Charts Company" },
    { year: 1996, title: "Never Knew Love Like This",
      text: "With Pauline Henry. Reaches UK No. 40 in February 1996. G Spot returns in December 1996 and reaches No. 50.",
      source: "Official Charts Company" },
    { year: 2000, title: "Sexy Beast soundtrack",
      text: "G Spot (Back In The Day Mix) is on the soundtrack of the film Sexy Beast.",
      source: "IMDb credit" },
    { year: 2005, title: "Mastering at Jet Star Phonographics",
      text: "Mastering engineer at Jet Star Phonographics from 2005 to 2008, on everything the company released while he was there.",
      source: "Dossier, jetstar.co.uk" },
    { year: 2025, title: "Named in a MOBO-winning album",
      text: "Named in the lyric of Sweet Boys Turned Sour, from Bashy's album Being Poor Is Expensive, which won MOBO Album of the Year 2025.",
      source: "Dossier" },
    { year: 2026, title: "Live in 2026",
      text: "Billed as LIVE R&B LEGEND at VELVET, Romford (February). Closing set at Made in 90s Festival, Croydon (August). Masters In My House for Fred Locks (17 April).",
      source: "Dossier" },
    { year: 2026, title: "PLACEHOLDER: add the next milestone",
      text: "PLACEHOLDER: anything you want here. Give a year, a title and a sentence.",
      source: "Wayne Marshall" }
  ],

  /* ---------- Songs with playable audio ----------
     file: path to an audio file, e.g. "assets/audio/ooh-aah.mp3". Leave "" until you have it.
     Use MP3 (works everywhere). Only upload audio you own or have permission to stream. */
  songs: [
    { title: "Ooh Aah (G-Spot)", year: 1994, note: "UK chart No. 29", file: "" },
    { title: "Spirit", year: 1995, note: "", file: "" },
    { title: "Never Knew Love Like This", year: 1996, note: "With Pauline Henry", file: "" },
    { title: "G Spot", year: 1996, note: "", file: "" },
    { title: "PLACEHOLDER: add a song", year: "", note: "", file: "" }
  ],

  /* ---------- Discography ----------
     type: Album, Single or 12-inch. cover: path in assets/img/, or "" for none. */
  discography: [
    { title: "Give Me The Mix / Mike In My Hand", year: 1985, type: "12-inch",
      detail: "Jah Tubbys JT 013, as Wayne Marshal & The Offbeat Posse.", cover: "" },
    { title: "Ninety Degrees and Rising", year: 1994, type: "Album",
      detail: "Soultown, SOUL LP0031.", cover: "" },
    { title: "Ooh Aah (G-Spot)", year: 1994, type: "Single", detail: "UK No. 29.", cover: "" },
    { title: "Spirit", year: 1995, type: "Single", detail: "UK No. 58.", cover: "" },
    { title: "Never Knew Love Like This", year: 1996, type: "Single", detail: "With Pauline Henry. UK No. 40.", cover: "" },
    { title: "G Spot", year: 1996, type: "Single", detail: "Re-release. UK No. 50.", cover: "" },
    { title: "Censored", year: "", type: "Album", detail: "PLACEHOLDER: add the year and label.", cover: "" },
    { title: "A Change Is Gonna Come", year: "", type: "Release", detail: "PLACEHOLDER: add the year and format.", cover: "" }
  ],

  /* ---------- Videos and live performances ----------
     Use either youtube: "VIDEO_ID" (the part after v= in the address)
     or vimeo: "VIDEO_ID", or file: "assets/video/name.mp4". Leave all empty for a placeholder. */
  videos: [
    { title: "PLACEHOLDER: a music video", kind: "Music video", youtube: "", vimeo: "", file: "", poster: "" },
    { title: "PLACEHOLDER: a live performance", kind: "Live", youtube: "", vimeo: "", file: "", poster: "" }
  ],

  /* ---------- Photographs ----------
     file: path in assets/img/. alt: describe the picture. credit: who took it and who owns it. */
  gallery: [
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" },
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" },
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" },
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" },
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" },
    { file: "", alt: "PLACEHOLDER: describe the photograph", caption: "PLACEHOLDER: caption, year, place", credit: "" }
  ],

  /* ---------- Collaborations ---------- */
  collaborations: [
    { name: "Pauline Henry", text: "Never Knew Love Like This, UK No. 40 in 1996.", source: "Official Charts Company" },
    { name: "Predz UK", text: "Closing set at Made in 90s Festival, Croydon, August 2026.", source: "Dossier" },
    { name: "Fred Locks", text: "Mastered In My House for Fred Locks and Blacker Dread, released 17 April 2026.", source: "Dossier" },
    { name: "PLACEHOLDER: add a collaborator", text: "PLACEHOLDER: what you made together, and when.", source: "Wayne Marshall" }
  ],

  /* ---------- Achievements ---------- */
  achievements: [
    { label: "UK chart", text: "Four UK national chart entries and twelve weeks on the chart, with Ooh Aah (G-Spot) peaking at No. 29.", source: "Official Charts Company" },
    { label: "Awards", text: "Four Black Music Awards in one night, Wembley, 25 November 1994.", source: "Wayne Marshall" },
    { label: "Sales", text: "330,000 records sold (200,000 albums and 130,000 singles).", source: "Orlando Gittens, Soultown (label supplied)" },
    { label: "Black Echoes chart", text: "Two No. 1 albums on the Black Echoes chart.", source: "Wayne Marshall, evidence being gathered" },
    { label: "Film", text: "G Spot (Back In The Day Mix) on the Sexy Beast soundtrack, 2000.", source: "IMDb credit" }
  ],

  /* ---------- Press and interviews ----------
     Quotes must be short and exact, with the source named. */
  press: [
    { outlet: "Predz UK, TikTok", date: "August 2026", quote: "first generation of UK R&B", link: "" },
    { outlet: "Echoes, soul trade advert", date: "21 January 1995", quote: "Voted: Best Soul Artist of the Year", link: "" },
    { outlet: "PLACEHOLDER: outlet name", date: "PLACEHOLDER: date", quote: "PLACEHOLDER: a short exact quote", link: "" }
  ],
  interviews: [
    { title: "PLACEHOLDER: interview title", outlet: "PLACEHOLDER: outlet", date: "", link: "" }
  ]
};
