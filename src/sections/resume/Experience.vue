<template>
  <div>
    <b-row>
      <b-col md="6">
        <div class=" justify-content-between">
          <h5 class="company-name">{{ experience.company }}</h5>
          <div class="position-title">{{ experience.position }}</div>
        </div>
      </b-col>
      <b-col md="6" class=" text-md-right">
        <div class="justify-content-between mb-2 mt-2 mt-md-0">
          <span class="experience-date tag-md_">{{ experience.period }}</span>
          <div class="location d-none d-md-block text-muted">{{ experience.location }}</div>
        </div>
      </b-col>
    </b-row>
    <div v-if="experience.highlight" class="highlight mb-2">
      <strong>Highlight:</strong> {{ experience.highlight }}
    </div>
    <p class="job-description text-muted">{{ experience.description }}</p>
  </div>
</template>
<script>
export default {
  name: "experience",
  props: {
    experience: {}
  }
};
</script>
