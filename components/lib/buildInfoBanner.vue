<template>
  <div v-if="!this.bannerClosed">
    <div class="banner">
      <div class="main-container">
        <div class="row-container">
          <span>🔨</span>
          <p>
            <span class="font-bold">Build</span>:
            <a
              :href="$config.DRONE_BUILD_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              #{{ $config.DRONE_BUILD_NUMBER }}
            </a>
            <a
              :href="$config.DRONE_COMMIT_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              ({{ $config.DRONE_COMMIT_SHA && $config.DRONE_COMMIT_SHA.slice(0, 6) }})
              </a>
          </p>
        </div>
        <div class="row-container">
          <span>🚧</span>
          <p> <span class="font-bold"> Environment: </span> {{ $config.TARGET_ENV }} </p>
          <button class="bannerBtn" v-on:click="closeBanner">
            &#215;
          </button>
        </div>
      </div>
    </div>
    <div class="hidden-whitespace"></div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      bannerClosed: false,
    }
  },
  methods: {
    closeBanner() {
      this.bannerClosed = true
    },
  },
}
</script>
<style scoped>

.main-container,
.row-container,
.banner {
  display: flex;
  align-items: center;
}

.banner {
  direction: ltr;
  justify-content: space-between;
  background-color: #019ec3;
  width: 100%;
  height: 36px;
  z-index: 10;
  position: fixed;
  top:0;
}

.banner p,
.banner a,
.banner button {
  color: white;
}

.main-container {
  justify-content: space-between;
  margin:0 auto;
  height: inherit;
  padding: 0 40px;
  width: 100%;
}

.row-container {
  column-gap: 0.5rem;
}

.bannerBtn {
  font-size: 2rem;
  font-weight: bold;
}
.hidden-whitespace {
  height: 36px;
}
</style>
