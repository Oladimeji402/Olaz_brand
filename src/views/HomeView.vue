<template>
  <div class="hero-section">
    <div class="col-md-6 hero-text">
      <p class="brand">HYGGE</p>
      <h2 class="title">Live Inspired</h2>
      <p class="subtitle">Our watches are an expression of your taste. Let them inspire you to be the best version of yourself.</p>
      <router-link to="/shop" class="shop-btn">Shop now</router-link>
    </div>
    <div class="col-md-6 mt-3">
      <img src="../assets/hero.png" alt="Hero" class="hero-image" />
    </div>
  </div>
  <div>
    <listVue />
  </div>
  <div>
    <ProductList />
  </div>
  <div>
    <nextVue />
  </div>
</template>

<script>
import listVue from '../components/listVue.vue'
import ProductList from '../components/productList.vue'
import nextVue from '../components/nextVue.vue'
export default {
  name: 'HomeView',
  components: {
    listVue,
    ProductList,
    nextVue,
  }
}
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f5f5f5;
}

.hero-text {
  padding: 2rem;
}

.brand {
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #666;
  margin-bottom: 1rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
  max-width: 80%;
}

.shop-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background-color: #29cf7e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.shop-btn:hover {
  background-color: #25b86f;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.hero-image {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }

  .hero-text {
    padding: 1rem;
  }

  .subtitle {
    max-width: 100%;
  }

  .title {
    font-size: 2.5rem;
  }
}
</style>