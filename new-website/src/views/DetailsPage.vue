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
                An important part of space exploration is collecting large 
                amounts of data and taking images of planetary bodies. 
                Scientists then create maps of these bodies by using the 
                images and data collected. These maps play a crucial role in 
                learning more about a body and its surface. For example, the 
                USGS Astrogeology Science Center (ASC) helped create the maps 
                used for the Apollo 11 mission, and you can see an example
                on the right.
                <br><br>
                Our client is a small team from the USGS consisting of Trent Hare
                and Scott Akins. <a href="/#/team">Learn more about them here.</a>
                They both work for the ASC, where both developers and scientists
                work together to support the planetary science community.
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <img
                :src="usgsMap"
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
                    <div class="md-layout">
                        <div class="md-layout-item md-size-50 md-xsmall-size-100">
                        Scientists have many different applications that aid
                        them in the map-making process; however, there are not
                        many interactive tools they can use to view maps. 
                        It is very important that these scientists 
                        have a mapping application they can use to complete
                        their research. Currently, there are a few mapping 
                        applications that they may use, but there are 
                        problems with them:

                        <ol class="text-left">
                          <li>They only support maps of Earth</li>
                          <li>They do not allow users to change their latitude and longitude settings</li>
                          <li>They do not allow users to change what projection the current map is in</li>
                        </ol>

                        USGS has a mapping application that scientists can use,
                        which can be seen to the right, but it is outdated.
                        USGS wants to update this application, but
                        the code itself is not modular, making it difficult 
                        to update.
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
                        Our envisioned solution is to build a new
                        interactive map that contains the extra functionality 
                        needed by the USGS scientists.
                        <br />
                        <br />

                        We will use Leaflet, an open-source mapping package, to build
                        our map. This Leaflet implementation will support more bodies 
                        than just Earth, will be able to swap projections, and will 
                        display the mouse's latitude and longitude. In order to
                        support more projections, we will be using a library called
                        PROJ that is widely-supported by the planetary science
                        community. This library allows users to define projections
                        and easily transform between them. Our diagram on the right
                        demonstrates that we will be using PROJ to transform
                        the map into its correct projection. Because we are
                        using PROJ, we will not need to write and test our own code.
                        <br />
                        <br />

                        Our implementation will also contain a new, modern GUI
                        with front-end functionality connecting the latitude and
                        longitude and projection swapper. 
                        It will also allow users to zoom, move around the map, 
                        display all the USGS maps, and display surface features
                        on the map.
                        <br />
                        <br />
                        
                        Alongside this map, we will
                        create a modular package that contains the back-end for the 
                        added functionality described above. Since this package
                        will be modular, it will be able to be used in any mapping
                        tool, including USGS's current outdated one. 
                        <br />
                        <br />
                      
                      </div>
                    </div>
                    <div class="text-center lg-text"></div>
                        <div
                          class="md-layout-item md-size-25 md-xsmall-size-100"
                        >
                          <img
                            :src="solutionPic"
                            alt="Thumbnail Image"
                            class="img-raised rounded"
                          />
                        </div>
                  </div>
                </template>
                <template slot="tab-pane-3">
                  <div class="text-center lg-text">
                    Through bi-weekly meetings with the USGS team and
                    Gitter messages/emails, we have aqcuired the requirements
                    of this project.
                    <br>
                    <br>
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
