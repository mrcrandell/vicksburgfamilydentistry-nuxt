<script setup>
const mapContainer = ref(null);
let map = null;

// Dentistry coordinates from old Google Maps code
const dentistryCoordinates = [42.121768, -85.542446];
const googleMapsUrl =
  "https://maps.google.com/?cid=ChIJPYHXP72hF4gRp9Fj9W-LTt0";

onMounted(async () => {
  // Only run on client side
  if (import.meta.client) {
    // Dynamically import Leaflet and CSS on client side only
    const [{ default: L }] = await Promise.all([
      import("leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]);

    // Fix Leaflet's default icon paths for Vite/Nuxt
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    });

    // Initialize the map
    map = L.map(mapContainer.value, {
      center: dentistryCoordinates,
      zoom: 15,
      scrollWheelZoom: false,
    });

    // Add tile layer (CartoDB Positron for clean, muted styling)
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Add marker for the dentistry
    const marker = L.marker(dentistryCoordinates).addTo(map);

    // Add popup with dentistry information
    marker
      .bindPopup(
        `
      <div style="text-align: center;">
        <strong>Vicksburg Family Dentistry</strong><br>
        602 West Prairie Street<br>
        Vicksburg, MI 49097<br>
        <br>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="color: #1976d2;">
          View on Google Maps
        </a>
      </div>
    `
      )
      .openPopup();

    // Enable scroll wheel zoom when clicking on map
    map.on("focus", () => {
      map.scrollWheelZoom.enable();
    });

    map.on("blur", () => {
      map.scrollWheelZoom.disable();
    });
  }
});

onUnmounted(() => {
  if (map) {
    map.remove();
  }
});
</script>

<template>
  <section id="contact-us" class="section contact-us">
    <div class="content">
      <h2>Contact Us</h2>
    </div>
    <div class="map-container">
      <div id="map" ref="mapContainer" class="map"></div>
    </div>
    <div class="content cards-container">
      <div class="card" data-aos="zoom-in">
        <h3 class="card-header">Send Us a Message</h3>
        <div class="card-body">
          <ContactForm />
        </div>
      </div>
      <div class="card" data-aos="zoom-in">
        <h3 class="card-header">Contact Information</h3>
        <div class="card-body">
          <div>
            <h4><span itemprop="name">Vicksburg Family Dentistry</span></h4>
            <address
              itemprop="address"
              itemscope
              itemtype="https://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">602 West Prairie Street</span
              ><br />
              <span itemprop="addressLocality">Vicksburg</span>,
              <span itemprop="addressRegion">MI</span>&nbsp;<span
                itemprop="postalCode"
                >49097</span
              >
            </address>
            <p>
              <a href="tel:12696491495"
                ><span itemprop="telephone">269-649-1495</span></a
              >
            </p>
            <p>
              <a href="mailto:vicksburgfamilydentistry@gmail.com"
                ><span itemprop="email"
                  >vicksburgfamilydentistry@gmail.com</span
                ></a
              >
            </p>
            <p>
              <a
                href="https://maps.google.com/?cid=15946836643540095399"
                itemprop="maps"
                >View on Google Maps</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="card" data-aos="zoom-in">
        <h3 class="card-header">Hours</h3>
        <div class="card-body">
          <table class="table hours-table">
            <tbody>
              <tr>
                <th>Monday</th>
                <td>
                  <time itemprop="openingHours" content="Mo 8:00-17:00"
                    >8:00am - 5:00pm</time
                  >
                </td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>
                  <time itemprop="openingHours" content="Tu 8:00-17:00"
                    >8:00am - 5:00pm</time
                  >
                </td>
              </tr>
              <tr>
                <th>Wednesday</th>
                <td>
                  <time itemprop="openingHours" content="We 8:00-17:00"
                    >8:00am - 5:00pm</time
                  >
                </td>
              </tr>
              <tr>
                <th>Thursday</th>
                <td>
                  <time itemprop="openingHours" content="Th 8:00-17:00"
                    >8:00am - 5:00pm</time
                  >
                </td>
              </tr>
              <tr>
                <th>Friday</th>
                <td>
                  <time itemprop="openingHours" content="Mo 8:00-14:00"
                    >8:00am - 2:00pm</time
                  >
                </td>
              </tr>
              <tr>
                <th>Saturday</th>
                <td>Closed</td>
              </tr>
              <tr>
                <th>Saturday</th>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.section.contact-us {
  background: #0ab1c7;
  background: -webkit-linear-gradient(
    to bottom right,
    rgb(0, 109, 176),
    rgb(10, 177, 199)
  ); /*Safari 5.1-6*/
  background: -o-linear-gradient(
    to bottom right,
    rgb(0, 109, 176),
    rgb(10, 177, 199)
  ); /*Opera 11.1-12*/
  background: -moz-linear-gradient(
    to bottom right,
    rgb(0, 109, 176),
    rgb(10, 177, 199)
  ); /*Fx 3.6-15*/
  background: linear-gradient(
    to bottom right,
    rgb(0, 109, 176),
    rgb(10, 177, 199)
  ); /*Standard*/
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    color: #fff;
  }
  #rc-imageselect,
  .g-recaptcha {
    transform: scale(0.76);
    -webkit-transform: scale(0.76);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
  }
  [v-cloak] {
    display: none;
  }
}

.map-container {
  margin-bottom: rem(32);
  overflow: hidden;
}

.map {
  width: 100%;
  height: rem(400);
  background: #f5f5f5;
  position: relative;

  // Apply styling to mimic Google Maps appearance with blue water
  :deep(.leaflet-tile-pane) {
    filter: contrast(90%) brightness(110%) saturate(120%) hue-rotate(5deg);
  }

  // Add blue tint overlay specifically for water areas
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 70%,
      rgba(0, 158, 255, 0.25) 0%,
      rgba(70, 188, 236, 0.15) 40%,
      transparent 70%
    );
    pointer-events: none;
    mix-blend-mode: color;
    z-index: 400;
  }

  // Ensure map controls are visible
  :deep(.leaflet-control-container) {
    font-size: 14px;
  }

  :deep(.leaflet-popup-content) {
    margin: 8px 20px;
    line-height: 1.4;
  }

  // Style the zoom controls to match theme
  :deep(.leaflet-control-zoom) {
    border: none;

    a {
      background-color: rgba(255, 255, 255, 0.9);
      color: #333;
      border: 1px solid rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #fff;
        color: var(--primary);
      }
    }
  }
}
.cards-container {
  display: flex;
  flex-direction: column;

  gap: rem(30);
}
</style>
