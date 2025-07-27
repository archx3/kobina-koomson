<template>
  <div v-if="resumeData.affiliations && resumeData.affiliations.length > 0"
       class="affiliations-section mt-4">
    <h4 class="section-title">Affiliations</h4>
    <ul class="affiliations-list">
      <li v-for="(affiliation, index) in resumeData.affiliations" :key="index">
        <strong>{{ affiliation.organisation }}</strong>
        <span v-if="affiliation.role" class="text-muted ml-2">({{ affiliation.role }})</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'affliliations-section',
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

.affiliations-list {
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    font-size: 15px;
    //color: #555;
  }
}

</style>
