<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">
            Documents and Presentations
          </h2>
          <h4 class="text-center">
            Here are all of the major deliverables and documents for CartoCosmos
            and Leaflet-planetary. These were compiled over the two semesters
            that were alotted for the project from start to finish. This
            provides an in-depth look at the inner workings of the project and
            our team members.
          </h4>
          <br />
          <br />
          <div class="section tabs-section">
            <div class="container">
              <div class="md-layout">
                <div class="md-layout-item md-size-100 mx-auto">
                  <tabs
                    :tab-name="[
                      'Team Standards',
                      'Team Inventory',
                      'Mini Intro.',
                      'Tech Feasibility',
                      'Design Review 1',
                      'Requirements'
                    ]"
                    :tab-icon="[
                      'people_alt',
                      'archive',
                      'present_to_all',
                      'poll',
                      'build',
                      'work'
                    ]"
                    plain
                    flex-column
                    nav-pills-icons
                    color-button="rose"
                  >
                    <template slot="tab-pane-1" class="pdf-container">
                      <div class="text-center lg-text">
                        Th Team Standards lays down the roles of each of our
                        team members in detail and the guidelines and rules we
                        have established with the intention of holding ourselves
                        and each other accountable over the course of this
                        project.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./TeamStandards.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-2" class="pdf-container">
                      <div class="text-center lg-text">
                        The Team Inventory contains biographies of our team
                        members. For those interested in getting to know our
                        team a little better--where we've been and what we like.
                        <br />
                        <br />
                        <object
                          data="./TeamInventory.pdf"
                          type="application/pdf"
                        ></object>
                      </div>
                    </template>
                    <template slot="tab-pane-3" class="pdf-container">
                      <div class="text-center lg-text">
                        The Introductory Presentation is a short introduction to
                        our project along with our initial thoughts on
                        implementation and possible challenges we might face.
                        <br />
                        <br />
                        <object
                          data="./IntroPresentation.pdf"
                          type="application/pdf"
                        ></object>
                      </div>
                    </template>
                    <template slot="tab-pane-4" class="pdf-container">
                      <div class="text-center lg-text">
                        The Technolgical Feasibility is an assessment of the
                        project. It evaluates and breaks down the expected
                        technolgical challenges, what our solutions are to the
                        challenges, and how we plan to integrate each of them
                        into a singular solution.
                        <br />
                        <br />
                        <object
                          data="./Tech_Feasibility.pdf"
                          type="application/pdf"
                        ></object>
                      </div>
                    </template>
                    <template slot="tab-pane-5" class="pdf-container">
                      <div class="text-center lg-text">
                        The first Design Review presentation where we present
                        our findings from the Technolgical Feasibility and
                        Requirements Documents, in addition to the potential
                        risks during development and how we plan to alleviate
                        their impact and likelihood.
                        <br />
                        <br />
                        <object
                          data="./DesignReview01.pdf"
                          type="application/pdf"
                        ></object>
                      </div>
                    </template>
                    <template slot="tab-pane-6" class="pdf-container">
                      <div class="text-center lg-text">
                        The Requirements document contains a detailed
                        examination of the requirements for the project. It
                        contains top-level functionality which is broken down
                        into the functional, non-functional (performance), and
                        environmental requirements and their specifics.
                        <br />
                        <br />
                        <object
                          data="./Requirements.pdf"
                          type="application/pdf"
                        ></object>
                      </div>
                    </template>
                  </tabs>
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
h4.text-center {
  width: 80%;
  margin: 0 auto;
}

.lg-text {
  font-size: 1.2em;
  line-height: 1.6em;
  width: 100%;
  height: 100%;
  //margin: 0 auto;
}
object {
  height: 42em !important;
  width: 100% !important;
}

.pdf-container {
  height: 600px !important;
}

.tabs-section {
  background-color: #eeeeee;
}
</style>
