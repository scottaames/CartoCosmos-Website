<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <h3>Project Details</h3>
      <div class="md-layout">
        <div class="md-layout-item md-size-90 md-small-size-100">
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs md-sync-route class="md-primary" md-alignment="left">
                <md-tab
                  id="tab-home"
                  md-label="Team Standards"
                  md-icon="people_alt"
                >
                  <template slot="content">
                    <!-- <div class="text-center lg-text"> -->
                    Th Team Standards lays down the roles of each of our team
                    members in detail and the guidelines and rules we have
                    established with the intention of holding ourselves and each
                    other accountable over the course of this project.
                    <!-- <br />
                      <br />
                    </div>
                    <object
                      data="./TeamStandards.pdf"
                      type="application/pdf"
                    ></object> -->
                  </template>
                </md-tab>

                <md-tab
                  id="tab-solution"
                  md-label="Solution"
                  md-icon="check_circle"
                >
                  <template slot="content">
                    <p></p>
                  </template>
                </md-tab>

                <md-tab
                  id="tab-requirements"
                  md-label="Requirements"
                  md-icon="list"
                >
                  <template slot="content"> </template>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  name: "nav-tabs",
  components: {
    NavTabsCard
  }
};
</script>

<style lang="css"></style>
