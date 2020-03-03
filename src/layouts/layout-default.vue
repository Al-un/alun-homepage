<template>
  <div>
    <banner :profile="profile" :theme="theme" />
    <about-me :profile="profile" :theme="theme" />
    <hobby-list :profile="profile" :theme="theme" />
    <skill-set :profile="profile" :theme="theme" />
    <contact-me :profile="profile" :theme="theme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { PROFILE_DEFAULT, THEME_DEFAULT } from "@/data";

import AboutMe from "@/components/default/about-me.vue";
import Banner from "@/components/default/banner.vue";
import ContactMe from "@/components/default/contact-me.vue";
import HobbyList from "@/components/default/hobby-list.vue";
import SkillSet from "@/components/default/skill-set.vue";

export default defineComponent({
  name: "LayoutDefault",
  components: { AboutMe, Banner, ContactMe, HobbyList, SkillSet },

  // setup(props: {}, context: SetupContext) {
  setup() {
    return {
      profile: PROFILE_DEFAULT,
      theme: THEME_DEFAULT
    };
  }
});
</script>

<style lang="scss"></style>
