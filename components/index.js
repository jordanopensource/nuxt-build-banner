import Vue from 'vue'
import components from './lib'
// loop through components and register them
for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
  })
}
