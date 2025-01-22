<template>
  <div class="bg-light hero-section">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-5">
          <img src="/assets/hero2.png" alt="" class="img-fluid" />
        </div>
        <div class="col-md-7">
          <div class="hero-text text-center">
            <h5>SIGN UP FOR THE LATEST NEWS & OFFERS</h5>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Enter your email">
              <div class="input-group-append">
                <button class="btn" type="button">Subscribe</button>
              </div>
            </div>
            <p>*Your privacy is our utmost priority. Your email is secure with us.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sectionVue',
}
</script>

<style scoped>
.hero-section {
  padding: 50px 0;
}

.hero-text h5 {
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-text .input-group {
  max-width: 500px;
  margin: 0 auto;
}

.hero-text p {
  font-size: 0.9rem;
  color: #6c757d;
}
.btn{
  background-color: #38D287;
  color: white;
}
</style>
