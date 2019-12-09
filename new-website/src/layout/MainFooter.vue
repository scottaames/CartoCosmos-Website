<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/detailspage">
              Project Details
            </a>
          </li>
          <li>
            <a href="/team">
              Our Team
            </a>
          </li>
          <li>
            <a href="/schedule">
              Schedule
            </a>
          </li>
          <li>
            <a href="/documents">
              Documentation
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        Design by
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
        and Scott Ames
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
