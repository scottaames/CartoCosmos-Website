<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1>CartoCosmos</h1>
            <h2>Leaflet Plugin for Planetary Mapping</h2>
            <h4>
              2019-2020 Capstone Team Project at Northern Arizona University
            </h4>
            <br />
          </div>
          <!--           <md-button
            href="/details"
            class="md-button md-lg md-upgrade"
            target="_blank"
          >
            <i class="material-icons">map</i>Learn More
          </md-button> -->
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">About Our Product</h2>
              <h5 class="description">
                Leaflet for planetary mapping (Leaflet-planetary for short) is a
                plugin extension for
                <a href="https://leafletjs.com/">Leaflet</a> that supports
                mapping of planetary data sets. Our goal is to provide support
                to the planetary science community and their exploration of the
                solar system and beyond. This project is a senior capstone
                project by students at Northern Arizona University in Flagstaff,
                AZ, sponsored by the United States Geological Survey (USGS)
                Astrogeology Center, a NASA subsidiary.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>map</md-icon>
                  </div>
                  <h4 class="info-title">Interactive Viewing</h4>
                  <p>
                    Explore high resolution images of planetary bodies through
                    an enhanced version of Leaflet's graphical user interface.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>more</md-icon>
                  </div>
                  <h4 class="info-title">Custom Functionality</h4>
                  <p>
                    Scientist-tested features designed specifically for
                    planetary science. This includes:
                  </p>

                  <ul class="text-left">
                    <li>Latitude and longitude switcher</li>
                    <li>Scale bar and Zoom</li>
                    <li>Projection switcher</li>
                    <li>Layer switcher</li>
                    <li>Surface Feature Overlay</li>
                  </ul>
                  ...and <a href="/detailspage">more.</a>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>share</md-icon>
                  </div>
                  <h4 class="info-title">Compatability</h4>
                  <p>
                    Built with portability, compatibility, and extendability in
                    mind. Support for all modern web browsers and compatibile
                    with The Jupyter Notebook to facilitate data sharing between
                    users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="btn-container">
                <md-button
                  href="/#/detailspage""
                  class="md-button md-primary md-lg md-upgrade"
                  target="_blank"
                >
                  <md-icon>info</md-icon>Learn More
                </md-button>
                <md-button
                  class="md-button md-primary md-lg md-upgrade"
                  href="https://github.com/scottaames/CartoCosmos"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  CartoCosmos GitHub
                  <md-tooltip md-direction="bottom"
                    >Check out our project on GitHub</md-tooltip
                  >
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/mars-bg.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
}
ul.text-left {
  margin-left: 3rem;
}
</style>
