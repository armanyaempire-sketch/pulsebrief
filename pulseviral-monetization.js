(() => {
  'use strict';

  const src = {
    wide: 'ads/728x90.html',
    medium: 'ads/468x60.html',
    mobile: 'ads/320x50.html',
    box: 'ads/300x250.html',
    railSmall: 'ads/160x300.html',
    railTall: 'ads/160x600.html',
    native: 'ads/native.html'
  };

  function frame(url, width, height, className = '') {
    const wrap = document.createElement('div');
    wrap.className = `pv-ad ${className}`;
    const iframe = document.createElement('iframe');
    iframe.title = 'Advertisement';
    iframe.loading = 'eager';
    iframe.scrolling = 'no';
    iframe.width = width;
    iframe.height = height;
    iframe.src = url;
    iframe.setAttribute('aria-label', 'Advertisement');
    wrap.appendChild(iframe);
    return wrap;
  }

  function responsiveWide() {
    const wrap = document.createElement('div');
    wrap.className = 'pv-responsive-ad';
    wrap.appendChild(frame(src.wide, 728, 90, 'pv-wide'));
    wrap.appendChild(frame(src.medium, 468, 60, 'pv-medium'));
    wrap.appendChild(frame(src.mobile, 320, 50, 'pv-mobile'));
    return wrap;
  }

  function responsiveMobile() {
    const wrap = document.createElement('div');
    wrap.className = 'pv-responsive-ad pv-mobile-only';
    wrap.appendChild(frame(src.mobile, 320, 50, 'pv-mobile'));
    return wrap;
  }

  function addTopInventory() {
    const top = document.querySelector('.top-ads .top-stack');
    if (!top || top.dataset.pvEnhanced) return;
    top.dataset.pvEnhanced = 'true';
    top.innerHTML = '';
    top.appendChild(responsiveWide());
    top.appendChild(responsiveWide());
    top.appendChild(responsiveWide());
  }

  function addArticleInventory() {
    const article = document.querySelector('.article');
    if (!article || article.dataset.pvEnhanced) return;
    article.dataset.pvEnhanced = 'true';

    const targets = Array.from(article.querySelectorAll('h2'));
    const placements = [
      { before: 0, node: responsiveWide },
      { before: 1, node: responsiveWide },
      { before: 2, node: responsiveWide },
      { before: 3, node: responsiveWide },
      { before: 4, node: responsiveWide },
      { before: 5, node: responsiveWide },
      { before: 6, node: responsiveWide },
      { before: 7, node: responsiveWide }
    ];

    placements.forEach(({ before, node }) => {
      const target = targets[before];
      if (target) target.parentNode.insertBefore(node(), target);
    });

    const ending = document.createElement('div');
    ending.className = 'pv-article-end-ads';
    ending.appendChild(frame(src.medium, 468, 60, 'pv-medium-only'));
    ending.appendChild(frame(src.mobile, 320, 50, 'pv-mobile-only'));
    ending.appendChild(frame(src.native, 640, 160, 'pv-native'));
    article.appendChild(ending);
  }

  function enhanceRail() {
    const rail = document.querySelector('.rail');
    if (!rail || rail.dataset.pvEnhanced) return;
    rail.dataset.pvEnhanced = 'true';
    rail.innerHTML = '';
    rail.appendChild(frame(src.box, 300, 250, 'pv-box'));
    rail.appendChild(frame(src.railSmall, 160, 300, 'pv-rail-small'));
    rail.appendChild(frame(src.box, 300, 250, 'pv-box'));
    rail.appendChild(frame(src.railTall, 160, 600, 'pv-rail-tall'));
  }

  function enhanceBottom() {
    const bottom = document.querySelector('.bottom-ads .bottom-stack');
    if (!bottom || bottom.dataset.pvEnhanced) return;
    bottom.dataset.pvEnhanced = 'true';
    bottom.innerHTML = '';
    bottom.appendChild(responsiveWide());
    bottom.appendChild(responsiveWide());
  }

  function compactHeadline() {
    const h1 = document.querySelector('.hero h1');
    if (!h1) return;
    h1.style.fontSize = 'clamp(26px, 3.35vw, 42px)';
    h1.style.lineHeight = '1.03';
    h1.style.marginBottom = '7px';
  }

  function run() {
    addTopInventory();
    addArticleInventory();
    enhanceRail();
    enhanceBottom();
    compactHeadline();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
