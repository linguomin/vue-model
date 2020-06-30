<template>
  <div style="height: 100%; width: 100%;">
    <div class="default-layout">
      <nav-top></nav-top>
      <main class="default-layout__container">
        <nav-menu></nav-menu>
        <div class="default-layout__content">
          <transition name="slide-fade">
            <router-view></router-view>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

// components
import NavMenu from './components/NavMenu/index.vue';
import NavTop from './components/NavTop/index.vue';
import cookies from '@/utils/util.cookies';

@Component({
  components: {
    NavMenu,
    NavTop,
  },
})
export default class DefaultLayout extends Vue {
  created() {
    const token = cookies.get('accessToken');
    if (!token) {
      this.$router.push('/Auth/login');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
