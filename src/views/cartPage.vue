<template>
  <div class="container">
    <h1 class="section-title">Your Cart</h1>

    <!-- Cart List -->
    <div v-if="cartItems.length" class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-info">
          <h3 class="cart-item-name">{{ item.name }}</h3>
          <div class="quantity-price">
            <p>Quantity: {{ item.quantity }}</p>
            <p class="item-total">Total: ${{ item.price * item.quantity }}</p>
          </div>
        </div>
        <button class="remove-btn" @click="removeItem(item.id)">Remove</button>
      </div>
      <div class="cart-summary">
        <h3>Total: ${{ cartTotal }}</h3>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>

    <!-- Empty Cart Message -->
    <div v-else class="empty-cart-message">
      <p>Your cart is empty. Start adding items!</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'; // Import Pinia store

export default {
  name: "CartPage",
  computed: {
    cartItems() {
      const store = useCartStore(); // Access the Pinia store
      return store.cartItems; // Use the getter from the store
    },
    cartTotal() {
      const store = useCartStore(); // Access the Pinia store
      return store.cartTotal; // Use the getter from the store
    },
  },
  methods: {
    removeItem(id) {
      const store = useCartStore();
      store.removeItemFromCart(id); // Assumes you've implemented this method in your store
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cart-item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-item-info {
  flex-grow: 1;
}

.cart-item-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
}

.quantity-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.item-total {
  color: #29cf7e;
  font-weight: bold;
}

.remove-btn {
  background-color: #f44336;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.checkout-btn {
  background-color: #29cf7e;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #25b86f;
}

.empty-cart-message {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}
</style>
