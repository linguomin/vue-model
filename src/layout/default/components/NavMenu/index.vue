<template>
  <div class="nav-menu">
    <el-menu
      :default-active="activeRouter"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true"
      :collapse="isCollapse"
      text-color="#fff"
    >
      <menu-item :navigation="navigation">
      </menu-item>
      <div
        class="fold"
        @click="isCollapse = !isCollapse"
      >
        <i :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import navigation from '@/navigation';

@Component
export default class NavMenu extends Vue {
  navigation = navigation; // 菜单栏

  activeRouter: string = ''; // 激活的菜单栏

  isCollapse: boolean = false; // 是否展开菜单栏

  // 监听路由变化
  @Watch('$route', { immediate: true, deep: true })
  onRouteChange(val: any) {
    this.activeRouter = val.path;
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
