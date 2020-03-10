<template>
  <div class="al-temp-landing-page">
    <main>
      <h1>Al-un</h1>
      <h2>Front-end developer</h2>
      <p>
        Waiting for Vue.js 3. Gathering motivation and beers to work on this
        website
      </p>
    </main>

    <aside>
      <p>
        Where you can find me as well:
      </p>
      <div>
        <a
          v-for="(link, idx) in social.links"
          :key="idx"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="link.img" :alt="link.title" :title="link.title" />
        </a>
      </div>
    </aside>
  </div>

  <!-- <div>
    <banner :profile="profile" :theme="theme" />
    <about-me :profile="profile" :theme="theme" />
    <hobby-list :profile="profile" :theme="theme" />
    <skill-set :profile="profile" :theme="theme" />
    <contact-me :profile="profile" :theme="theme" />
  </div> -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

import { PROFILE_DEFAULT, THEME_DEFAULT } from "@/data";
import { RequiredCssProperty } from "@/models";
import { setCssRootVariable } from "@/utils";

import AboutMe from "@/components/default/about-me.vue";
import Banner from "@/components/default/banner.vue";
import ContactMe from "@/components/default/contact-me.vue";
import HobbyList from "@/components/default/hobby-list.vue";
import SkillSet from "@/components/default/skill-set.vue";

export default defineComponent({
  name: "HomeDefault",
  components: { AboutMe, Banner, ContactMe, HobbyList, SkillSet },

  setup() {
    Object.keys(THEME_DEFAULT.cssVariables).forEach(cssVar =>
      setCssRootVariable(
        cssVar,
        THEME_DEFAULT.cssVariables[cssVar as RequiredCssProperty] as string
      )
    );

    // theme
    const social = reactive({
      links: [
        {
          href: "https://github.com/Al-un",
          img: require("@/assets/brands/github/GitHub-Mark-Light-32px.png"),
          title: "Github"
        },
        {
          href: "https://medium.com/@Al_un",
          img: require("@/assets/brands/medium/monogram/Monogram.svg"),
          title: "Medium"
        },
        {
          href: "https://stackoverflow.com/users/4906586/al-un",
          img:
            "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e",
          title: "Stack Overflow"
        },
        {
          href: "https://www.strava.com/athletes/47821410",
          img: require("@/assets/brands/strava/strava_symbol_orange.png"),
          title: "Strava"
        }
      ]
    });

    return {
      profile: PROFILE_DEFAULT,
      theme: THEME_DEFAULT,
      social
    };
  }
});
</script>

<style lang="scss">
.al-temp-landing-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #04619f 0%, #000000 100%);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.5fr;
  justify-items: center;
  align-items: center;

  p {
    padding: 16px;
  }

  main {
    justify-self: center;
    text-align: center;

    h1 {
      margin: 32px auto;
      padding: 0px 16px;
    }
    h2 {
      margin: auto;
      padding: 0px 16px;
    }
    p {
      font-size: 0.75rem;
    }
  }

  aside {
    div {
      text-align: center;
      margin-top: 16px;
    }

    img {
      width: 48px;
      height: 48px;
      margin: 0px 16px;
    }
  }
}

@media only screen and (min-width: 480px) {
  .al-temp-landing-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    grid-template-rows: 1fr;
    background: linear-gradient(270deg, #04619f 0%, #000000 100%);

    main {
      text-align: left;
    }

    aside {
      text-align: right;

      div {
        text-align: right;
      }
    }
  }
}
</style>
