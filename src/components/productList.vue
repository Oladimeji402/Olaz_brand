<template>
  <div class="container">
    <h1 class="section-title">Product List</h1>
    <div class="row product-list">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="product-card">
          <div class="img-container">
            <img :src="product.image" :alt="product.name" class="product-image" />
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">${{ product.price }}</p>
            <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart"; // Import Pinia store
import Swal from "sweetalert2"; // Import SweetAlert2

export default {
  name: "ProductList",
  data() {
    return {
      products: [], // Array for products
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch("/product.json");
        this.products = await response.json();
      } catch (error) {
        console.error("Error fetching products:", error.message);
        Swal.fire("Oops!", "Failed to fetch products. Please try again later.", "error");
      }
    },
    addToCart(product) {
      const cartStore = useCartStore(); // Access the Pinia store
      Swal.fire({
        title: "Add to Cart",
        html: `
          <p><strong>${product.name}</strong></p>
          <p>Price: $${product.price}</p>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" class="swal2-input" min="1" value="1">
        `,
        showCancelButton: true,
        confirmButtonText: "Add to Cart",
        preConfirm: () => {
          const quantity = parseInt(document.getElementById("quantity").value, 10);
          if (!quantity || quantity <= 0) {
            Swal.showValidationMessage("Please enter a valid quantity.");
          }
          return quantity;
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const quantity = result.value;
          cartStore.addProductToCart({ ...product, quantity });
          Swal.fire(
            "Added to Cart!",
            `${quantity} of ${product.name} has been added to your cart.`,
            "success"
          );
        }
      });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.section-title {
  text-align: center;
  margin: 2rem 0;
  color: #333;
  font-size: 2rem;
}

.product-list {
  padding: 1rem 0;
}

.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.img-container {
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
  position: relative;
  text-align: left;
}

.product-name {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
  font-weight: 500;
}

.product-price {
  font-size: 1rem;
  color: #29cf7e;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.add-to-cart-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: transparent;
  color: #29cf7e;
  border: 1px solid #29cf7e;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
}

.product-card:hover .add-to-cart-btn {
  opacity: 1;
  transform: translateY(0);
}

.add-to-cart-btn:hover {
  background-color: transparent;
  border-color: #25b86f;
  color: #25b86f;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
    margin: 1.5rem 0;
  }

  .product-image {
    height: 250px;
  }

  .product-name {
    font-size: 0.85rem;
  }

  .product-price {
    font-size: 0.95rem;
  }
}
</style>
