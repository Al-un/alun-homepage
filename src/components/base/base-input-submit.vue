<template functional>
  <div class="al-input-area">
    <input
      :value="props.value | i18n"
      v-bind="data.attrs"
      @input="listeners.input($event.target.value)"
      type="submit"
      class="al-input"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TranslatedExpression } from '@/models';

interface Props {
  value: TranslatedExpression;
}

export default Vue.extend<Props>({
  name: "BaseInputSubmit",
  functional: true,
  props: {
    value: { type: Object, required: true }
  }
});
</script>
