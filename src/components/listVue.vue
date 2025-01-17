<template>
  <div class="watch-list">
    <div class="row">
      <div class="col-md-4 watch-item">
        <div class="img-container">
          <img src="../assets/watch1.png" alt="Watch 1">
        </div>
      </div>
      <div class="col-md-4 watch-item">
        <div class="img-container">
          <img src="../assets/watch2.png" alt="Watch 2">
        </div>
      </div>
      <div class="col-md-4 watch-item">
        <div class="img-container">
          <img src="../assets/watch3.png" alt="Watch 3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'listVue',
}
</script>

<style scoped>
.watch-list {
    padding: 4rem 2rem;
    background-color: #f8f9fa;
}

.watch-item {
    padding: 1rem;
    transition: transform 0.3s ease;
}

.img-container {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.watch-item:hover {
    transform: translateY(-5px);
}

.watch-item:hover img {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .watch-list {
        padding: 2rem 1rem;
    }
    
    .watch-item {
        margin-bottom: 2rem;
    }
}
</style>