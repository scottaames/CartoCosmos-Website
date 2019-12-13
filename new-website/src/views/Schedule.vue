<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title">Project Schedule</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Rough Timeline for Major Deliverables</h2>
          <h4>
            Below is the general timeline regarding the major deadlines for this
            project. While it is not absolute, it is a good estimation of our
            expected completion dates.
          </h4>
          <br />
          <div class="md-layout">
            <div
              class="md-layout-item md-medium-size-66 md-small-size-100 mx-auto"
            >
              <img
                :src="ganttTp"
                alt="Gantt Chart"
                class="img-raised rounded img-fluid"
              />
            </div>
            <div class="text-center lg-text">
              <br />
              <br />
              Our tentative schedule for this capstone project is split up into
              two different semesters. The first semester is the planning phase
              of our project and the second semester is the implementation
              phase. We have just finished the planning phase by completing our
              technical feasibility document, requirements acquisition, and our
              technical demo. Visit our
              <a href="#/documents">documents page</a> to learn more. We will
              begin the implementation phase of our project by implementing our
              virtual planetary mapping application using Leaflet. We will then
              connect our mapping application with Jupyter Notebooks. After
              these steps are completed, we can begin implementing stretch goal
              features and testing our Leaflet application. We will fix bugs
              along the way and deliver our final project to USGS in the
              beginning of May.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule",
  //bodyClass: "schedule",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/saturn-bg.jpg")
    },
    ganttTp: {
      type: String,
      default: require("@/assets/img/Gantt_Chart_Transparent.png")
    },
    ganttBg: {
      type: String,
      default: require("@/assets/img/Gantt_Chart_Bg.png")
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
  max-height: 66vh;
}
.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
