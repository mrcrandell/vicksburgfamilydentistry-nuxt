<template>
  <section id="about-us" class="section about-us">
    <div class="content">
      <h2>About Us</h2>
      <h3>Dr. Aaron C. Ford</h3>
      <p>
        Dr. Ford grew up in Sturgis, Michigan and earned his bachelors degree
        from Western Michigan University in 1999. While at Western, he was
        involved in the Army ROTC program. After graduation, Dr. Ford was
        commissioned in the United States Army as a Second Lieutenant. He served
        two years at Fort Hood, Texas in the 1st Cavalry Division where he was a
        medical platoon leader in the Medical Service Corps. His next assignment
        took him to Walter Reed Army Medical Center in Washington, DC, where he
        spent the next two years in the Health Physics Department.
      </p>
      <p>
        After his commitment with the Army, Dr. Ford entered dental school in
        2003 at the University of Michigan and graduated in 2007. He moved to
        Vicksburg in 2009 and really enjoys living in south west Michigan. Dr.
        Ford is married to Maureen McGlinchey Ford and they have three children.
      </p>
      <p>
        He is a member of the American Dental Association, Michigan Dental
        Association, and Kalamazoo Valley District Dental Society. He
        participates in many continuing education courses throughout the year.
      </p>

      <hr />

      <div class="photo-section">
        <h3>Dear Valued Patients,</h3>
        <picture>
          <source
            srcset="
              @/assets/img/dr-young@2x.jpg 2x,
              @/assets/img/dr-young.jpg    1x
            "
            type="image/jpeg"
          />
          <img src="@/assets/img/dr-young.jpg" alt="Dr. Young" />
        </picture>
        <p>
          We are excited to share some wonderful news with you! As part of our
          commitment to providing the best quality of care, we are expanding our
          team. Please join us in welcoming Dr. Young, our new associate
          dentist, who will be joining our practice.
        </p>

        <p>
          Dr. Young comes to us with a wealth of experience and a passion for
          dentistry. You can expect the same high standards of care that you
          have always received, now with the added benefit of Dr. Young's
          expertise. Together, Dr. Ford and Dr. Young will ensure that you and
          your family continue to receive exceptional dental care.
        </p>

        <p>
          We want to reassure you that Dr. Ford will still be here to serve you.
          There are no changes to your current treatment plans or appointments.
          Our goal is to provide you with even more availability for your dental
          needs, as we continue to grow.
        </p>

        <p>
          Thank you for being a part of our dental family. We look forward to
          continuing to serve you with the same dedication you have come to
          expect from us.
        </p>

        <p>Warm regards,<br /><strong>Vicksburg Family Dentistry</strong></p>
      </div>

      <hr />

      <h3>Office Staff</h3>
      <p>
        The office is managed by Kris who brings 25 years of dental experience.
        The front desk is run by Cindi and Nicole, who will greet you with a
        smile and are very willing to help you with your insurance and billing
        questions.
      </p>
      <p>
        Paula and Gaye are Dr Ford's assistants. They are very good at making
        you feel comfortable during procedures and always have a warm friendly
        smile. Dr Young's assistant is Nikki who comes with 30 years of
        experience.
      </p>
      <p>
        Heidi, Dana, Jamie, Kelly, Tara and Alex are our hygienists. They all do
        an excellent job cleaning your teeth while keeping you comfortable. They
        have a wealth of knowledge concerning your oral hygiene needs. Be sure
        to ask them anything that may be on your mind concerning your oral
        hygiene.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.photo-section {
  picture img {
    @include shadow-3();
    border: 5px solid #fff;
    max-width: 100%;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      float: left;
      margin-right: 20px;
      max-width: 300px;
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    overflow: auto; // Clears the float
  }
}
</style>
