<template>
  <!-- Main Section -->
  <section class="section main">
    <div class="content">
      <div class="row">
        <div class="col-sm-8 order-1">
          <h1>
            Committed to Providing an Exceptional Level of Care and Attention
          </h1>
          <p class="lead">
            Dr. Aaron Ford and the staff at Vicksburg Family Dentistry work
            together as a team to provide high-quality comprehensive care. We
            take pride in paying close attention to each patient's needs.
          </p>
          <p>
            <a
              href="#services"
              data-mt-duration="300"
              class="js-trigger btn btn-lg btn-outline-light"
              >See Our Services
              <i class="fa fa-angle-down" aria-hidden="true"></i
            ></a>
          </p>
        </div>
        <div class="col-sm-4 order-12">
          <img
            class="img-fluid"
            src="@/assets/img/main-office.jpg"
            alt="Vicksburg Family Dentistry"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.section.main {
  background: #0ab1c7;
  background: -webkit-linear-gradient(
    to bottom right,
    rgb(10, 177, 199),
    rgb(0, 109, 176)
  ); /*Safari 5.1-6*/
  background: -o-linear-gradient(
    to bottom right,
    rgb(10, 177, 199),
    rgb(0, 109, 176)
  ); /*Opera 11.1-12*/
  background: -moz-linear-gradient(
    to bottom right,
    rgb(10, 177, 199),
    rgb(0, 109, 176)
  ); /*Fx 3.6-15*/
  background: linear-gradient(
    to bottom right,
    rgb(10, 177, 199),
    rgb(0, 109, 176)
  ); /*Standard*/
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  color: #fff;
  h1 {
    color: #fff;
    margin-bottom: 25px;
  }
  p {
    @include font-size(rem(20));
    font-weight: 300;
    margin-bottom: rem(25);
  }
  img {
    @include shadow-3();
    border: 5px solid #fff;
  }
}
.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}
</style>
