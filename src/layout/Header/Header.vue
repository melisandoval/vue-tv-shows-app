<template>
  <header>
    <nav>
      <div>
        <router-link to="/" class="nav-logo">
          <img src="/LogoIcon.svg" class="nav-logo-img" />
          <span class="nav-logo-text">TV Guide!</span></router-link
        >
      </div>
      <div class="nav-links">
        <button><BurgerIconSVG class="burger" /></button>
        <ul class="nav-links-ul">
          <li v-for="list in MAIN_LISTS">
            <router-link
              :to="{ name: 'List Page', params: { listname: list.URL } }"
              class="nav-links-link"
              @click="handleNavLinkClicked(list)"
              >{{ list.DISPLAY }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { MAIN_LISTS } from "../../constants";
import BurgerIconSVG from "../../assets/SVG/BurgerIconSVG.vue";
import "./Header.scss";

const emit = defineEmits<{
  (event: "onNavLinkClicked", value: object): void;
}>();

function handleNavLinkClicked(navLink: object) {
  emit("onNavLinkClicked", navLink);
}
</script>

<style scoped></style>
