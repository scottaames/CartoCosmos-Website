<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title text-center">
              Documentation, <br />Deliverables, <br />and Presentations
            </h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h5 class="title text-center">
            Here are all of the major deliverables and documents for CartoCosmos
            and Leaflet-planetary. These were compiled over the two semesters
            that were alotted for the project from start to finish. This
            provides an in-depth look at the inner workings of the project and
            our team members.
          </h5>
          <br />
          <br />
          <hr class="separator-line" />
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
                      'Requirements',
                      'Tech Demo Memo'
                    ]"
                    :tab-icon="[
                      'people_alt',
                      'archive',
                      'present_to_all',
                      'poll',
                      'build',
                      'work',
                      'build'
                    ]"
                    plain
                    flex-column
                    nav-pills-icons
                    color-button="primary"
                  >
                    <template slot="tab-pane-1" class="pdf-container">
                      <div class="text-center lg-text">
                        The Team Standards lays down the roles of each of our
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
                      </div>
                      <object
                        data="./TeamInventory.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-3" class="pdf-container">
                      <div class="text-center lg-text">
                        The Introductory Presentation is a short introduction to
                        our project along with our initial thoughts on
                        implementation and possible challenges we might face.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./IntroPresentation.pdf"
                        type="application/pdf"
                      ></object>
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
                      </div>
                      <object
                        data="./Tech_Feasibility.pdf"
                        type="application/pdf"
                      ></object>
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
                      </div>
                      <object
                        data="./DesignReview01.pdf"
                        type="application/pdf"
                      ></object>
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
                      </div>
                      <object
                        data="./Requirements.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-7" class="pdf-container">
                      <div class="text-center lg-text">
                        The Technogical Demonstraion Memo describes the
                        challenges we aimed to solve in our preliminary
                        demonstration of our project, and how we plan on solving
                        them.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./TechDemoMemo.pdf"
                        type="application/pdf"
                      ></object>
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
  //bodyClass: "documents",
  components: {
    Tabs
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/pluto-bg.jpg")
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
  max-height: 66vh;
}
h4.text-center {
  width: 80%;
  margin: 0 auto;
}

.lg-text {
  font-size: 1.1em;
  line-height: 1.6em;
  width: 100%;
  height: 100%;
  //margin: 0 auto;
}
object {
  height: 48em !important;
  width: 100% !important;
}

.pdf-container {
  height: 100% !important;
}

.tabs-section {
  border: 2px;
}

.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
