<template>
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
</template>
<script>
export default {
  name: 'refereces-section',
  props: {
    resumeData: {}
  }
}
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

.reference-item {
  background-color: rgba($accent-color, 0.05);
  padding: 15px;
  border-radius: 5px;
  height: 100%;

  .reference-position, .reference-contact {
    font-size: 14px;
    //color: #555;
    margin-top: 5px;
  }
}
</style>
