// Sample product data
const products = [
    { id: 1, name: "Ayurvedic Face Cream", price: 29.99, image: "images/face-cream.jpg", category: "skincare" },
    { id: 2, name: "Herbal Shampoo", price: 19.99, image: "images/shampoo.jpg", category: "haircare" },
    { id: 3, name: "Wellness Tea Blend", price: 14.99, image: "images/tea.jpg", category: "wellness" },
    { id: 4, name: "Aromatherapy Oil", price: 24.99, image: "images/oil.jpg", category: "wellness" }
];

// Sample testimonial data
const testimonials = [
    { name: "Sarah L.", rating: 5, comment: "AmritāAura products have transformed my skincare routine!" },
    { name: "Michael K.", rating: 4, comment: "I love the natural ingredients and the results I've seen." }
];

// Cart data
let cart = [];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <h4>${testimonial.name}</h4>
            <p>Rating: ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}</p>
            <p>${testimonial.comment}</p>
        </div>
    `;
}

// Function to populate featured products
function populateFeaturedProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.slice(0, 4).map(createProductCard).join('');
    }
}

// Function to populate all products
function populateAllProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.map(createProductCard).join('');
    }
}

// Function to populate testimonials
function populateTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (testimonialGrid) {
        testimonialGrid.innerHTML = testimonials.map(createTestimonialCard).join('');
    }
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        alert(`${product.name} added to cart!`);
    }
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Form submitted successfully!');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedProducts();
    populateAllProducts();
    populateTestimonials();
    updateCartDisplay();

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleFormSubmit);
    }

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }
});
