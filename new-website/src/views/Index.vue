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
              <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">
                Leaflet for planetary mapping (Leaflet-planetary for short) is a
                plugin extension for
                <a href="https://leafletjs.com/" target="_blank">Leaflet</a>
                that supports mapping of planetary data sets. Our goal is to
                provide support to the planetary science community and their
                exploration of the solar system and beyond. This is a senior
                capstone project by Scott Ames, Kaitlyn Lee, Jacob Kaufman, and
                Christopher Moore, with mentoring from Isaac Shaffer, at
                Northern Arizona University in Flagstaff, AZ. We are proudly
                sponsored by the United States Geological Survey (USGS)
                Astrogeology Center, a NASA subsidiary.
              </h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto text-center">
              <md-button
                href="/team"
                class="md-button md-success md-lg md-upgrade"
              >
                <md-icon>people_alt</md-icon>Meet the Team
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <div class="section feature-section">
        <div class="container">
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
                  <div class="icon icon-primary">
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
                  href="/detailspage"
                  class="md-button md-success md-lg md-upgrade"
                >
                  <md-icon>info</md-icon>Learn More
                </md-button>
                <md-button
                  class="md-button md-success md-lg md-upgrade"
                  href="https://github.com/CartoCosmos/CartoCosmos.github.io"
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
          <div class="section">
            <div class="container">
              <h2 class="title text-center">
                Leaflet-planetary Demo
              </h2>
              <h4 class="text-center">
                This is a glimpse at what our project will look like and how it
                will function, but it is far from our final product.
              </h4>
              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <div class="map-container text-center">
                    <object
                      data="./leaflet/example/map.html"
                      type="image/gif"
                    ></object>
                  </div>
                </div>
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
.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
.feature-section {
  padding-top: 0 !important;
}

object {
  height: 100vh !important;
  width: 80% !important;
  //margin: 0 auto !important;
  margin-left: 50px;
}

.map-container {
  height: 100% !important;
  width: 100% !important;
}
</style>
