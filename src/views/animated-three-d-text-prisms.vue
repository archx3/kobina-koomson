<template>
  <div class="text-container d-flex" :class="className">
    <div class="prisms-row my-auto">
      <div
        v-for="(_, index) in maxLength"
        :key="index"
        class="character-prism-container"
        :style="{ animationDelay: `${index * charDelay}s` }"
      >
        <div
          class="character-prism"
          :style="{
            transform: `rotateX(${currentIndex * 120}deg)`,
            transitionDelay: `${index * charDelay}s`
          }"
        >
          <div
            v-for="(char, stringIndex) in getCharactersAtIndex(index)"
            :key="stringIndex"
            class="character-face"
            :style="{
              transform: `rotateX(${stringIndex * 120}deg) translateZ(var(--prism-depth))`
            }"
          >
            <span class="character-text text-monospace">{{ char === " " ? "\u00A0" : char }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "animated-three-d-text",
  props: {
    strings: {
      type: Array,
      default: () => ["Software Engineer", "Graphic Designer", "UI/UX Designer"]
    },
    duration: {
      type: Number,
      default: 5000
    },
    charDelay: {
      type: Number,
      default: 0.1
    },
    className: {
      type: String,
      default: ""
    },
    showProgress: {
      type: Boolean,
      default: true
    },
    showCurrentText: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentIndex: 0,
      interval: null
    };
  },
  computed: {
    maxLength () {
      return Math.max(...this.strings.map(str => str.length));
    },
    paddedStrings () {
      return this.strings.map(str => str.padEnd(this.maxLength, " "));
    }
  },
  mounted () {
    this.startAnimation();
  },
  beforeDestroy () {
    this.stopAnimation();
  },
  methods: {
    startAnimation () {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.strings.length;
      }, this.duration);
    },
    stopAnimation () {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    getCharactersAtIndex (charIndex) {
      return this.paddedStrings.map(str => str[charIndex]);
    }
  }
};
</script>

<style scoped>
.text-container {
  perspective: 1000px;
  perspective-origin: center center;
  /* CSS custom properties for responsive sizing */
  //--font-size: 2rem;
  --prism-width: 0.55em; /* Relative to font size */
  --prism-height: 1.2em; /* Relative to font size */
  --prism-depth: 0.75em; /* Relative to font size */
}

.prisms-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
  font-size: var(--font-size);
}

.character-prism-container {
  perspective: 400px;
  perspective-origin: center center;
}

.character-prism {
  position: relative;
  width: var(--prism-width);
  height: var(--prism-height);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.character-face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
}

.character-text {
  font-size: inherit;
  text-align: center;
  line-height: 1;
}

.current-text {
  text-align: center;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-container {
    --font-size: 1.5rem;
  }

  .prisms-row {
    gap: 1px;
  }
}

@media (max-width: 480px) {
  .text-container {
    --font-size: 1.2rem;
  }

  .prisms-row {
    gap: 0.5px;
  }
}

/* Hover effect for individual prisms */
.character-prism-container:hover .character-prism {
  transform: rotateX(0deg) scale(1.1);
  transition: transform 0.2s ease;
}

/* Animation for wave effect */
@keyframes wave-rotate {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(120deg);
  }
}
</style>
