<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
    <app-progress></app-progress>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

// utils
import { has } from 'lodash';

@Component
export default class App extends Vue {
  layout: string = 'plain-layout';

  @Watch('$route')
  onRouteChange(val: Route) {
    if (!has(val, 'meta.layout')) {
      this.layout = 'default-layout';
    } else {
      this.layout = val.meta.layout + '-layout';
    }
  }

  created() {
    // 跳转前显示进度条
    this.$router.beforeEach((to, from, next) => {
      this.$store.commit('global/app/SET_PROGRESS_STATUS', 'start');
      // 需要给一点延时，不然跳转太快进度条出不来
      setTimeout(() => {
        next();
      }, 20);
    });
    // 跳转结束后隐藏
    this.$router.afterEach((to, from) => {
      this.$store.commit('global/app/SET_PROGRESS_STATUS', 'finish');
    });
  }

  mounted() {
    this.$store.commit('global/app/SET_PROGRESS_STATUS', 'finish');
  }
}
</script>
