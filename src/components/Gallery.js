export default {
  render(data) {
    const galleryHtml = data.gallery ? data.gallery.map(g => `
      <div class="gallery-item" data-type="${g.type}">
        <img src="${g.url}" alt="${g.caption}" onerror="this.src='/assets/images/gallery-placeholder.jpg'">
        <div class="gallery-item-overlay">
          <span class="gal-type">${g.type}</span>
          <span class="gal-caption">${g.caption}</span>
        </div>
      </div>
    `).join('') : '';

    return `
      <section id="gallery" class="gallery-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">10 //</span> DRAFTING GALLERY</h2>
            <div class="header-line"></div>
          </div>

          <div class="gallery-filters">
            <button class="gal-filter-btn active" data-filter="all">ALL ITEMS</button>
            <button class="gal-filter-btn" data-filter="AutoCAD Drawings">CAD DRAWINGS</button>
            <button class="gal-filter-btn" data-filter="Revit Models">REVIT MODELS</button>
            <button class="gal-filter-btn" data-filter="Site Visits">SITE OBSERVATIONS</button>
          </div>

          <div class="gallery-masonry" id="gallery-container">
            ${galleryHtml}
          </div>
        </div>
      </section>
    `;
  },
  init(data) {
    const buttons = document.querySelectorAll('.gal-filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
};
