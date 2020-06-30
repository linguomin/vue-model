<template>
  <div class="nav-menu">
    <el-menu
      :default-active="activeRouter"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true"
      :collapse="isCollapse"
    >
      <template v-for="(item,index) in navigation">
        <template v-if="item.route.children">
          <el-submenu
            v-if="item.route.meta.permissionCode.includes(role)"
            :key="index"
            :index="item.route.path"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ $t(item.name) }}</span>
            </template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.route.children"
              v-show="subItem.meta.permissionCode.includes(role)"
              :key="subIndex"
              :index="item.route.path+'/'+subItem.path"
            >
              <span>{{ $t(subItem.name) }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            v-if="item.route.meta.permissionCode.includes(role)"
            :key="index"
            :index="item.route.path"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
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
import cache from '@/utils/util.cache';

@Component
export default class NavMenu extends Vue {
  // 用户权限
  role: string = 'TEST';

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
