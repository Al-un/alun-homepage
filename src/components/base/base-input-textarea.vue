<template functional>
  <div class="al-input-area">
    <label>{{ props.label | i18n }}</label>
    <textarea
      :value="props.value"
      v-bind="data.attrs"
      type="text"
      class="al-input"
      @input="listeners.input($event.target.value)"
    ></textarea>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { TranslatedExpression } from "@/models";

interface Props {
  value: string;
  label?: TranslatedExpression;
}

export default Vue.extend<Props>({
  name: "BaseInputTextArea",
  functional: true,
  props: {
    value: { type: String, required: true },
    label: { type: Object, required: false }
  }
});
</script>
