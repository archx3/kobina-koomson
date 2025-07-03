<template>
  <div id="app" ref="globalHost" class="blk fp global-host ys position-relative">
    <nav-bar/>
    <div id="hero-area" class="hero-area-bg container-full-bg main-content overflow-auto">
      <div class="container">
        <div class="row justify-content-between main-actions">

          <div class="col">
            <div class="contents page-header-inner home-text text-left mb-5">
              <h3 class="my-name">
                <span class='font-weight-light'>George <span class='official-name font-weight-bold'>Kobina</span> Koomson</span>
              </h3>
              <p>
                A <span class="skill-highlight badge-pill badge badge-light pb-0">{{ resumeData.personalInfo.title }}</span> with expertise in
                full-stack web development, UI/UX design, and graphic design.
              </p>

              <!-- Contact Information -->
              <div class="contact-info mt-4">
                <div class="row">
                  <div class="col-md-6">
                    <p><i class="pi pi-at"></i>{{ ADDRESS_DATA.email }}</p>
                    <p><i class="pi pi-map-marker"></i> {{ ADDRESS_DATA.location }}</p>
                  </div>
                  <div class="col-md-6">
                    <p><i class="pi pi-phone"></i> {{ ADDRESS_DATA.phone }} | {{ADDRESS_DATA.secondaryPhone}}</p>

                    <p><i class="pi pi-envelope"></i> {{ ADDRESS_DATA.correspondence}}</p>
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
              </div>

              <!-- Professional Summary -->
              <div class="professional-summary mt-4">
                <h4 class="section-title">Professional Summary</h4>
                <p class="text-muted">
                  {{ resumeData.professionalSummary }}
                </p>
              </div>

              <!-- Skills Section -->
              <div class="skills-section mt-4">
                <h4 class="section-title">Key Skills</h4>

                <!-- Programming Languages -->
                <div class="skill-category mt-3">
                  <h5 class="skill-category-title">Programming Languages</h5>
                  <div class="mb-2">
                    <strong>Proficient:</strong>
                    <div class="skills-container">
                      <span v-for="(skill, index) in resumeData.skills.programmingLanguages.proficient" :key="'prof-'+index" class="skill-tag">{{ skill }}</span>
                    </div>
                  </div>
                  <div>
                    <strong>Familiar:</strong>
                    <div class="skills-container">
                      <span v-for="(skill, index) in resumeData.skills.programmingLanguages.familiar" :key="'fam-'+index" class="skill-tag">{{ skill }}</span>
                    </div>
                  </div>
                </div>

                <!-- Platforms & Frameworks -->
                <div class="skill-category mt-3">
                  <h5 class="skill-category-title">Platforms & Frameworks</h5>
                  <div class="skills-container">
                    <span v-for="(skill, index) in resumeData.skills.platformsFrameworks" :key="'plat-'+index" class="skill-tag">{{ skill }}</span>
                  </div>
                </div>

                <!-- UI/UX Design -->
                <div class="skill-category mt-3">
                  <h5 class="skill-category-title">UI/UX Design</h5>
                  <div class="skills-container">
                    <span v-for="(skill, index) in resumeData.skills.uiUxDesign" :key="'ui-'+index" class="skill-tag">{{ skill }}</span>
                  </div>
                </div>

                <!-- Database & ORM -->
                <div class="skill-category mt-3">
                  <h5 class="skill-category-title">Database & ORM</h5>
                  <div class="skills-container">
                    <span v-for="(skill, index) in resumeData.skills.databaseOrm" :key="'db-'+index" class="skill-tag">{{ skill }}</span>
                  </div>
                </div>

                <!-- Other Skills -->
                <div class="row mt-3">
                  <div class="col-md-4">
                    <h5 class="skill-category-title">Graphic Design</h5>
                    <div class="skills-container">
                      <span v-for="(skill, index) in resumeData.skills.graphicDesign" :key="'gd-'+index" class="skill-tag">{{ skill }}</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h5 class="skill-category-title">Version Control</h5>
                    <div class="skills-container">
                      <span v-for="(skill, index) in resumeData.skills.versionControl" :key="'vc-'+index" class="skill-tag">{{ skill }}</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h5 class="skill-category-title">DevOps</h5>
                    <div class="skills-container">
                      <span v-for="(skill, index) in resumeData.skills.devOps" :key="'do-'+index" class="skill-tag">{{ skill }}</span>
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <h5 class="skill-category-title">Multimedia</h5>
                  <div class="skills-container">
                    <span v-for="(skill, index) in resumeData.skills.multimedia" :key="'mm-'+index" class="skill-tag">{{ skill }}</span>
                  </div>
                </div>
              </div>

              <!-- Experience Section -->
              <div class="experience-section mt-4">
                <h4 class="section-title">Experience</h4>
                <div v-for="(exp, index) in resumeData.experience" :key="index" class="experience-item" :class="{ 'mt-4': index > 0 }">
                  <div class="d-flex justify-content-between">
                    <h5 class="company-name">{{ exp.company }}</h5>
                    <span class="experience-date">{{ exp.period }}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <div class="position-title">{{ exp.position }}</div>
                    <div class="location">{{ exp.location }}</div>
                  </div>
                  <div v-if="exp.highlight" class="highlight mb-2">
                    <strong>Highlight:</strong> {{ exp.highlight }}
                  </div>
                  <p class="job-description">{{ exp.description }}</p>
                </div>
              </div>

              <!-- Education Section -->
              <div class="education-section mt-4">
                <h4 class="section-title">Education</h4>
                <div v-for="(edu, index) in resumeData.education" :key="index" class="education-item" :class="{ 'mt-4': index > 0 }">
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
                      <li v-for="(highlight, hIndex) in edu.highlights" :key="hIndex">{{ highlight }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Certifications Section -->
              <div v-if="resumeData.certifications && resumeData.certifications.length > 0" class="certifications-section mt-4">
                <h4 class="section-title">Certifications</h4>
                <div v-for="(cert, index) in resumeData.certifications" :key="index" class="certification-item" :class="{ 'mt-3': index > 0 }">
                  <div class="d-flex justify-content-between">
                    <h5 class="certification-title">{{ cert.title }}</h5>
                    <span class="certification-year">{{ cert.year }}</span>
                  </div>
                  <div class="certification-issuer mb-2">{{ cert.issuer }}</div>
                  <p class="certification-description">{{ cert.description }}</p>
                </div>
              </div>

              <!-- Affiliations Section -->
              <div v-if="resumeData.affiliations && resumeData.affiliations.length > 0" class="affiliations-section mt-4">
                <h4 class="section-title">Affiliations</h4>
                <ul class="affiliations-list">
                  <li v-for="(affiliation, index) in resumeData.affiliations" :key="index">{{ affiliation }}</li>
                </ul>
              </div>

              <!-- References Section -->
              <div v-if="resumeData.references && resumeData.references.length > 0" class="references-section mt-4">
                <h4 class="section-title">References</h4>
                <div class="row">
                  <div v-for="(reference, index) in resumeData.references" :key="index" class="col-md-6 mb-3">
                    <div class="reference-item">
                      <h5 class="reference-name">{{ reference.name }}</h5>
                      <div class="reference-position">{{ reference.position }}</div>
                      <div class="reference-contact">{{ reference.contact }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mini-footer/>
  </div>
</template>

<script>
import NavBar from "@/layout-components/nav.vue";
import MiniFooter from "@/layout-components/mini-footer.vue";
import resumeData from "@/config/resume-data.js";
import { ADDRESS_DATA } from "../config/address";

export default {
  name: "resume",
  computed: {
    ADDRESS_DATA () {
      return ADDRESS_DATA
    }
  },
  components: { NavBar, MiniFooter },
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
  p {
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
      color: $accent-color;
      width: 20px;
    }
  }

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

.experience-item, .education-item, .certification-item {
  margin-bottom: 15px;

  .company-name, .institution-name, .certification-title, .reference-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .experience-date, .education-date, .certification-year {
    font-size: 14px;
    color: #777;
  }

  .job-description, .education-description, .certification-description {
    font-size: 15px;
    color: #555;
  }

  .position-title, .degree {
    font-size: 16px;
    font-weight: 500;
    color: $accent-color;
  }

  .location, .certification-issuer {
    font-size: 14px;
    color: #777;
  }

  .highlight {
    background-color: rgba($accent-color, 0.1);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
  }

  .highlights {
    ul {
      padding-left: 20px;

      li {
        margin-bottom: 5px;
        font-size: 14px;
        color: #555;
      }
    }
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

.affiliations-list {
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    font-size: 15px;
    color: #555;
  }
}

.reference-item {
  background-color: rgba($accent-color, 0.05);
  padding: 15px;
  border-radius: 5px;
  height: 100%;

  .reference-position, .reference-contact {
    font-size: 14px;
    color: #555;
    margin-top: 5px;
  }
}
</style>
