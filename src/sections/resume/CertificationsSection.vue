<template>
  <div>
    <h4 class="section-title mt-7">Certifications</h4>
    <b-row v-if="resumeData.certifications && resumeData.certifications.length > 0"
           class="certifications-section mt-4">
      <b-col v-for="(cert, index) in resumeData.certifications" :key="index">
        <b-card class="h-100">
          <b-card-body>
            <div class="certification-item"
            >
              <div class="d-flex justify-content-between">
                <h5 class="certification-title">{{ cert.title }}</h5>
                <span class="certification-year">{{ cert.year }}</span>
              </div>
              <div class="certification-issuer mb-2">{{ cert.issuer }}</div>
              <p class="certification-description">{{ cert.description }}</p>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "certifications-section",
  props: {
    resumeData: {
      type: {
        certifications: Array
      },
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/scss/colors";
@import "../../assets/styles/scss/media-queries";

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

</style>
