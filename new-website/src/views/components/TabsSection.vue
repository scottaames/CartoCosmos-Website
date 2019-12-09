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
                  md-label="Issues"
                  md-icon="report_problem"
                >
                  <template slot="content"> </template>
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
  name: "tabs",
  components: {
    NavTabsCard
  }
};
</script>

<style lang="css"></style>
