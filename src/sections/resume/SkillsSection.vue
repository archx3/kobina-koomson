<template>
  <div class="skills-section mt-4">
    <h4 class="section-title">Key Skills</h4>

    <b-row>
      <b-col cols="12" md="6" class="">
        <b-card bg-variant="dark" class="rounded-lg h-100">
          <b-card-header class="">
            <h5 class="skill-category-title font-weight-600 text-lg">Languages</h5>
          </b-card-header>
          <b-card-body class="bg-dark">
            <div class="mb-2">
              <strong>Proficient:</strong>
              <div class="skills-container">
                <span v-for="(skill, index) in resumeData.skills.programmingLanguages.proficient"
                      :key="'prof-'+index" class="skill-tag tag">{{ skill }}</span>
              </div>
            </div>
            <div>
              <strong>Familiar:</strong>
              <div class="skills-container">
                <span v-for="(skill, index) in resumeData.skills.programmingLanguages.familiar"
                      :key="'fam-'+index" class="skill-tag tag">{{ skill }}</span>
              </div>
            </div>

            <h6 class="skill-category-title mt-5 font-weight-600 text-lg">Databases & ORMs</h6>
            <div class="skills-container">
              <span v-for="(skill, index) in resumeData.skills.databaseOrm" :key="'db-'+index"
                    class="skill-tag tag">{{ skill }}</span>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card bg-variant="dark" class="rounded-lg h-100">
          <b-card-header class=" ">
            <h5 class="skill-category-title font-weight-600 text-lg">Platforms & Frameworks</h5>
          </b-card-header>
          <b-card-body class=" ">
            <div class="skills-container">
              <span v-for="(skill, index) in resumeData.skills.platformsFrameworks" :key="'plat-'+index"
                    class="skill-tag tag">{{ skill }}</span>
            </div>

            <div class="mt-5">
              <h5 class="skill-category-title font-weight-600 text-lg">Version Control</h5>
              <div class="skills-container">
                <span v-for="(skill, index) in resumeData.skills.versionControl" :key="'vc-'+index"
                      class="skill-tag">{{ skill }}</span>
              </div>
            </div>

            <div class="mt-5">
              <h5 class="skill-category-title">DevOps</h5>
              <div class="skills-container">
                <span v-for="(skill, index) in resumeData.skills.devOps" :key="'do-'+index"
                      class="skill-tag tag">{{ skill }}</span>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col>
        <b-card bg-variant="dark" class="rounded-lg h-100">
          <b-card-body class="bg-dark ">
            <b-row>
              <b-col md="3">
                <h6 class="skill-category-title">UI/UX Design</h6>
                <div class="skills-container">
                  <span v-for="(skill, index) in resumeData.skills.uiUxDesign" :key="'ui-'+index"
                        class="skill-tag tag">{{ skill }}</span>
                </div>
              </b-col>
              <b-col>
                <h6 class="skill-category-title">Graphic Design, Video, 3D Art</h6>
                <div class="skills-container">
                  <span v-for="(skill, index) in resumeData.skills.graphicDesign" :key="'gd-'+index"
                        class="skill-tag tag">{{ skill }}</span>
                  <span v-for="(skill, index) in resumeData.skills.multimedia" :key="'mm-'+index"
                        class="skill-tag tag">{{ skill }}</span>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  props: {
    resumeData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-category-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}
</style>
