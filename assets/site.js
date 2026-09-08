/* ============================================================================
   3P STRATEGY — SITE SCRIPT
   No dependencies. Progressive enhancement only: every feature below is
   optional and the page works with JS disabled.
   Dev: extract to /assets/site.js and load with `defer`.
   ========================================================================= */
(function () {
  "use strict";

  /* 1. Mobile navigation ---------------------------------------------------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.getElementById("mobile-nav");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.getAttribute("data-open") === "true";
      panel.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.getAttribute("data-open") === "true") {
        panel.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* 2. Current year --------------------------------------------------------- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());

  /* 3. Scroll reveal (skipped entirely under reduced motion) ---------------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }

  /* 4. Client-side form validation (server/endpoint still must validate) ---- */
  var forms = document.querySelectorAll("form[data-validate]");
  Array.prototype.forEach.call(forms, function (form) {
    form.setAttribute("novalidate", "");
    form.addEventListener("submit", function (e) {
      var firstInvalid = null;
      Array.prototype.forEach.call(form.querySelectorAll("input, select, textarea"), function (input) {
        var msgEl = form.querySelector('[data-error-for="' + input.id + '"]');
        var ok = input.checkValidity();
        if (msgEl) msgEl.textContent = ok ? "" : (input.dataset.errorMessage || input.validationMessage);
        input.setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) { e.preventDefault(); firstInvalid.focus(); }
    });
  });

  /* 5. Conversion events ---------------------------------------------------- */
  /* Fires a single `cta_click` event with the CTA id. Wire `window.dataLayer`
     (GTM), Plausible or Fathom — see HANDOFF §Analytics. */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-cta]");
    if (!el) return;
    var name = el.getAttribute("data-cta");
    if (window.dataLayer) window.dataLayer.push({ event: "cta_click", cta_id: name });
    if (window.plausible) window.plausible("CTA click", { props: { id: name } });
  });
})();
