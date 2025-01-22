<template>
  <header>
    <nav class="navbar d-flex justify-content-between align-items-center p-3 bg-light">
      <img src="/assets/Logo.png" alt="Brand Logo" class="logo" />
      <ul class="nav-links d-flex" :class="{ 'nav-active': isOpen }">
        <li><router-link to="/" class="nav-link" exact>Home</router-link></li>
        <li><router-link to="/product" class="nav-link">Shop Watch</router-link></li>
        <li><router-link to="/terms" class="nav-link">Terms and Conditions</router-link></li>
        <li><router-link to="/admin" class="nav-link">Admin</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
      <div class="icons">
        <i class="fa fa-user"></i>
      <router-link to="/cart"> <i class="fa fa-shopping-cart"></i> </router-link>
        <div class="hamburger" @click="toggleMenu" :class="{ 'is-active': isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarVue',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
  },
}
</script>


<style scoped>
nav img {
  width: 50px;
}
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(41, 207, 126, 0.1);
  color: #29cf7e;
}

.router-link-active {
  background-color: rgba(41, 207, 126, 0.15);
  color: #29cf7e;
}

.icons i {
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.icons i:hover {
  background-color: rgba(0, 123, 255, 0.1);
  color: #29cf7e;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #333;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    position: fixed;
    right: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 2rem;
    transition: 0.3s ease;
  }

  .nav-links.nav-active {
    right: 0;
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .hamburger.is-active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>
