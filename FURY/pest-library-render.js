// ==============================================
// PEST LIBRARY RENDERER
// Renders pest cards (with real images), pest detail pages,
// blog cards, and blog article pages.
// Also renders blog grid on the standalone Blog page.
// ==============================================
(function() {
  'use strict';

  // CSS for pest card image area (images instead of emoji)
  var style = document.createElement('style');
  style.textContent = [
    '.pest-card__icon { height: 160px; overflow: hidden; position: relative; background: var(--forest-dark); display: block; }',
    '.pest-card__icon img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }',
    '.pest-card:hover .pest-card__icon img { transform: scale(1.06); }'
  ].join('\n');
  document.head.appendChild(style);

  // ----- RENDER PEST CARDS -----
  function renderPestCards() {
    var grid = document.getElementById('pestCardsGrid');
    if (!grid || typeof PEST_DATA === 'undefined') return;
    var html = '';
    PEST_DATA.forEach(function(p) {
      html += '<a href="#" class="pest-card" data-page="pest-' + p.id + '">' +
        '<div class="pest-card__icon"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>' +
        '<div class="pest-card__body">' +
          '<h3 class="pest-card__name">' + p.name + '</h3>' +
          '<p class="pest-card__desc">' + p.shortDesc + '</p>' +
          '<span class="pest-card__link">Learn More &rarr;</span>' +
        '</div></a>';
    });
    grid.innerHTML = html;
  }

  // ----- RENDER PEST DETAIL PAGES -----
  function renderPestDetailPages() {
    var container = document.getElementById('pestDetailPages');
    if (!container || typeof PEST_DATA === 'undefined') return;
    var html = '';
    PEST_DATA.forEach(function(p) {
      var idList = function(arr) {
        return '<ul>' + arr.map(function(item) { return '<li>' + item + '</li>'; }).join('') + '</ul>';
      };
      html += '<div id="page-pest-' + p.id + '" class="page">' +
        // Hero image banner
        '<div style="width:100%;height:280px;overflow:hidden;background:var(--forest-dark);">' +
          '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;display:block;opacity:0.85;">' +
        '</div>' +
        // Title block
        '<section class="pest-detail-header" style="padding:1.5rem 0;">' +
          '<div class="container">' +
            '<h1 style="margin:0 0 0.25rem;">' + p.name + '</h1>' +
            '<p style="margin:0;opacity:0.85;font-style:italic;">' + p.scientificName + '</p>' +
          '</div>' +
        '</section>' +
        // Back nav strip
        '<div style="background:#f8f9fa;border-bottom:1px solid rgba(0,0,0,0.06);padding:0.6rem 0;">' +
          '<div class="container"><button class="pest-back-link" data-page="pest-library" style="margin:0;">&larr; Back to Pest Library</button></div>' +
        '</div>' +
        // Article body
        '<section class="pest-detail-body"><div class="container">' +
          '<h2>Overview</h2><p>' + p.overview + '</p>' +
          '<h2>Identification</h2>' + idList(p.identification) +
          '<h2>Behavior &amp; Habitat</h2><p>' + p.behavior + '</p>' +
          '<h2>Signs of Infestation</h2>' + idList(p.signs) +
          '<h2>Prevention Tips</h2>' + idList(p.prevention) +
          '<h2>Professional Treatment</h2><p>' + p.treatment + '</p>' +
          '<div class="pest-detail-cta">' +
            '<h3>Need ' + p.name + ' Control?</h3>' +
            '<p>Our experts are ready to help. Get a free, no-obligation quote today.</p>' +
            '<a href="#" class="btn btn--urgent" data-page="get-a-quote">Get a Free Quote</a> ' +
            '<a href="tel:+18445780573" class="btn btn--primary" style="margin-left:0.5rem;background:#fff;color:var(--green-dark);">Call (844) 578-0573</a>' +
          '</div>' +
        '</div></section></div>';
    });
    container.innerHTML = html;
  }

  // ----- RENDER BLOG CARDS (renders into any element with id="blogCardsGrid") -----
  function renderBlogCards() {
    var grids = document.querySelectorAll('#blogCardsGrid');
    if (!grids.length || typeof BLOG_DATA === 'undefined') return;
    var html = '';
    BLOG_DATA.forEach(function(b) {
      html += '<a href="#" class="blog-card" data-page="blog-' + b.id + '">' +
        '<div class="blog-card__banner">' + b.city + '</div>' +
        '<div class="blog-card__body">' +
          '<h3 class="blog-card__title">' + b.title + '</h3>' +
          '<p class="blog-card__date">' + b.date + '</p>' +
          '<p class="blog-card__excerpt">' + b.excerpt + '</p>' +
          '<span class="blog-card__link">Read More &rarr;</span>' +
        '</div></a>';
    });
    grids.forEach(function(grid) { grid.innerHTML = html; });
  }

  // ----- RENDER BLOG ARTICLE PAGES -----
  function renderBlogArticlePages() {
    var container = document.getElementById('blogArticlePages');
    if (!container || typeof BLOG_DATA === 'undefined') return;
    var html = '';
    BLOG_DATA.forEach(function(b) {
      html += '<div id="page-blog-' + b.id + '" class="page">' +
        '<section class="blog-header"><div class="container">' +
          '<h1>' + b.title + '</h1>' +
          '<p class="blog-meta">' + b.city + ' &middot; ' + b.date + '</p>' +
        '</div></section>' +
        '<div style="background:#f8f9fa;border-bottom:1px solid rgba(0,0,0,0.06);padding:0.6rem 0;">' +
          '<div class="container"><button class="pest-back-link" data-page="blog" style="margin:0;">&larr; Back to Blog</button></div>' +
        '</div>' +
        '<section class="blog-article-body"><div class="container">' +
          b.content +
          '<div class="pest-detail-cta" style="margin-top:2rem;">' +
            '<h3>Ready to Protect Your ' + b.city.split(',')[0] + ' Home?</h3>' +
            '<p>Get a personalized quote from PestPro today.</p>' +
            '<a href="#" class="btn btn--urgent" data-page="get-a-quote">Get a Free Quote</a> ' +
            '<a href="tel:+18445780573" class="btn btn--primary" style="margin-left:0.5rem;background:#fff;color:var(--green-dark);">Call (844) 578-0573</a>' +
          '</div>' +
        '</div></section></div>';
    });
    container.innerHTML = html;
  }

  // ----- REBIND data-page HANDLERS -----
  function bindPageLinks() {
    document.querySelectorAll('[data-page]').forEach(function(el) {
      if (!el._pestBound) {
        el._pestBound = true;
        el.addEventListener('click', function(e) {
          e.preventDefault();
          showPage(this.getAttribute('data-page'));
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });
  }

  // ----- INIT -----
  function initPestLibrary() {
    renderPestCards();
    renderPestDetailPages();
    renderBlogCards();
    renderBlogArticlePages();
    bindPageLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPestLibrary);
  } else {
    initPestLibrary();
  }
})();
