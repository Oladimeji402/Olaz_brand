// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    actions: {
        addProductToCart(product) {
            const existingProduct = this.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotal: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    },
});
