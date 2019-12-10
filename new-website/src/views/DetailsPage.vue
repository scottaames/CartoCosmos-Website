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
          <h2 class="title text-center">Project Introduction</h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <div class="vertical-align-text">
                An important part of space exploration is collecting large 
                amounts of data and taking images of planetary bodies. 
                Scientists then create maps of these bodies by using the 
                images and data collected. These maps play a crucial role in 
                learning more about a body and its surface. For example, the 
                USGS Astrogeology Center in Flagstaff helped create the maps 
                used for the Apollo 11 mission.
                <br><br>
                Our client is a small team from the USGS consiting of Trent Hare
                and Scott Akins. <a href="/#/team">Learn more about them here.</a>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <img
                :src="moonMap"
                alt="Thumbnail Image"
                class="img-raised rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section tabs-section">
        <div class="container">
          <h2 class="title text-center">Project Details</h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-90 md-small-size-100 mx-auto">
              <tabs
                :tab-name="['Issues', 'Solution', 'Requirements']"
                :tab-icon="['report_problem', 'check_circle', 'list']"
                plain
                nav-pills-icons
                color-button="primary"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1">
                  <div class="text-center lg-text">
                    The problem our project aims to solve is two-fold;
                    how it affects developers and how it affects scientists.
                    As for the developers, in 2003, the USGS created an 
                    interactive mapping tool using the open-source package 
                    OpenLayers (OL). There are three main problems with the 
                    OL implemntation:

                    <ol class="text-left">
                      <li>It is 13 years old</li>
                      <li>It is not modular</li>
                      <li>The development team had to write their own math packages</li>
                    </ol>
                    Because the code is 13 years old and not modular, it is difficult
                    for the USGS developers to update. They also want to create
                    more mapping applications, and because the code is not modular,
                    they would have to rewrite their code every time they create
                    a new implementation. 
                    <br><br>
                    As for the scientists, it is very important that they have 
                    an application that gives them all the tools they need to 
                    conduct their research. Currently, there are many map-viewing 
                    applications on the Internet that scientists may use but 
                    there are a few fundamental problems with them:

                    <ol class="text-left">
                      <li>They only support maps of Earth</li>
                      <li>They do not allow users to change their latitude and longitude settings</li>
                      <li>They do not allow users to change what projection the current map is in</li>
                    </ol>
                    <br />
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
                  <div class="text-center lg-text">
                    Our envisioned solution is to create a JavaScript
                    package containing the required tranformations that
                    scientists need when doing research. We will
                    also build a Leaflet mapping application that will use this
                    package to display maps created by the USGS.
                    <br />
                    <br />
                    Our package will contain the extra functionality the USGS 
                    scientists need to conduct research. This includes code that 
                    allows users to change the projection of a map and swap 
                    latitude and longitude settings. This package will be 
                    modular, allowing it to be used in multiple mapping
                    applications.
                    <br />
                    <br />
                    Our Leaflet implementation will contain a new, modern GUI
                    with front-end functionality connecting the latitude and
                    longitude settings swapper and projection swapper. 
                    It will also allow users to zoom, move around the map, 
                    display all the USGS maps, and display surface features
                    on the map.

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
  bodyClass: "details-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/europa-bg.jpg")
    },
    moonMap: {
      type: String,
      default: require("@/assets/img/usgs-moon-map.jpg")
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
  font-size: 1.2em;
  line-height: 1.7em;
  text-align: center;
}

.section {
  padding: 70px 0;
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
</style>
