<template>
  <div id="app" ref="globalHost" class="blk fp global-host ys position-relative">
    <nav-bar />
    <div id="hero-area" class="main-content hero-area-bg container-full-bg overflow-auto">
      <div class="container">
        <div class="row justify-content-between">

          <div class="col">
            <div class="contents page-header-inner home-text text-left mb-5">

              <!-- Contact Information -->
              <!--              <div class="contact-info mt-4">
                              <div class="row">
                                <div class="col-md-6">
                                  <p><span class="font-weight-600">Email: </span>{{ ADDRESS_DATA.email }}</p>
                                  <p><span class="font-weight-600">Address: </span> {{ ADDRESS_DATA.location }}</p>
                                </div>
                                <div class="col-md-6 text-right">
                                  <p class="text-right"><span class="font-weight-600">Phone: </span> {{ ADDRESS_DATA.phone }}<span class="mx-3 user-select-none select-none">|</span>{{ADDRESS_DATA.secondaryPhone}}</p>

                                  <p class="text-right"><span class="font-weight-600">Correspondence: </span> {{ ADDRESS_DATA.correspondence}}</p>
                                </div>
                              </div>

                              <div class="social-links mt-2">
                                <a v-if="resumeData.personalInfo.website" :href="resumeData.personalInfo.website" target="_blank" class="social-link">
                                  <i class="fas fa-globe"></i> {{ resumeData.personalInfo.website }}
                                </a>
                                <a v-if="resumeData.personalInfo.linkedin" :href="resumeData.personalInfo.linkedin" target="_blank" class="social-link">
                                  <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a v-if="resumeData.personalInfo.github" :href="resumeData.personalInfo.github" target="_blank" class="social-link">
                                  <i class="fab fa-github"></i> GitHub
                                </a>
                              </div>
                            </div>-->

              <!-- Professional Summary -->
              <div class="professional-summary my-6">
                <h4 class="section-title">About Me</h4>
                <p class="">
                  {{ resumeData.professionalSummary }}
                </p>
              </div>

              <!-- Skills Section -->
              <skills-section :resume-data="resumeData" />

              <!-- Experience Section -->
              <experience-section :resume-data="resumeData" />

              <!-- Education Section -->
              <h4 class="section-title mt-5">Education</h4>
              <b-row class="mt-4">
                <b-col>
                  <b-card bg-variant="dark" class="rounded-lg h-100">
                    <b-card-body>
                      <div class="education-section">

                        <div v-for="(edu, index) in resumeData.education" :key="index" class="education-item"
                             :class="{ 'mt-4': index > 0 }">
                          <div class="d-flex justify-content-between">
                            <h5 class="institution-name">{{ edu.institution }}</h5>
                            <span class="education-date">{{ edu.period }}</span>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <div class="degree">{{ edu.degree }}</div>
                            <div class="location">{{ edu.location }}</div>
                          </div>
                          <div v-if="edu.highlights && edu.highlights.length > 0" class="highlights mt-2">
                            <strong>Highlights:</strong>
                            <ul class="mt-1">
                              <li v-for="(highlight, hIndex) in edu.highlights" class=" text-muted" :key="hIndex">
                                {{ highlight }}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>

              <!-- Certifications Section -->
              <certifications-section :resume-data="resumeData" />

              <affliliations-section :resume-data="resumeData" />

              <!-- References Section -->
<!--              <refereces-section :resume-data="resumeData" />-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <mini-footer />
  </div>
</template>

<script>
import NavBar from "@/layout-components/nav.vue";
import MiniFooter from "@/layout-components/mini-footer.vue";
import resumeData from "@/config/resume-data.js";
import { ADDRESS_DATA } from "@/config/address";
import CertificationsSection from "@/sections/resume/CertificationsSection.vue";
import ExperienceSection from "@/sections/resume/ExperienceSection.vue";
import SkillsSection from "@/sections/resume/SkillsSection.vue";
import AffliliationsSection from "@/sections/resume/AffliliationsSection.vue";

export default {
  name: "resume",
  computed: {
    ADDRESS_DATA () {
      return ADDRESS_DATA;
    }
  },
  components: { AffliliationsSection, SkillsSection, ExperienceSection, CertificationsSection, NavBar, MiniFooter },
  data () {
    return {
      title: "George Kobina Koomson - Resume",
      resumeData: resumeData
    };
  },
  mounted () {
    document.title = this.title;
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/scss/colors";
@import "../assets/styles/scss/media-queries";

.my-name {
  font-size: 32px;
  margin-bottom: 15px;

  .official-name {
    color: $accent-color;
  }
}

.skill-highlight {
  background-color: rgba($accent-color, 0.2);
  color: $accent-color;
  padding: 5px 10px;
}

.contact-info {
  //p {
  //  margin-bottom: 8px;
  //  display: flex;
  //  align-items: center;
  //
  //  i {
  //    margin-right: 10px;
  //    color: $accent-color;
  //    width: 20px;
  //  }
  //}

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .social-link {
      display: inline-flex;
      align-items: center;
      background-color: rgba($accent-color, 0.1);
      color: $accent-color;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 14px;
      text-decoration: none;
      transition: all 0.3s ease;

      i {
        margin-right: 8px;
      }

      &:hover {
        background-color: $accent-color;
        color: white;
      }
    }
  }
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 8px;
  color: $accent-color;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: $accent-color;
  }
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .skill-tag {
    background-color: rgba($accent-color, 0.1);
    color: $accent-color;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
  }
}

.skill-category {
  margin-bottom: 15px;

  .skill-category-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    color: $accent-color;
  }
}

</style>
