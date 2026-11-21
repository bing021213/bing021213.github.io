(() => {
  "use strict";
  const config = window.HOLMES_PROJECT;
  if (!config) return;
  const safeUrl = value => {
    if (typeof value !== "string" || !value.trim()) return "";
    if (/^#[A-Za-z][\w-]*$/.test(value)) return value;
    try { const url = new URL(value, location.href); return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : ""; } catch (_) { return ""; }
  };
  document.querySelectorAll("[data-resource]").forEach(anchor => {
    const url = safeUrl(config.links[anchor.dataset.resource]);
    if (url) {
      anchor.href = url; anchor.classList.remove("disabled");
      anchor.removeAttribute("aria-disabled"); anchor.removeAttribute("tabindex"); anchor.removeAttribute("title");
      if (/^https?:/.test(url) && new URL(url).origin !== location.origin) { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
    } else {
      anchor.removeAttribute("href"); anchor.classList.add("disabled");
      anchor.setAttribute("aria-disabled", "true"); anchor.setAttribute("tabindex", "-1"); anchor.title = "Coming soon";
    }
  });
  const platform = document.getElementById("platform-video");
  const platformUrl = safeUrl(config.platformVideo);
  if (platformUrl) {
    platform.querySelector("source").src = platformUrl;
    platform.poster = safeUrl(config.platformPoster);
    platform.load();
  }
  const researchUrl = safeUrl(config.researchVideo);
  if (researchUrl) {
    const video = document.getElementById("research-video");
    video.src = researchUrl;
    if (config.researchVideoPoster) video.poster = safeUrl(config.researchVideoPoster);
    video.hidden = false;
    document.getElementById("research-video-placeholder").hidden = true;
  }
  const citation = document.getElementById("software-citation");
  citation.textContent = config.softwareCitation;
  const repository = document.getElementById("repository-url");
  repository.href = safeUrl(config.repository);
  repository.textContent = config.repository.replace(/^https?:\/\//, "");
  const status = document.getElementById("copy-status");
  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      const isCitation = button.dataset.copy === "citation";
      const value = isCitation ? config.softwareCitation : config.repository;
      try {
        await navigator.clipboard.writeText(value);
        status.textContent = isCitation ? "BibTeX copied." : "Repository URL copied.";
      } catch (_) {
        const target = isCitation ? citation : repository;
        const range = document.createRange(); range.selectNodeContents(target);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        status.textContent = "Text selected. Press Ctrl+C or Command+C to copy.";
      }
    });
  });
})();
