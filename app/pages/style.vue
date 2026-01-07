<script setup>
// Set the page title
useSeoMeta({
  title: "Style Guide",
});

const colorPalette = ref([
  {
    name: "Emporor",
    hex: "#555555",
  },
  {
    name: "Deep Cerulean",
    hex: "#006db0",
  },
  {
    name: "Swamp",
    hex: "#000e16",
  },
  {
    name: "Azure Radiance",
    hex: "#009eff",
  },
  {
    name: "Silver Sand",
    hex: "#bbbdbf",
  },
  {
    name: "Cerulean",
    hex: "#0ab1c7",
  },
  {
    name: "Old Lace",
    hex: "#fbf5e9",
  },
  {
    name: "Success",
    hex: "#28a745",
  },
  {
    name: "Warning",
    hex: "#ffc914",
  },
  {
    name: "Danger",
    hex: "#ed2d38",
  },
]);

function submitForm() {
  console.log("submit");
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <main class="main style-page">
    <header class="title-header">
      <h1>Style</h1>
    </header>
    <div class="content">
      <div>
        <h2>Color Scheme</h2>
        <ColorSwatches>
          <ColorSwatch
            v-for="colorSwatch in colorPalette"
            :key="colorSwatch.name"
            :color-swatch="colorSwatch"
          />
        </ColorSwatches>
      </div>
      <div>
        <h2>Typography</h2>

        <h1>Heading 1</h1>
        <p class="details">Font: Cormorant Garamond / Deep Cerulean #006db0</p>

        <hr />

        <h2>Heading 2</h2>
        <p class="details">Font: Cormorant Garamond / Cerulean #0ab1c7</p>

        <hr />

        <h3>Heading 3</h3>
        <p class="details">Font: Roboto / Swamp #000e16</p>

        <hr />

        <p>Body Text</p>
        <p>
          Lorem ipsum dolor sit amet, quis quam, fusce duis. Montes vestibulum
          esse, tristique dui lorem. Wisi cubilia. Nonummy justo, eros aliquet
          elit, nulla sollicitudin ut. Iaculis sit lacus, nisi orci nunc, pede
          convallis vestibulum.
        </p>
        <p>
          Sed tellus. Posuere est quis, lacus sit nec. Ultricies vehicula arcu,
          nunc nonummy id. Vivamus odio neque, faucibus duis. Non diam amet,
          elit nec semper.
        </p>

        <p>
          <a href="#">This is a link</a> -
          <a href="#" class="hover">This is a hover link</a>
        </p>

        <p class="details">Font: Roboto / Swamp #000e16</p>
      </div>
      <div class="button-examples">
        <h2>Default Layout Buttons</h2>
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-secondary">Secondary Button</button>
        <button class="btn btn-success">Success Button</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-danger">Delete</button>
      </div>
      <div>
        <h2>Forms</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="input1">Label</label>
            <input id="input1" class="form-control" placeholder="Placeholder" />
          </div>
          <div class="form-group">
            <label for="input2">Label</label>
            <input
              id="input2"
              class="form-control is-invalid"
              placeholder="Placeholder"
            />
            <div class="invalid-feedback">There was an error.</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.style-page {
  position: relative;
  padding: 25px 65px;
  .logo-container {
    max-width: 722px;
  }
}

.content {
  display: grid;
  grid-gap: 30px;
  @include bp-md-tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.button-examples {
  .btn {
    margin-right: rem(12);
    margin-bottom: rem(8);
  }
}
</style>
