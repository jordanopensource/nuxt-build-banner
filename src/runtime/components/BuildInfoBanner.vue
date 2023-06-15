<template>
  <div
    v-if="!state.bannerClosed"
    class="banner"
  >
    <div class="banner-container">
      <div>
        <span>🔨</span>
        <p>
          <span class="font-bold">Build</span>:
          <a
            :href="config.public.buildLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            #{{ config.public.buildNumber }}
          </a>
          <a
            :href="config.public.buildCommitLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            ({{ config.public.buildCommitSha.slice(0, 6) }})
          </a>
        </p>
      </div>
      <div>
        <span>🚧</span>
        <p>
          <span class="font-bold"> Environment: </span>
          {{ config.public.targetEnv }}
        </p>
        <button
          class="banner-btn"
          @click="closeBanner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="close-icon"
          >
            <path
              fill="white"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue"
import { useRuntimeConfig } from "nuxt/app"

const config = useRuntimeConfig()
const state = reactive({
  bannerClosed: false,
})
const closeBanner = () => {
  state.bannerClosed = true
}
</script>
<style scoped>
.header {
  font-size: 18px;
  direction: ltr;
  font-family: 'IBM Sans';
}
.banner p,
.banner a {
  color: white;
  text-decoration: none;
}
.banner-btn {
  background: none;
  border: none;
}
.banner-btn .close-icon:hover {
  background-color: #00718a;
  border-radius: 8px;
}
.font-bold {
  font-weight: 700;
}

.banner {
  background-color: #019ec3;
  width: 100%;
  height: 40px;
  z-index: 20;
  display: flex;
}
.banner-container > div {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

/* Banner container */
.banner .banner-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1.25rem/* 20px */;
  padding-left: 1.25rem/* 20px */;
}
@media (min-width: 640px) {
  .banner .banner-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .banner .banner-container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .banner .banner-container {
    max-width: 1024px;
    padding-right: 2.5rem/* 40px */;
    padding-left: 2.5rem/* 40px */;
  }
}
@media (min-width: 1280px) {
  .banner .banner-container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .banner .banner-container {
    max-width: 1536px;
  }
}
</style>