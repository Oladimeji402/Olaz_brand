<template>
  <div class="container">
    <h1 class="section-title">Admin - Add New Product</h1>

    <!-- Add Product Form -->
    <form @submit.prevent="addProduct" class="add-product-form">
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input type="text" id="productName" v-model="newProduct.name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="productImage" class="form-label">Product Image</label>
        <input type="file" id="productImage" @change="handleImageUpload" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">Product Price</label>
        <input type="number" id="productPrice" v-model="newProduct.price" class="form-control" min="0" required />
      </div>
      <button type="submit" class="btn btn-success">Add Product</button>
    </form>

    <div v-if="successMessage" class="alert alert-success mt-3">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      newProduct: {
        name: "",
        image: "", // This will store the base64 image or URL
        price: 0,
      },
      successMessage: "",
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Store the base64 image string or URL of the uploaded file
          this.newProduct.image = e.target.result; // Base64 encoded image
        };
        reader.readAsDataURL(file); // Converts the image to base64 string
      }
    },
    async addProduct() {
      try {
        // Get existing products from product.json or local storage
        const response = await fetch("/product.json");
        const products = await response.json();

        // Add the new product to the products array
        const newProduct = {
          id: products.length + 1, // New ID for the product
          name: this.newProduct.name,
          image: this.newProduct.image, // Store the image base64 or URL
          price: parseFloat(this.newProduct.price),
        };
        products.push(newProduct);

        // Save the updated products array to local storage (simulating backend update)
        localStorage.setItem('products', JSON.stringify(products));

        // Clear form fields
        this.newProduct.name = "";
        this.newProduct.image = "";
        this.newProduct.price = 0;

        // Show success message
        this.successMessage = "Product added successfully!";
      } catch (error) {
        console.error("Error adding product:", error.message);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

.add-product-form {
  max-width: 600px;
  margin: 0 auto;
}

.mb-3 {
  margin-bottom: 1rem;
}

.form-label {
  font-weight: bold;
}

.form-control {
  border-radius: 4px;
}

.btn-success {
  background-color: #29cf7e;
  border-color: #29cf7e;
}

.alert-success {
  font-size: 1rem;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

/* File input style (optional) */
#productImage {
  padding: 5px;
}
</style>
