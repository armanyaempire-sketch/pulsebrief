(function () {
  "use strict";

  var DURATION = 5000;
  var ARTICLE_RATIO = 0.45;

  function easeInOut(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function getArticle() {
    return document.querySelector(".article");
  }

  function startScroll() {
    var article = getArticle();

    if (!article) {
      setTimeout(startScroll, 300);
      return;
    }

    var startScrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    var articleTop =
      article.getBoundingClientRect().top +
      startScrollPosition;

    var articleHeight =
      article.scrollHeight ||
      article.offsetHeight;

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
      destination - startScrollPosition;

    if (distance <= 2) {
      /*
       * The page may still be expanding because
       * advertisement iframes are loading.
       * Try again after the layout settles.
       */
      setTimeout(startScroll, 1000);
      return;
    }

    var startTime = performance.now();

    function animate(now) {
      var progress =
        Math.min(
          (now - startTime) / DURATION,
          1
        );

      var eased = easeInOut(progress);

      window.scrollTo(
        0,
        startScrollPosition +
          distance * eased
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  /*
   * Wait until the entire page, including ad iframes,
   * has finished loading before calculating the destination.
   */
  function boot() {
    setTimeout(startScroll, 1500);
  }

  if (document.readyState === "complete") {
    boot();
  } else {
    window.addEventListener(
      "load",
      boot,
      { once: true }
    );
  }
})();
