<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
    </parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Meet the Team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="kaitlyn"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Kaitlyn Lee
                      <br />
                      <small class="card-description text-muted"
                        >Team Lead/Customer Communicator</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Kaitlyn is originally from Lake Havasu, Arizona, and is
                        graduating with a bachelor's degree in math and computer
                        science in May of 2020. Kaitlyn currently works at the
                        United States Geological Survey as a Software
                        Development. She enjoys programming, playing
                        games with friends and family, watching soccer, playing
                        basketball, and learning about our solar system.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/kaitlyn-lee-0b6939190/"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                      <md-button
                        href="https://github.com/kaitlyndlee"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="scott"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Scott Ames
                      <br />
                      <small class="card-description text-muted"
                        >Release Manager/Website Manager</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Scott was born and raised in Temecula, CA, and is a
                        computer science major set to graduate in May of 2020.
                        He currently works at Northern Arizona University as a
                        Teacher's Assistant for the School of Infomatics,
                        Computing, and Cyber Systems. His professional experience
                        includes full stack web development and backend
                        services. In his free time, he enjoys planetary and deep
                        sky viewing with his telescope, camping, hiking,
                        traveling, playing video games, and coding.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/scott-ames-16763852/"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                      <md-button
                        href="https://github.com/scottaames"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="jacob"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Jacob Kaufman
                      <br />
                      <small class="card-description text-muted"
                        >Recorder/Architect</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Jacob is from Sammamish, WA, and is graduating with a
                        bachelor's degree in computer science in May of 2020. He
                        currently works at Schreiner Group as a Software
                        Development Intern. Jacob also throws the hammer on the
                        university's track and field team. In his off time, he
                        likes to play sports and video games.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="chris"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Christopher Moore
                      <br />
                      <small class="card-description text-muted"
                        >Document Editor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Chris is originally from Chandler, AZ, and is graduating
                        with a bachelor's degree in applied computer science
                        with a minor in electrical engineering in May of 2020.
                        He currently works at Northern Arizona University
                        Information Technology as an Enterprise Student Worker.
                        He hopes to have a career in robotics in the future.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Project Sponsors and Mentor</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="isaac"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Isaac Shaffer
                      <br />
                      <small class="card-description text-muted"
                        >Team Mentor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Isaac is a graduate student studying physics who assists
                        in the capstone process and provides invaluable feedback
                        to his teams.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/isaac-shaffer-887060166/"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="trent"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Trent Hare
                      <br />
                      <small class="card-description text-muted"
                        >Project Sponsor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Trent is a Cartographer, GIS, Manager, and Supervisor at
                        USGS who leads project development and management of
                        cartographic and science research tasks for NASA science
                        and exploration programs.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://astrogeology.usgs.gov/people/trent-hare"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fas fa-globe"></i>
                      </md-button>
                      <md-button
                        href="https://github.com/thareUSGS"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="scottAkins"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid team-pic"
                      />
                    </div>
                    <h4 class="card-title">
                      Scott Akins
                      <br />
                      <small class="card-description text-muted"
                        >Project Sponsor</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Scott is a on the Web Development and Support Team at
                        USGS.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://astrogeology.usgs.gov/people/scott-akins"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fas fa-globe"></i>
                      </md-button>
                       <md-button
                        href="https://github.com/USGSsakins"
                        class="md-just-icon md-simple"
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-size-100 mx-auto text-center">
                <md-button
                  href="https://www.usgs.gov/centers/astrogeology-science-center"
                  class="md-success md-lg"
                  target="_blank"
                >
                  <i class="fas fa-globe"></i>USGS Astrogeology
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/galaxy-bg.jpg")
    },
    scott: {
      type: String,
      default: require("@/assets/img/scott.jpg")
    },
    jacob: {
      type: String,
      default: require("@/assets/img/jacob.png")
    },
    kaitlyn: {
      type: String,
      default: require("@/assets/img/kaitlyn.jpg")
    },
    chris: {
      type: String,
      default: require("@/assets/img/chris.jpg")
    },
    scottAkins: {
      type: String,
      default: require("@/assets/img/scott-akins.jpeg")
    },
    trent: {
      type: String,
      default: require("@/assets/img/trent.jpg")
    },
    isaac: {
      type: String,
      default: require("@/assets/img/isaac.jpeg")
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
  max-height: 50vh;
}

.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
h4 {
  font-size: 1.3em;
  line-height: 1.7em;
}
p {
  font-size: 1.3em;
  line-height: 1.7em;
}
</style>
