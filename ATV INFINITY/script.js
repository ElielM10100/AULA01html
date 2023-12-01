function showProductDescription(name, description) {
    const productDescription = document.createElement('div');
    productDescription.className = 'product-description';
    productDescription.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
    document.body.appendChild(productDescription);

    setTimeout(() => {
        productDescription.remove();
    }, 3000);
}

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert('Compra finalizada! Obrigado por escolher a SaladGourmet.');
    cart = [];
    updateCart();
}



