<template>
  <div class="container mb-5">
    <h3 class="subtitle">Our Top Picks</h3>
    <div class="row">
      <div class="col-md-6">
      <div class="products">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-price">${{ product.price }}</p>
          <button class="btn btn-lg" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
      </div>
      <div class="col-md-6">
        <img src="/assets/asst.png" alt="" class="side-image ">
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import Swal from 'sweetalert2'

export default {
  name: 'nextVue1',
  data() {
    return {
      products: [],
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('/product.json')
        const data = await response.json()
        this.products = data.slice(0, 2) // Get only the first two products
      } catch (error) {
        console.error('Error fetching products:', error.message)
        Swal.fire('Error', 'Failed to fetch products. Try again later.', 'error')
      }
    },
    addToCart(product) {
      const cartStore = useCartStore()
      Swal.fire({
        title: 'Add to Cart',
        html: `
          <p><strong>${product.name}</strong></p>
          <p>Price: $${product.price}</p>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" class="swal2-input" min="1" value="1">
        `,
        showCancelButton: true,
        confirmButtonText: 'Add',
        preConfirm: () => {
          const quantity = parseInt(document.getElementById('quantity').value)
          if (!quantity || quantity <= 0) {
            Swal.showValidationMessage('Please enter a valid quantity.')
          }
          return quantity
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const quantity = result.value
          cartStore.addProductToCart({ ...product, quantity })
          Swal.fire('Success!', `${quantity} of ${product.name} added to the cart.`, 'success')
        }
      })
    },
  },
  created() {
    this.fetchProducts()
  },
}
</script>

<style scoped>
.subtitle {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.products {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 250px;
  padding: 10px;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-title {
  font-size: 1.1rem;
  margin-top: 10px;
  color: #333;
  font-weight: 600;
}

.product-price {
  font-size: 1rem;
  color: #29cf7e;
  font-weight: 600;
  margin-bottom: 15px;
}

.btn {
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

.product-card:hover .btn {
  opacity: 1;
  transform: translateY(0);
}

.btn:hover {
  background-color: transparent;
  border-color: #25b86f;
  color: #25b86f;
}
.side-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row {
  min-height: 60vh;
  display: flex;
  align-items: stretch;
}
.container {
  min-height: 70vh;
  padding: 1rem 0;
}
.products {
  height: 100%;
}
.col-md-6 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .bg {
    height: 50vh;
    padding: 10px;
  }

  .product-card {
    width: 100%;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-price {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .subtitle{
    text-align: center;
  }
  .row {
    min-height: auto;
    flex-direction: column;
  }

  .col-md-6 {
    width: 100%;
    margin-bottom: 2rem;
  }

  .side-image {
    height: 50vh;
  }
}
@media (max-width: 480px) {
  .side-image {
    height: 40vh;
  }
}

</style>
