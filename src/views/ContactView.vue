<template>
  <div class="container">
    <div class="row p-5">
      <!-- Contact Us Section -->
      <div class="col-md-4">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or suggestions, don't hesitate to get in touch with us. Our team
          speaks English and Spanish and is always happy to help!
        </p>
      </div>

      <!-- Contact Details Section -->
      <div class="col-md-8 bg-light p-3">
        <div class="row">
          <div class="col-md-4 mt-4">
            <h3>Working Hours</h3>
            <p>Weekdays: 10AM to 8PM</p>
            <p>Weekends: 11AM to 6PM</p>
          </div>
          <div class="col-md-4 mt-4">
            <h3>Where are we?</h3>
            <p>No56, Ibadan, Ijebu Ode, Ogun State, FL 36602</p>
            <p>Phone: +234-901-379-9068</p>
          </div>
          <div class="col-md-4 mt-md-5">
            <p>No30, Abeokuta, Ijebu Ode, Ogun State, KS 67213</p>
            <p>Phone: +234-803-384-9728</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="row mb-4">
      <div class="col-md-12">
        <h3 class="text-center">Our Locations</h3>
        <div id="map" style="height: 400px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "ContactView",
  mounted() {
    // Initialize the map
    const map = L.map("map").setView([7.3775, 3.947], 8); // Coordinates centered on Ogun State, Nigeria

    // Add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for the locations
    const locations = [
      {
        coords: [7.3775, 3.947],
        popup: "No56, Ibadan, Ijebu Ode, Ogun State, FL 36602",
      },
      {
        coords: [7.1591, 3.3568],
        popup: "No30, Abeokuta, Ijebu Ode, Ogun State, KS 67213",
      },
    ];

    locations.forEach((location) => {
      L.marker(location.coords)
        .addTo(map)
        .bindPopup(location.popup)
        .openPopup();
    });
  },
};
</script>

<style>
/* Ensure the map container has a height */
#map {
  width: 100%;
  height: 400px;
}
</style>
