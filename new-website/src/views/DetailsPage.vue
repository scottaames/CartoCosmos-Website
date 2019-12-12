<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">A New Way to View the Cosmos</h1>
            <div class="blockquote">
              <h4>
                "The exploration of space will go ahead, whether we join in it
                or not, and it is one of the great adventures of all time, and
                no nation which expects to be the leader of other nations can
                expect to stay behind in the race for space."
              </h4>
              <h5>
                &ensp; - JOHN F. KENNEDY, September 12, 1962
              </h5>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">Introduction</h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <div class="vertical-align-text">
                An important part of space exploration is launching satellites
                into space toorbit planetary bodies, collect large amounts of
                data, and take images of these bodies. The data and images are
                sent back to Earth and used by the planetary science community
                to create planetary maps. These maps play a crucial role in
                understanding more about these bodies and their surfaces. For
                example, the USGS Astrogeology Center helped create the maps
                used for the Apollo 11 mission landing sites. This is a map of
                the created by USGS. There are many different tools for
                scientists to create these maps, but we don’t really have a good
                tool to view these maps virtually, and our project aims to solve
                this problem.
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <img
                :src="marsMap"
                alt="Thumbnail Image"
                class="img-raised rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section tabs-section">
        <div class="container">
          <h2 class="title text-center">Details</h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto">
              <tabs
                :tab-name="[
                  'Issues',
                  'Solution',
                  'Requirements',
                  'Technologies'
                ]"
                :tab-icon="['report_problem', 'check_circle', 'list', 'apps']"
                plain
                nav-pills-icons
                color-button="primary"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1">
                  <div class="text-center lg-text">
                    The USGS team created a planetary mapping application by
                    modifying OpenLayer v2 (pictured below), an open-source
                    mapping application. The mapping application has been very
                    useful to many researchers for displaying USGS’s planetary
                    data but it has two main drawbacks of OpenLayers:

                    <ol class="text-left">
                      <li>It does not support planetary mapping</li>
                      <li>
                        It is not modular or expandable in nature
                      </li>
                    </ol>
                    <div class="md-layout">
                      <div class="md-layout-item md-size-50 md-xsmall-size-100">
                        All of the maps that USGS created for planets and moons
                        are currently “faking” the data (modifying the data
                        based on conversions from one planet or body to Earth's
                        radius) to map all of these different bodies. This
                        causes the data to be represented inaccurately. The
                        Openlayers codebase has updated its code to an entirely
                        new codebase that no longer supports the code written
                        years ago by USGS. Since their code is not modular, the
                        USGS development team is having to rewrite the
                        OpenLayers code to make the planetary maps work with the
                        updated version of OpenLayers. Their code needs to be
                        modular so that even if one open-source mapping
                        application fails or does not support the code anymore,
                        they will still have a working program.
                      </div>
                      <div class="md-layout-item md-size-50 md-xsmall-size-100">
                        <img
                          :src="moonMap"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>
                    </div>
                    <br />
                    <md-button
                      href="https://planetarymapping.wr.usgs.gov/Target/project/Moon"
                      class="md-button md-primary md-lg md-upgrade"
                      target="_blank"
                    >
                      <md-icon>explore</md-icon>Current USGS Solution
                    </md-button>
                  </div>
                </template>
                <template slot="tab-pane-2">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-50 md-xsmall-size-100">
                      <div class="text-center lg-text">
                        Our envisioned solution is to create a JavaScript node
                        package containing the required mapping translations
                        that can be used across multiple mapping applications.
                        We will also build a Leaflet mapping application that
                        will use this package to display maps created by USGS.
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
                        <div class="text-center lg-text"></div>
                        <div
                          class="md-layout-item md-size-50 md-xsmall-size-100"
                        >
                          <img
                            :src="solutionPic"
                            alt="Thumbnail Image"
                            class="img-raised rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="tab-pane-3">
                  <div class="text-center lg-text">
                    From a user-level perspective, we have identified three
                    domain-level requirements that our project needs to satisfy:

                    <ol class="text-left">
                      <li>
                        We must deliver an application that displays planetary
                        data through an interactive viewer that is embedded in a
                        web-based environment.
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
                    You can see more in depth requirements for the project in
                    our requirements document
                    <a href="/documents">located here.</a>
                  </div>
                </template>
                <template slot="tab-pane-4">
                  <div class="team text-center">
                    <div class="md-layout">
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="babelLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid babel-pic"
                              />
                            </div>
                            <h4 class="card-title">Babel</h4>
                            <md-card-content>
                              <p class="card-description">
                                Babel is a toolchain that we will use to convert
                                ECMAScript into a backwards compatible version
                                of JavaScript for use in current and older
                                browsers or environments.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="jupyterLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid jupyter-pic"
                              />
                            </div>
                            <h4 class="card-title">Jupyter Notebook</h4>
                            <md-card-content>
                              <p class="card-description">
                                We intend to make our project compatible with
                                Jupyter Notebooks for ease of future development
                                and use by the USGS community of researchers and
                                scientists.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="leafletLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid leaflet-pic"
                              />
                            </div>
                            <h4 class="card-title">Leaflet</h4>
                            <md-card-content>
                              <p class="card-description">
                                Leaflet is the core JavaScript library we are
                                building off of. It is just 38 KB, is
                                mobile-friendly, interactive, and has all the
                                mapping features most developers ever need.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
export default {
  components: {
    Tabs
  },
  name: "detailspage",
  //bodyClass: "details-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/europa-bg.jpg")
    },
    moonMap: {
      type: String,
      default: require("@/assets/img/usgs-moon-map.jpg")
    },
    marsMap: {
      type: String,
      default: require("@/assets/img/leaflet-mars-map.png")
    },
    solutionPic: {
      type: String,
      default: require("@/assets/img/solution.png")
    },
    leafletLogo: {
      type: String,
      default: require("@/assets/img/leaflet-logo.png")
    },
    jupyterLogo: {
      type: String,
      default: require("@/assets/img/jupyter-logo.png")
    },
    babelLogo: {
      type: String,
      default: require("@/assets/img/babel-logo.svg")
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
ol.text-left {
  text-align: center;
  list-style-position: inside;
}

.vertical-align-text {
  display: table-cell;
  height: 450px;
  vertical-align: middle;
  font-size: 1.1em;
  line-height: 1.7em;
  text-align: center;
  padding: 10px;
}

.babel-pic {
  //height: 60%;
  width: 75%;
}
.jupyter-pic {
  //height: 100%;
  width: 35%;
}
.leaflet-pic {
  padding-top: 25px;
  height: 100%;
  //width: 100%;
}

.lg-text {
  font-size: 1.3em;
  line-height: 1.7em;
}

.page-header {
  max-height: 75vh;
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;

  &::before {
    background: rgba(0, 0, 0, 0.2);
  }
}

.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
