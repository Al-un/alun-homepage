<template>
  <footer class="al-cv-page-footer">
    <div class="content">
      <p>
        Code is hosted on
        <base-link href="https://github.com/Al-un/alun-homepage"
          >Github</base-link
        >
        and deployed on
        <base-link href="https://surge.sh/">Surge.sh</base-link>.
      </p>
      <p>
        Works better on Chrome. Developed with Chrome 80.0.xxx and Firefox 74.0
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "cv-page-footer",
  components: {},
  props: {},

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-page-footer {
  background-color: #393939;
  color: #ffffff;
  .al-link {
    color: #ffffff;
  }

  @include print-and-tablet {
    margin-top: multiply(al-cv-base-size, 1);
  }

  .content {
    min-height: multiply(al-cv-base-size, 3);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
