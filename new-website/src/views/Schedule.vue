<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
    </parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Project Schedule</h2>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule",
  bodyClass: "schedule",
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
  max-height: 50vh;
}
</style>
