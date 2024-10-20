const products = [
  { name: 'Red 1', price: 200, color: 'red', size: 'small',image: '../img/Rød_Lille_Vase.png'  },
  { name: 'Blue 1', price: 250, color: 'blue', size: 'medium' ,image: '../img/Blå_Mellem_Vase.png'},
  { name: '2 color small', price: 300, color: 'multi', size: 'small', image: '../img/2Farvet_Lille_Vase.png' },
  { name: '2 color Large', price: 450, color: 'multi', size: 'large', image: '../img/2Farvet_Stor_Vase.png'},
];

let cart = [];
let total = 0;

function displayProducts() {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = '';

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item', product.color, product.size);
    productItem.innerHTML = `
          <img src="${product.image}">
          <h3>${product.name}</h3>
          <p>Pris: ${product.price} DKK</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Tilføj til kurv</button>
      `;
    productGrid.appendChild(productItem);
  });
}

function filterProducts() {
  const selectedColors = Array.from(document.querySelectorAll('.filter-section input[type="checkbox"]:checked'))
    .filter(input => input.value !== 'small' && input.value !== 'medium' && input.value !== 'large')
    .map(input => input.value);
  const selectedSizes = Array.from(document.querySelectorAll('.filter-section input[type="checkbox"]:checked'))
    .filter(input => input.value === 'small' || input.value === 'medium' || input.value === 'large')
    .map(input => input.value);

  const allProducts = document.querySelectorAll('.product-item');

  allProducts.forEach(product => {
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.classList[1]);
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.classList[2]);
    product.style.display = (colorMatch && sizeMatch) ? 'block' : 'none';
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - ${item.price} DKK`;
    cartItemsContainer.appendChild(cartItem);

  });

  document.querySelector('.total-price').textContent = total;
}

// Initial display of products
displayProducts();

function toggleFilter() {
  const filterSection = document.querySelector('.filter-section');
  filterSection.classList.toggle('active');
}

function toggleCart() {
  const cartSection = document.querySelector('.cart');
  cartSection.classList.toggle('active');
}
