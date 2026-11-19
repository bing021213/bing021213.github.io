(() => {
  "use strict";
  const p = window.PROFILE;
  let lang = p.defaultLanguage === "zh" ? "zh" : "en";
  try { const saved = localStorage.getItem("homepage-language"); if (["en", "zh"].includes(saved)) lang = saved; } catch (_) {}
  let filter = "selected";
  const labels = {
    en: {about:"About",research:"Research",publications:"Publications",experience:"Experience",interests:"What I’m curious about",news:"News",selected:"Selected",all:"All",publicationNote:"Illustrative entries — research details and publications will be added here.",projects:"Projects & resources",getInTouch:"GET IN TOUCH",contactTitle:"Let’s exchange ideas.",backToTop:"Back to top",sample:"Example",abstract:"Abstract",bibtex:"BibTeX",paper:"Paper",code:"Code",project:"Project",video:"Video",copy:"Copy citation",copied:"Copied",copyFailed:"Select and copy the citation below",showMore:"Show all",showLess:"Show less",emailMissing:"Email to be added",empty:"Updates coming soon.",photoAlt:"Portrait of ",photoPlaceholder:"Profile photo placeholder"},
    zh: {about:"关于",research:"研究",publications:"论文",experience:"Experience",interests:"我的研究兴趣",news:"动态",selected:"精选",all:"全部",publicationNote:"以下为排版示例，研究内容与论文信息待补充。",projects:"项目与资源",getInTouch:"联系我",contactTitle:"让想法在交流中生长。",backToTop:"回到顶部",sample:"示例",abstract:"摘要",bibtex:"BibTeX",paper:"论文",code:"代码",project:"项目",video:"视频",copy:"复制引用",copied:"已复制",copyFailed:"请选中下方引用并复制",showMore:"查看全部",showLess:"收起",emailMissing:"邮箱待补充",empty:"更多动态即将更新。",photoAlt:"照片：",photoPlaceholder:"个人照片占位图"}
  };
  const $ = id => document.getElementById(id);
  const t = value => typeof value === "string" ? value : value?.[lang] ?? value?.en ?? "";
  const el = (tag, cls, content) => { const e = document.createElement(tag); if (cls) e.className = cls; if (content != null) e.textContent = content; return e; };
  const set = (id, value) => { $(id).textContent = t(value); };
  // Permit web URLs and local files, while rejecting executable URLs.
  const safeUrl = value => {
    if (typeof value !== "string" || !value.trim()) return "";
    try { const u = new URL(value, location.href); return ["http:","https:","file:"].includes(u.protocol) ? u.href : ""; } catch (_) { return ""; }
  };
  function link(label, url) {
    const href = safeUrl(url); if (!href) return null;
    const a = el("a", "", label); a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function paragraph(content) {
    const node = el("p");
    for (const part of Array.isArray(content) ? content : [content]) {
      node.append(typeof part === "string" ? document.createTextNode(part) :
        link(part.text, part.url) || document.createTextNode(part.text));
    }
    return node;
  }
  function icon(kind) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("class", "icon-" + kind);
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", kind === "email"
      ? "M3 5h18v14H3z M3 5l9 7 9-7"
      : kind === "scholar"
      ? "M1 9l11-6 11 6-11 6L1 9z M5 11.2V17c4 3 10 3 14 0v-5.8 M23 9v8"
      : "M12 .297C5.37.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.806 5.621-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.901-.015 3.295 0 .322.216.694.825.576C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12");
    svg.append(path);
    return svg;
  }
  function render() {
    const l = labels[lang]; document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = `${t(p.name)} · ${lang === "en" ? "Personal Homepage" : "个人主页"}`;
    document.querySelector('meta[name="description"]').content = `${t(p.name)} · ${t(p.role)}`;
    document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = l[e.dataset.i18n]; });
    document.querySelector(".monogram").textContent = p.name.en;
    $("language").textContent = lang === "en" ? "中文" : "EN";
    $("language").setAttribute("aria-label", lang === "en" ? "切换为中文" : "Switch to English");
    $("name").replaceChildren(document.createTextNode(t(p.name)), el("span", "", t(p.alternateName)));
    $("bio").replaceChildren(...(t(p.bio) || []).map(paragraph));
    $("portrait").src = safeUrl(p.photo) || "assets/portrait.svg";
    $("portrait").alt = p.photo === "assets/portrait.svg" ? l.photoPlaceholder : l.photoAlt + t(p.name);
    $("socials").replaceChildren();
    if (p.email) { const a = el("a"); a.href = "mailto:" + p.email; a.append(icon("email"),document.createTextNode("Email")); $("socials").append(a); }
    [["scholar","Google Scholar"],["github","GitHub"],["linkedin","LinkedIn"],["cv","CV"]].forEach(([key,label]) => { const a = link(label,p.links?.[key]); if(a) { if(key === "github" || key === "scholar") a.prepend(icon(key)); $("socials").append(a); } });
    renderPublications();
    $("experience-list").replaceChildren(...p.experience.map(item => {
      const row = el("div","experience-row"), body = el("div");
      body.append(el("strong","experience-role",t(item.title))); if(t(item.institution)) body.append(document.createTextNode(" | "),el("span","experience-detail",t(item.institution)));
      row.append(el("span","news-date",t(item.period)),body); return row;
    }));
    $("copyright").textContent=`© ${new Date().getFullYear()} ${t(p.name)}`;
  }
  function renderPublications() {
    const l=labels[lang];
    document.querySelectorAll("[data-filter]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.filter===filter)));
    const publications=p.publications.filter(item=>!item.example);
    document.querySelector(".segmented").hidden=publications.length<2 || !publications.some(item=>!item.selected);
    const entries=publications.filter(item=>filter==="all"||!publications.some(entry=>entry.selected)||item.selected);
    $("publication-list").replaceChildren(...entries.map((item,index)=>{
      const row=el("article","publication"), figure=el("div","pub-figure");
      if (item.image) {
        figure.classList.add("has-image");
        const img=el("img","pub-image");
        img.src=safeUrl(item.image); img.alt=t(item.imageAlt); img.width=206; img.height=142; img.loading="lazy";
        figure.append(img);
      } else {
        figure.classList.add("pub-figure-empty");
        figure.setAttribute("role","img");
        figure.setAttribute("aria-label", lang === "en" ? "Reserved space for a paper figure" : "论文配图预留位置");
      }
      row.append(figure);
      const body=el("div","pub-body"), title=el("h3","pub-title"); title.append(link(t(item.title),item.links?.paper)||document.createTextNode(t(item.title)));
      const authors=el("p","authors"); item.authors.forEach((name,i)=>{if(i)authors.append(document.createTextNode(", ")); authors.append([p.name.en,p.name.zh].includes(name)?el("strong","",name):document.createTextNode(name));});
      const venue=el("p","venue",t(item.venue)); if(item.example) venue.append(el("span","sample",l.sample));
      body.append(title,authors,venue);
      if(t(item.summary)) body.append(el("p","pub-summary",t(item.summary)));
      const actions=el("div","pub-actions");
      body.append(actions);
      function addAction(node) {
        if(actions.childElementCount) {const divider=el("span","action-divider","|"); divider.setAttribute("aria-hidden","true"); actions.append(divider);}
        actions.append(node);
      }
      function addPanel(label,panel,key) {
        const button=el("button","text-button pub-toggle",label); button.type="button";
        panel.id=`publication-${index}-${key}`; panel.hidden=true;
        button.setAttribute("aria-controls",panel.id); button.setAttribute("aria-expanded","false");
        button.addEventListener("click",()=>{panel.hidden=!panel.hidden;button.setAttribute("aria-expanded",String(!panel.hidden));});
        addAction(button);body.append(panel);
      }
      const actionLabels={
        abstract:lang === "en" ? "abstract" : "摘要",
        github:"github", project:lang === "en" ? "project page" : "项目网页",
        paper:lang === "en" ? "paper" : "论文", code:lang === "en" ? "code" : "代码",
        video:lang === "en" ? "video" : "视频", bibtex:"bibtex"
      };
      const actionOrder=item.actionOrder || ["abstract","paper","code","project","video","bibtex"];
      for(const key of actionOrder) {
        const label=actionLabels[key] || key;
        if(key === "abstract" && t(item.abstract)) {
          const panel=el("div","pub-expanded");
          if(item.abstractIsSummary) panel.append(el("p","abstract-note",lang === "en" ? "Abstract summary" : "摘要概述"));
          panel.append(el("p","",t(item.abstract)));
          addPanel(label,panel,"abstract");
        } else if(key === "bibtex" && item.bibtex) {
          const panel=el("div","pub-expanded pub-citation"), pre=el("pre","",item.bibtex), copy=el("button","copy-button",l.copy); copy.type="button";
          copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(item.bibtex);copy.textContent=l.copied;}catch(_){copy.textContent=l.copyFailed;const range=document.createRange();range.selectNodeContents(pre);window.getSelection().removeAllRanges();window.getSelection().addRange(range);}});
          panel.append(pre,copy);addPanel(label,panel,"bibtex");
        } else {
          const a=link(label,item.links?.[key]);
          if(a) addAction(a);
          else if(item.reserveLinks) {
            const placeholder=el("span","pub-action-placeholder",label);
            placeholder.setAttribute("aria-disabled","true");
            placeholder.title=lang === "en" ? "Link to be added" : "链接待补充";
            addAction(placeholder);
          }
        }
      }
      row.append(body);return row;
    }));
    if(!entries.length) $("publication-list").append(el("p","empty",lang === "en" ? "Publications to be added." : "论文信息待补充。"));
  }
  $("language").addEventListener("click",()=>{lang=lang==="en"?"zh":"en";try{localStorage.setItem("homepage-language",lang);}catch(_){}render();});
  document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{filter=button.dataset.filter;renderPublications();}));
  render();
})();
