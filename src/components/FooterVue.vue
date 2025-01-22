<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Logo and Navigation -->
        <div class="col-md-4">
          <div class="d-flex align-items-center">
            <img
              src="../assets/Logo.png"
              alt="Watch Shopping Logo"
              class="me-2"
            />
            <div>
              <h5 class="mb-0">WATCH</h5>
              <small>SHOPPING</small>
            </div>
          </div>
          <ul class="list-unstyled mt-3">
            <li><a href="#" class="text-white text-decoration-none">Home</a></li>
            <li><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
          </ul>
        </div>

        <!-- Policies -->
        <div class="col-md-4">
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">Terms of Use</a></li>
            <li><a href="#" class="text-white text-decoration-none">Returns Policy</a></li>
            <li><a href="#" class="text-white text-decoration-none">Shipping and Delivery</a></li>
            <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
          </ul>
        </div>

        <!-- Social and Facebook Group -->
        <div class="col-md-4">
          <p>We’d love to see you in our Facebook Group!</p>
          <a href="#" class="btn btn-success btn-sm mb-3">Join Now</a>
          <div>
            <a href="#" class="text-white me-3"><i class="fa fa-facebook"></i></a>
            <a href="#" class="text-white me-3"><i class="fa fa-pinterest"></i></a>
            <a href="#" class="text-white me-3"><i class="fa fa-twitter"></i></a>
            <a href="#" class="text-white"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <hr class="border-light" />
      <div class="text-center">
        © Watch Shopping Mode 2025, All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
footer {
  background-color: #3d2639;
}
</style>
