(function () {
  "use strict";

  /*
   * PulseViral automatic article scroll
   * Starts immediately after the page is ready.
   * Smoothly scrolls for 5 seconds to approximately
   * 45% of the article, centered in the viewport.
   */

  var DURATION = 5000;
  var ARTICLE_RATIO = 0.45;

  function easeInOut(t) {
    if (t < 0.5) {
      return 4 * t * t * t;
    }

    return 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function findArticle(attempts) {
    var article = document.querySelector(".article");

    if (article) {
      beginScroll(article);
      return;
    }

    if (attempts < 120) {
      window.requestAnimationFrame(function () {
        findArticle(attempts + 1);
      });
    }
  }

  function beginScroll(article) {
    var startScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    var articleRect = article.getBoundingClientRect();

    var articleTop =
      articleRect.top + startScroll;

    var articleHeight =
      article.scrollHeight || article.offsetHeight;

    /*
     * Target approximately 45% down the article
     * and position that point around the center
     * of the user's screen.
     */
    var target =
      articleTop +
      articleHeight * ARTICLE_RATIO -
      window.innerHeight * 0.5;

    var maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight -
        window.innerHeight
    );

    var destination = Math.max(
      0,
      Math.min(target, maxScroll)
    );

    var distance =
      destination - startScroll;

    if (Math.abs(distance) < 2) {
      return;
    }

    var startTime = window.performance.now();

    function step(now) {
      var progress = Math.min(
        (now - startTime) / DURATION,
        1
      );

      var eased = easeInOut(progress);

      var current =
        startScroll +
        distance * eased;

      window.scrollTo(0, current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function startAutoScroll() {
    findArticle(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      startAutoScroll,
      { once: true }
    );
  } else {
    startAutoScroll();
  }
})();
