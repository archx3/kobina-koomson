<template>
  <div>
    <h4 class="section-title mt-5">Experience</h4>
    <b-row class="mt-4">
      <b-col>
        <b-card bg-variant="dark" class="rounded-lg h-100">
          <b-card-body>
            <div class="experience-section mt-4">
              <experience
                v-for="(exp, index) in limitedExperiences"
                :key="index"
                :experience="exp"
                class="experience-item"
                :class="{ 'mt-4': index > 0 }"
              />
              <div v-if="showMoreButton" class=" mt-4">
                <b-button variant="primary" @click="openModal">Show All Experiences</b-button>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Modal -->
    <b-modal
      id="experience-modal"
      ref="experienceModal"
      title="All Experiences"
      header-class="p-4 px-5"
      body-class="p-5"

      size="xl" hide-footer centered >
      <experience
        v-for="(exp, index) in resumeData.experience"
        :key="index"
        :experience="exp"
        class="experience-item"
        :class="{ 'mt-4': index > 0 }"
      />
    </b-modal>
  </div>
</template>

<script>
import Experience from "@/sections/resume/Experience.vue";

export default {
  name: "experience-section",
  components: { Experience },
  props: {
    resumeData: {
      type: {
        experience: Array,
      },
      required: true,
    },
  },
  computed: {
    limitedExperiences () {
      // Show only the first 5 experiences
      return this.resumeData.experience.slice(0, 5);
    },
    showMoreButton () {
      // Show "Show More" button if experiences are more than 5
      return this.resumeData.experience.length > 5;
    },
  },
  methods: {
    openModal () {
      // Open the modal when "Show More" is clicked
      this.$refs.experienceModal.show();
    },
  },
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

.experience-section {
  .text-center {
    button {
      font-size: 14px;
    }
  }
}
</style>
