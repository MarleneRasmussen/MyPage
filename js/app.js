  function filterGallery() {
  const checkboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
  const items = document.querySelectorAll('.grid-item');
  const selectedTopics = Array.from(checkboxes)
  .filter(checkbox => checkbox.checked && checkbox.value !== 'all')
  .map(checkbox => checkbox.value);

  items.forEach(item => {
  const topic = item.getAttribute('data-topic');
  if (selectedTopics.length === 0 || selectedTopics.includes(topic)) {
  item.style.display = 'block';
} else {
  item.style.display = 'none';
}
});

  // Handle the "All" checkbox
  const allCheckbox = document.querySelector('input[value="all"]');
  if (allCheckbox.checked) {
  items.forEach(item => item.style.display = 'block');
}
}
