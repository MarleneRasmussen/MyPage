function filterGallery(category) {
  const items = document.querySelectorAll('.grid-item');

  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-topic') === category) {
      item.style.display = 'block'; // Vis elementet
    } else {
      item.style.display = 'none'; // Skjul elementet
    }
  });
}
