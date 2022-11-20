<template>
  <div class="banner" v-if="!this.bannerClosed">
    <div class="container">
      <div class="flex items-center gap-x-4">
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
      <div class="flex items-center gap-x-4">
        <span>🚧</span>
        <p> <span class="font-bold"> Environment: </span> {{ $config.TARGET_ENV }} </p>
        <button class="bannerBtn" v-on:click="closeBanner">
          &#215;
        </button>
      </div>
    </div>
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
.banner p,
.banner a,
.banner button {
  color: white;
}

.bannerBtn{
  font-weight: bold;
}

.banner {
  background-color: #019ec3;
  width: 100%;
  height: 36px;
  z-index: 10;
  position: fixed;
  top:0;
}

.container{
  margin:0 auto 0 auto;
  height: inherit;
  padding: 0 40px 0 40px;
}

.banner .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
