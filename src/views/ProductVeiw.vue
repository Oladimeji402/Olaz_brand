<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section row align-items-center mb-5">
      <div class="col-md-6 hero">
        <h2 class="hero-title">Shop Watch</h2>
        <p class="hero-description">
          Watches progressed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history, the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel.
        </p>
      </div>
      <div class="col-md-6">
        <img src="/assets/hero3.png" alt="Shop Watch" class="hero-image" />
      </div>
    </div>

    <!-- Sort Dropdown -->
    <div class="sort-dropdown text-center mb-4">
      <label for="sort" class="form-label">Sort by:</label>
      <select v-model="sortOption" @change="sortProducts" class="form-select">
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>

    <!-- Products Section -->
    <h1 class="section-title">All Products</h1>
    <div class="row product-list">
      <div v-for="product in sortedProducts" :key="product.id" class="col-md-4 mb-4">
        <div class="product-card">
          <div class="img-container">
            <img :src="product.image" :alt="product.name" class="product-image" />
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">${{ product.price }}</p>
            <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
            <div class="button-group mt-2">
              <button @click="editProduct(product)" class="edit-btn">Edit</button>
              <button @click="deleteProduct(product.id)" class="delete-btn">Delete</button>
            </div>
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
  name: "ProductView",
  data() {
    return {
      products: [], // Array for all products
      sortOption: "default", // Default sort option
    };
  },
  computed: {
    sortedProducts() {
      if (this.sortOption === "low-to-high") {
        return [...this.products].sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "high-to-low") {
        return [...this.products].sort((a, b) => b.price - a.price);
      }
      return this.products; // Default order
    },
  },
  methods: {
    fetchProducts() {
      // Check if we have products in localStorage (updated by admin)
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        this.products = JSON.parse(storedProducts); // Use stored products
      } else {
        // If no stored products, fetch from product.json
        this.getProductsFromJSON();
      }
    },
    getProductsFromJSON() {
      fetch("/product.json")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error.message);
          Swal.fire("Oops!", "Failed to fetch products. Please try again later.", "error");
        });
    },
    sortProducts() {
      // Sorting is handled by computed property
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
    editProduct(product) {
      // Open a modal or prompt for editing product details
      Swal.fire({
        title: "Edit Product",
        html: `
          <input type="text" id="name" class="swal2-input" placeholder="Product Name" value="${product.name}">
          <input type="number" id="price" class="swal2-input" placeholder="Product Price" value="${product.price}">
          <input type="text" id="image" class="swal2-input" placeholder="Product Image URL" value="${product.image}">
        `,
        preConfirm: () => {
          return {
            name: document.getElementById("name").value,
            price: parseFloat(document.getElementById("price").value),
            image: document.getElementById("image").value,
          };
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedProduct = { ...product, ...result.value };
          this.updateProduct(updatedProduct);
        }
      });
    },
    updateProduct(updatedProduct) {
      const index = this.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        this.$set(this.products, index, updatedProduct);
        localStorage.setItem('products', JSON.stringify(this.products));
        Swal.fire("Updated!", "Product details have been updated.", "success");
      }
    },
    deleteProduct(productId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.products = this.products.filter((product) => product.id !== productId);
          localStorage.setItem('products', JSON.stringify(this.products));
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        }
      });
    },
  },
  created() {
    this.fetchProducts(); // Fetch products on page load
  },
};
</script>

<style scoped>
.hero {
  background-color: #2e1b27;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  height: 350px;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.5;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

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

.button-group {
  display: flex;
  justify-content: space-between;
}

.edit-btn,
.delete-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
}

.edit-btn {
  background-color: #4e79a7;
  color: white;
  border: none;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
}

.edit-btn:hover {
  background-color: #2d5b74;
}

.delete-btn:hover {
  background-color: #c0392b;
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

.sort-dropdown {
  max-width: 300px;
  margin-left: auto;
}

.sort-dropdown select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.sort-dropdown label {
  margin-right: 10px;
  font-weight: 500;
}
</style>
