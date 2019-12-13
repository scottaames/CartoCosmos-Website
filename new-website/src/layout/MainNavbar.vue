<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <img class="logo" :src="logo" alt="Logo" />
        <h1 class="md-title">CartoCosmos</h1>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <md-list>
              <li class="md-list-item">
                <router-link
                  exact
                  to="/"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-home"></i>
                      <p>Home</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/detailspage"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-clipboard-list"></i>
                      <p>Project Details</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/team"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-users"></i>
                      <p>Our Team</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/schedule"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="far fa-calendar-alt"></i>
                      <p>Schedule</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/documents"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-file-alt"></i>
                      <p>Documentation</p>
                    </md-button>
                  </div>
                </router-link>
              </li>

              <md-list-item
                href="https://github.com/CartoCosmos/CartoCosmos.github.io"
                target="_blank"
              >
                <i class="fab fa-github"></i>
                <p class="hidden-lg">Github</p>
                <md-tooltip md-direction="bottom"
                  >Check out our project on Github</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

export default {
  components: {},
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    logo: {
      type: String,
      default: require("@/assets/img/final_logo_lg.png")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style lang="scss">
.logo {
  width: 2em;
}
</style>
