<template>
  <div class="container">
    <h1 class="section-title">Your Cart</h1>
    <div v-if="cartItems.length" class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Total: ${{ item.price * item.quantity }}</p>
        </div>
      </div>
      <h3>Total: ${{ cartTotal }}</h3>
    </div>
    <div v-else>
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
};
</script>


<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: all 0.2s ease;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.cart-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
