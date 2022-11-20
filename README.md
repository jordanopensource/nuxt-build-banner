# JOSA Build info banner

This is a Nuxt2 banner that displays the Drone build info that are injected into the build args of the docker image during build time in the pipline.

## Usage

npm install the package

And Load it into your `nuxt.config.js` modules:

```js
  export default {
  ...
  modules: [
    'nuxt-build-banner',
  ],
  ....
}
```

Add the following as environmental variables

```env
TARGET_ENV=
DRONE_COMMIT_SHA=
DRONE_BUILD_NUMBER=
DRONE_BUILD_LINK=
DRONE_COMMIT_LINK=
DRONE_REPO_LINK=
DRONE_BUILD_FINISHED=
```

Make sure to pass them in `nuxt.config.js` as public runtime config

```js
export default {
  ...
    publicRuntimeConfig: {
    DRONE_COMMIT_SHA: process.env.DRONE_COMMIT_SHA,
    DRONE_COMMIT_LINK: process.env.DRONE_COMMIT_LINK,
    DRONE_BUILD_NUMBER: process.env.DRONE_BUILD_NUMBER,
    DRONE_BUILD_LINK: process.env.DRONE_BUILD_LINK,
    DRONE_REPO_LINK: process.env.DRONE_REPO_LINK,
    DRONE_BUILD_FINISHED: process.env.DRONE_BUILD_FINISHED,
    TARGET_ENV: process.env.TARGET_ENV
  }
  ....
}
```

Last thing load the module inside your default layout page, or where ever you want to display it.

```jsx
<buildInfoBanner />
```

If you want to display it only when development mode is enabled

```jsx
<buildInfoBanner v-if="config.TARGET_ENV==='development'" />
```
