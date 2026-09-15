(function () {
  'use strict';

  var DURATION = 5000;
  var ARTICLE_RATIO = 0.45;

  function easeInOut(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function findArticle(attempts) {
    var article = document.querySelector('.article');

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
    var startScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    var articleRect = article.getBoundingClientRect();
    var articleTop = articleRect.top + startScroll;
    var articleHeight = article.scrollHeight || article.offsetHeight;

    var target = articleTop + articleHeight * ARTICLE_RATIO - window.innerHeight * 0.5;
    var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    var destination = Math.max(0, Math.min(target, maxScroll));
    var distance = destination - startScroll;

    if (Math.abs(distance) < 2) {
      return;
    }

    var startTime = window.performance.now();

    function step(now) {
      var progress = Math.min((now - startTime) / DURATION, 1);
      var eased = easeInOut(progress);
      var current = startScroll + distance * eased;

      window.scrollTo(0, current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function start() {
    findArticle(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
