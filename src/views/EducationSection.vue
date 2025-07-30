<template>
  <div>
    <h4 class="section-title mt-5">Education</h4>
    <b-row class="mt-4">
      <b-col>
        <b-card bg-variant="dark" class="rounded-lg h-100">
          <b-card-body>
            <div class="education-section">

              <div v-for="(edu, index) in education" :key="index" class="education-item"
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
  </div>
</template>
<script>
export default {
  name: 'education-section',
  props: {
    resumeData: {}
  },
  computed: {
    education () {
      return this.resumeData.education.filter(edu => !edu.hide);
    }
  }
}
</script>
<style scoped lang="scss">
.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 8px;
}

</style>
