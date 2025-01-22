<template>
  <div class="terms-page container">
    <h1 class="page-title">Terms and Conditions</h1>
    <p class="intro-text">
      Welcome to our website. By accessing or using our services, you agree to comply with the following terms and conditions. Please read them carefully.
    </p>

    <section v-for="(section, index) in termsSections" :key="index" class="terms-section">
      <h2 class="section-title">{{ section.title }}</h2>
      <p v-for="(paragraph, idx) in section.content" :key="idx" class="section-paragraph">
        {{ paragraph }}
      </p>
    </section>

    <div class="agree-section">
      <button @click="handleAgree" class="agree-btn">I Agree</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert

export default {
  name: "TermsAndConditions",
  data() {
    return {
      termsSections: [
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing our website, you confirm that you accept these terms and conditions and that you agree to comply with them.",
            "If you do not agree to these terms, you must not use our website."
          ]
        },
        {
          title: "2. Changes to Terms",
          content: [
            "We may revise these terms at any time. Please check this page regularly to ensure you understand the terms that apply at that time.",
            "Your continued use of the site after changes are made constitutes your acceptance of the new terms."
          ]
        },
        {
          title: "3. User Responsibilities",
          content: [
            "You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others.",
            "You must not knowingly introduce viruses, trojans, or other malicious content."
          ]
        },
        {
          title: "4. Intellectual Property Rights",
          content: [
            "All content on this website, including text, graphics, and code, is our property or licensed to us and is protected by copyright laws.",
            "You may not use, reproduce, or distribute any content without our prior written consent."
          ]
        },
        {
          title: "5. Limitation of Liability",
          content: [
            "We are not responsible for any loss or damage caused by your use of this site or reliance on its content.",
            "We provide this site 'as is' without any warranties, express or implied."
          ]
        }
      ]
    };
  },
  methods: {
    handleAgree() {
      Swal.fire({
        title: "Thank You!",
        text: "You have successfully agreed to our terms and conditions.",
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        this.$router.push("/"); // Redirect to homepage (or any desired route)
      });
    }
  }
};
</script>

<style scoped>
.terms-page {
  padding: 2rem;
  background-color: #f8f9fa; /* Light background for readability */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #343a40; /* Dark gray text */
  margin-bottom: 1.5rem;
}

.intro-text {
  font-size: 1rem;
  color: #495057; /* Subtle gray for text */
  text-align: center;
  margin-bottom: 2rem;
}

.terms-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #212529; /* Darker text for section titles */
  margin-bottom: 0.5rem;
}

.section-paragraph {
  font-size: 1rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.agree-section {
  text-align: center;
  margin-top: 2rem;
}

.agree-btn {
  background-color: #38D287;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.agree-btn:hover {
  background-color: #38d288ac;
}
</style>
