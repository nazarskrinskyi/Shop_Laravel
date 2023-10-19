export function storeOrder(axios, products, cartTotalPrice, user) {
    return axios
        .post('/api/orders', {
            products: products,
            email: user.email,
            user_id: user.id,
            name: user.name,
            address: "Ukraine",
            total_price: cartTotalPrice,
        })
        .then(res => {
            console.log(res);
            localStorage.removeItem('cart');
            location.reload();
        })
        .catch(error => {
            console.log(error.response);
        })
        .finally(() => {
            $(document).trigger('change');
        });
}
export function addToCart(id) {
    return new Promise((resolve) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let qty = $('.qtyValue').val() ?? 1;

        let productIndex = cart.findIndex(item => item.id === id);

        if (productIndex !== -1) {
            cart[productIndex].qty += Number(qty);
        } else {
            cart.push({
                id: id,
                qty: Number(qty)
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        $(document).trigger('change');
        resolve(cart);
    });
}
export function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let i = 0;
    cartItems.forEach(cartItem => {
        console.log(cartItem);
        let qty = $('.qtyValue').map(function() {
            return $(this).val();
        }).get()[i];
        i++;
        cartItem.qty = qty;
    });

    localStorage.setItem('cart', JSON.stringify(cartItems));
    return cartItems;
}

export function countProducts() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueProductIds = new Set();

    cartItems.forEach(cartItem => {
        uniqueProductIds.add(cartItem.id);
    });

    return uniqueProductIds.size;
}

export function calculateCartSummary(cartItems, products) {
    let cartTotalPrice = 0;

    cartItems.forEach(cartItem => {
        const productId = cartItem.id;
        const product = products.find(p => p.id === productId);
        if (product) {
            const price = product.discount_price || product.price;
            cartTotalPrice += price * cartItem.qty;
        }
    });

    return cartTotalPrice;
}

export async function getProducts(axios, cartItems) {
    const ids = cartItems.map(elem => elem.id);

    try {
        const response = await axios.post('/api/products', {
            id: ids,
        });
        return response.data.data;
    } catch (error) {
        console.error(error.response);
        return [];
    }
}

export function deleteItemsByProductId(productId, cartItems) {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    return updatedCartItems;
}

export function calculateProductQuantities(cartItems, products) {
    const productQuantities = {};

    cartItems.forEach(cartItem => {
        const productId = cartItem.id;
        const product = products.find(p => p.id === productId);
        if (product) {
            productQuantities[productId] = cartItem.qty;
        }
    });

    return productQuantities;
}
