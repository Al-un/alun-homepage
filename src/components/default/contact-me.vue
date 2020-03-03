<template>
  <section-default class="al-contact-me" :section="theme.ui.contact">
    <base-card>
      <form @submit.prevent="">
        <base-input-text
          v-model="state.sender"
          :label="theme.ui.contact.sender"
        />
        <base-input-text
          v-model="state.subject"
          :label="theme.ui.contact.subject"
        />
        <base-input-textarea
          v-model="state.body"
          :label="theme.ui.contact.body"
        />

        <base-input-submit :value="theme.ui.contact.submit" />
      </form>
    </base-card>
  </section-default>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

import { ThemProfPropsDef, ThemProfProps } from "@/models";
import SectionDefault from "./section-default.vue";

export default defineComponent<ThemProfPropsDef>({
  name: "ContactMe",
  components: { SectionDefault },
  props: {
    ...ThemProfProps
  },

  //   setup(props: Props, context: SetupContext){
  setup(props: ThemProfPropsDef) {
    const state = reactive({
      sender: "",
      subject: "",
      body: ""
    });

    return { state };
  }
});
</script>

<style lang="scss"></style>
