## Components <!-- omit in toc -->

- [@ alias in VS Code workspace](#alias-in-vs-code-workspace)
- [Base components](#base-components)
- [Functional components](#functional-components)
- [Composition API](#composition-api)
- [Image lazy loading](#image-lazy-loading)

### @ alias in VS Code workspace

Vetur works fine when the `tsconfig.json` is at the root of the opened folder but in a workspace with multiple folder, there is no root folder per say so Vetur _cannot find module (...)_. Problem is _Vetur-specific_ and the code runs perfectly fine.

References:

- Opened issue https://github.com/vuejs/vetur/issues/1572 >> Root cause: https://github.com/vuejs/vetur/issues/815
- Suspected related: https://github.com/vuejs/vetur/issues/762
- `eslint.workingDirectories` hack not working T_T: https://github.com/microsoft/vscode-eslint#settings-options
  References:

### Base components

Components, usually the most elementary piece of UI, are often used in other components. Make those components global saves us few imports. I decided to go with a `components/base` folder without sub-folder as I do not expect this Vue.js application to grow big enough to justify sub-folders. Except when declaring the component name (`name: "MyComponent"`), I handle all components name in kebab-case so base components are registered in kebab-case.

References:

- [Vue.js doc: Global Registration](https://vuejs.org/v2/guide/components-registration.html#Global-Registration)
- [Vue.js doc: Automatic Global Registration of Base Components](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)
- [A real-world example with file name conversation in component name](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js)

### Functional components

> Since functional components are just functions, they’re much cheaper to render. ([From Vue.js documentation](https://vuejs.org/v2/guide/render-function.html#Functional-Components))

Functional components being light in memory consumption, base components, or any small/easy components are good candidates. However, having no `computed` properties, using a Single File Component would only apply for _pure rendering_, without any calculation involved. For `BaseImage`, images source can either be an URL or an import path. In the latter, a `require` is...required >.<.

So the `render(...)` function has to be written to add such calculation. By extension, writing the `render()` method is required for any props / child manipulation (remember, no `data`, no `computed`).

To check if a slot is present, the [`slots()` function](https://vuejs.org/v2/guide/render-function.html#slots-vs-children) is needed:

```html
<!-- base-card.vue -->
<div class="al-card-header" v-if="slots()['header']">
  <slot name="header"></slot>
</div>
```

References:

- [Vue.js documentation](https://vuejs.org/v2/guide/render-function.html#Functional-Components)
- [itnext.io: What's the deal with Functional Components in Vue.js](https://itnext.io/whats-the-deal-with-functional-components-in-vue-js-513a31eb72b0)
- [Vuetify `createSimpleFunctional` helper](https://github.com/vuetifyjs/vuetify/blob/079904031b93b17e7c6bcd2a14405bc2bf4e91a4/packages/vuetify/src/util/helpers.ts) ([Link to master branch version](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts))
- [aliigator.io (Introduction to) Functional components](https://alligator.io/vuejs/functional-components/)
- [Vue.js typing with `FunctionalComponentsOptions`](https://github.com/vuejs/vue/blob/ab50e8e1da2f4f944af683252481728485fedf16/types/vue.d.ts#L89)
- [Vue.js `FunctionalComponentOptions` typing](https://github.com/vuejs/vue/blob/ab50e8e1da2f4f944af683252481728485fedf16/types/options.d.ts#L124)

### Composition API

References

- [`@vue/composition-api`](https://github.com/vuejs/composition-api) to use the Composition API with Vue 2.x
- [Composition API RFC](https://vue-composition-api-rfc.netlify.com/)
- [`defineComponent` (formerly `createComponent`) documentation](https://vue-composition-api-rfc.netlify.com/api.html#setup)

### Image lazy loading

References

- [alligator.io: Painlessly lazy load images in Vue.js with vue-clazy-load](https://alligator.io/vuejs/vue-lazy-load-images/)
- [Vue clazy load library](https://github.com/matheusgrieger/vue-clazy-load/blob/master/src/clazy-load.js)
- [MDN Intersection Observer API doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)