<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Documents and Presentations</h2>
          <div class="section tabs-section">
            <div class="container">
              <h2 class="title text-center">Project Details</h2>
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-90 md-small-size-100 mx-auto"
                >
                  <tabs
                    :tab-name="['Issues', 'Solution', 'Requirements']"
                    :tab-icon="['report_problem', 'check_circle', 'list']"
                    plain
                    nav-pills-icons
                    color-button="primary"
                  >
                    <!-- here you can add your content for tab-content -->
                    <template slot="tab-pane-1"> </template>
                    <template slot="tab-pane-2">
                      <div class="text-center lg-text">
                        Our envisioned solution is to create a JavaScript node
                        package containing the required mapping translations
                        that can be used across multiple mapping applications.
                        We will also build a Leaflet mapping application that
                        will use this package to display maps created by USGS.
                        <br />
                        <br />
                        The application will allow users to zoom, move the
                        location of the view, select an area on the map, see
                        gazetteer names and symbols on the map, use variable
                        radii, convert between 0:360 and -180:180 longitude
                        ranges, convert between ographic and ocentric latitudes,
                        and load data layers. The Leaflet application will
                        connect to the USGS database containing data on their
                        maps and have an autocomplete search to find maps from
                        the database. Two end goals of this project are to have
                        our node package incorporated into the Leaflet API and
                        to allow the USGS team to use our package in their
                        OpenLayers implementation.
                      </div>
                    </template>
                    <template slot="tab-pane-3">
                      <div class="text-center lg-text">
                        From a user-level perspective, we have identified three
                        domain-level requirements that our project needs to
                        satisfy:

                        <ol class="text-left">
                          <li>
                            We must deliver an application that displays
                            planetary data through an interactive viewer that is
                            embedded in a web-based environment.
                          </li>
                          <li>
                            The application must accomplish the primary goal of
                            being research-driven in nature.
                          </li>
                          <li>
                            We must create a portable package that can be used
                            across multiple mapping applications.
                          </li>
                        </ol>
                        You can see more in depth requirements for the project
                        in our requirements document
                        <a href="/documents">located here.</a>
                      </div>
                    </template>
                  </tabs>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
              <md-card>
                <carousel
                  :per-page="1"
                  loop
                  :speed="700"
                  autoplay
                  :autoplay-timeout="5000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                >
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <object
                      data="src/assets/docs/capstoneProjectPropsal.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <object
                      data="src/assets/docs/TeamStandards.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <object
                      data="src/assests/docs/TeamInventory.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <object
                      data="src/assests/docs/IntroPresentation.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <object
                      data="src/assests/docs/Tech_Feasibility.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <object
                      data="src/assests/docs/DesignReview01.pdf"
                      type="application/pdf"
                    >
                    </object>
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>
      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";

export default {
  name: "documents",
  bodyClass: "documents",
  components: {
    Tabs
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/pluto-bg.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  data() {
    return {
      classicModal: false
    };
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  max-height: 50vh;
}
.section {
  padding: 70px 0;
}
</style>
