<template>
  <header>
    <nav>
      <div>
        <router-link to="/" class="nav-logo">
          <img src="../../assets/SVG/LogoIcon.svg" class="nav-logo-img" />
          <span>TV Guide!</span></router-link
        >
      </div>
      <div class="nav-links">
        <button><BurgerIconSVG class="nav-links-burger" /></button>
        <ul class="nav-links-ul">
          <li v-for="navLink in NAV_LINKS_NAMES">
            <router-link to="/list-page" class="nav-links-link">{{
              navLink
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { NAV_LINKS_NAMES } from "./ constants";
import BurgerIconSVG from "../../assets/SVG/BurgerIconSVG.vue";
import "./Header.scss";
</script>

<style scoped></style>
