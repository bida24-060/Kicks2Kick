// Initialize an empty cart
const cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear the current cart display
    cartItems.innerHTML = '';

    // Add each item in the cart to the display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${item.name} (Size: ${item.size}, Color: ${item.color}) - P${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update the total price
    cartTotal.textContent = `Total: P${total.toFixed(2)}`;
}

// Add event listeners to all "Add to Bag" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const id = button.getAttribute('data-id');
        const sizeSelect = document.getElementById(`size-${id}`);
        const colorSelect = document.getElementById(`color-${id}`);
        const size = sizeSelect ? sizeSelect.value : 'N/A';
        const color = colorSelect ? colorSelect.value : 'N/A';

        // Add the item to the cart
        cart.push({ name, price, size, color });

        // Update the cart display
        updateCartDisplay();
    });
});