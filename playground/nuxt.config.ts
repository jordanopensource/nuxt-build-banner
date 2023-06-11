export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig: {
    public: {
      targetEnv: "",
      buildCommitSha: "",
      buildCommitLink: "",
      buildNumber: "",
      buildLink: "",
      buildRepoLink: "",
      buildTimestamp: "",
    },
  },
})
