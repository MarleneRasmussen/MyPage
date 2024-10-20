function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const gridContainer = document.querySelector('.grid-container');

  sidebar.classList.toggle('active');

  if (sidebar.classList.contains('active')) {
    gridContainer.classList.add('shift-to-one-column');
  } else {
    gridContainer.classList.remove('shift-to-one-column');
  }
}
