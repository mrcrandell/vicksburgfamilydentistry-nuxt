<script setup>
const animations = useStaggeredScrollAnimation(
  4,
  {
    animationClass: "animate-zoom-in",
  },
  150
);
</script>

<template>
  <section id="services" class="section services">
    <div class="content">
      <h2>Services</h2>
      <p class="lead">
        Our expert staff always provides premium quality service
      </p>

      <div class="service-cards">
        <div :ref="animations[0].target" class="card animate-zoom-in-prepare">
          <h3 class="card-header">Restorative / Cosmetic Dentistry</h3>
          <div class="card-body">
            <p>
              Utilizing both composite (white) fillings and amalgam (silver)
              fillings when appropriate.
            </p>
          </div>
        </div>
        <div :ref="animations[1].target" class="card animate-zoom-in-prepare">
          <h3 class="card-header">Crowns / Bridges / Implants</h3>
          <div class="card-body">
            <p>
              Extractions both surgical and simple extractions to include 3rd
              molars (wisdom teeth).
            </p>
          </div>
        </div>
        <div :ref="animations[2].target" class="card animate-zoom-in-prepare">
          <h3 class="card-header">Dentures</h3>
          <div class="card-body">
            <p>
              Complete (top and bottom) Dentures and we also make Partial
              Dentures.
            </p>
          </div>
        </div>
        <div :ref="animations[3].target" class="card animate-zoom-in-prepare">
          <h3 class="card-header">Ultrasonic Cleaning and Hygiene</h3>
          <div class="card-body">
            <p>
              Removes calculus, plaque biofilms, and bacterial byproducts from
              tooth surfaces.
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-center">Other Services</h3>
      <div class="services-grid">
        <div class="services-column">
          <ul>
            <li>Digital X-rays</li>
            <li>Oral Surgery (Extractions)</li>
            <li>Bridges</li>
            <li>Porcelain Veneers</li>
            <li>Teeth Whitening</li>
            <li>Cosmetic Fillings (White)</li>
            <li>Dental Implants</li>
          </ul>
        </div>
        <div class="services-column">
          <ul>
            <li>Dental Emergencies</li>
            <li>Crowns</li>
            <li>Dentures</li>
            <li>Endodontic Procedures (Root Canal)</li>
            <li>
              Soft tissue LASER<br /><small
                >(For cold sores/fever blisters or canker sores)</small
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.section.services {
  h3.text-center {
    text-align: center;
  }
}

.service-cards {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  margin-bottom: rem(32);
  @include bp-md-tablet {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: rem(30);
  }
  @include bp-lg-laptop {
    grid-template-columns: repeat(4, 1fr);
  }
  .card {
  }
}

.services-grid {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @include bp-md-tablet {
    flex-direction: row;
    justify-content: center;
    gap: rem(30);
  }

  .services-column {
    max-width: rem(300);
    width: 100%;
    flex-grow: 1;
    ul {
      margin: 0;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }
    }
  }
}
</style>
