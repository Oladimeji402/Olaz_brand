<template>
  <div class="bg mb-5">
    <h3 class="subtitle">TIME TO MAKE A CHANGE</h3>
    <h1 class="title">WWF x Hygge</h1>
    <button class="btn btn-lg">Learn More</button>
  </div>
</template>

<script>
export default {
  name: 'nextVue',
}
</script>

<style scoped>
.bg {
  background: url(/assets/bg.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  }

button:hover {
  background-color: #45a049;
}
</style>
