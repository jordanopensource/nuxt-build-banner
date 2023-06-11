# JOSA Build info banner

This is a Nuxt3 module for our banner that displays the Drone build info that are injected into the build args of the docker image during build time in the pipline.

## Usage

npm install the package

```bash
# using npm
npm i --save-dev @josango/nuxt3-build-banner

# Using pnpm
pnpm add -D @josango/nuxt3-build-banner
```

And Load it into your `nuxt.config.ts` modules:

```js
  export default defineNuxtConfig({
  ...
  modules: [
    '@josango/nuxt-build-banner',
  ],
  ....
})
```

Add the following as environmental variables in `.env`

```env
NUXT_PUBLIC_TARGET_ENV=
NUXT_PUBLIC_BUILD_COMMIT_SHA=
NUXT_PUBLIC_BUILD_NUMBER=
NUXT_PUBLIC_BUILD_LINK=
NUXT_PUBLIC_BUILD_COMMIT_LINK=
NUXT_PUBLIC_BUILD_REPO_LINK=
NUXT_PUBLIC_BUILD_TIMESTAMP=
```

Make sure to pass them in `nuxt.config.ts` as public runtime config

```js
export default defineNuxtConfig({
  ...
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
  ...
})
```

Last thing load the module inside your default layout page, or where ever you want to display it.

```jsx
<buildInfoBanner />
```

If you want to display it only when development mode is enabled

```jsx
<buildInfoBanner v-if="useRuntimeConfig().public.targetEnv==='development'" />
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```
