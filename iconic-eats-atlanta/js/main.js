/**
 * Iconic Eats — Atlanta
 * Vanilla JS behavior layer (no framework/build step per project scope).
 * Covers FR-2 (scroll-spy init timing), FR-5 (data-driven cards),
 * FR-6 (lingo accordion is native Bootstrap), FR-8 (email validation),
 * FR-9 (analytics event hook), FR-10 (reduced-motion aware timeline).
 */
(function () {
  "use strict";

  /* -----------------------------------------------------------
   * FR-9: Analytics hook.
   * Wire this to GA4 (gtag) or Plausible when an account is ready.
   * Falls back to console logging so events are visible during dev/QA.
   * --------------------------------------------------------- */
  function trackEvent(name, detail) {
    detail = detail || {};
    if (typeof window.gtag === "function") {
      window.gtag("event", name, detail);
    } else if (typeof window.plausible === "function") {
      window.plausible(name, { props: detail });
    } else if (window.location.hostname === "localhost" || window.location.protocol === "file:") {
      // eslint-disable-next-line no-console
      console.log("[analytics]", name, detail);
    }
  }
  window.IE_trackEvent = trackEvent;

  /* -----------------------------------------------------------
   * FR-5: Render "The Famous Food" cards from data/menu-data.js
   * --------------------------------------------------------- */
  function renderMenuCards() {
    var container = document.getElementById("food-cards");
    if (!container || !window.IE_MENU_DATA) return;

    var html = window.IE_MENU_DATA.map(function (item) {
      var badge = item.mustTry
        ? '<span class="badge-must-try">Must-Try</span>'
        : "";
      return (
        '<div class="col-sm-6 col-lg-4">' +
        '<div class="card-ie">' +
        badge +
        '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy" width="600" height="450">' +
        '<div class="card-body p-3">' +
        "<h3>" + item.name + "</h3>" +
        '<p class="mb-0">' + item.description + "</p>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    }).join("");

    container.innerHTML = html;
  }

  /* -----------------------------------------------------------
   * FR-2: Scroll-spy — init manually (after dynamic cards render)
   * so section offsets are measured against final page layout.
   * --------------------------------------------------------- */
  function initScrollSpy() {
    if (typeof bootstrap === "undefined" || !bootstrap.ScrollSpy) return;
    var spyEl = document.body;
    new bootstrap.ScrollSpy(spyEl, {
      target: "#mainNav",
      rootMargin: "-72px 0px -60%"
    });
  }

  /* -----------------------------------------------------------
   * FR-10: Timeline items fade/slide in on scroll.
   * Respects prefers-reduced-motion — items are just shown immediately.
   * --------------------------------------------------------- */
  function initTimelineAnimation() {
    var items = document.querySelectorAll(".timeline-item");
    if (!items.length) return;

    var prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* -----------------------------------------------------------
   * FR-8: Email capture — client-side validation only, no backend.
   * --------------------------------------------------------- */
  function initEmailCapture() {
    var form = document.getElementById("email-capture-form");
    if (!form) return;

    var successAlert = document.getElementById("email-capture-success");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }

      // MVP: no backend. In production, POST to an email service / placeholder endpoint.
      trackEvent("more_cities_email_capture", {
        section: "more-cities"
      });

      form.classList.remove("was-validated");
      form.reset();
      if (successAlert) {
        successAlert.classList.remove("d-none");
        successAlert.focus();
      }
    });
  }

  /* -----------------------------------------------------------
   * FR-7 / FR-9: Track outbound CTA clicks (Directions, Official Site,
   * Plan Your Visit, Menu highlights, etc.) via a shared data attribute.
   * --------------------------------------------------------- */
  function initCtaTracking() {
    document.querySelectorAll("[data-ie-event]").forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent(el.getAttribute("data-ie-event"), {
          href: el.getAttribute("href") || null
        });
      });
    });
  }

  /* -----------------------------------------------------------
   * FR-9: Scroll depth — fire once when "Plan Your Visit" enters view.
   * --------------------------------------------------------- */
  function initScrollDepthTracking() {
    var target = document.getElementById("plan");
    if (!target || !("IntersectionObserver" in window)) return;

    var fired = false;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !fired) {
            fired = true;
            trackEvent("scroll_depth_plan_visit_reached");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(target);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderMenuCards();
    initScrollSpy();
    initTimelineAnimation();
    initEmailCapture();
    initCtaTracking();
    initScrollDepthTracking();
  });
})();
