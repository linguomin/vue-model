<template>
  <div>
    <template v-for="(item,index) in navigation">
      <el-submenu
        v-if="item.children && item.children.length"
        v-show="item.route.meta.permissionCode.includes(role)"
        :key="index"
        :index="item.route.path"
      >
        <template slot="title">
          <i
            v-if="item.icon && item.icon.length"
            :class="item.icon"
          ></i>
          <span>{{$t(item.name)}}</span>
        </template>
        <!-- 递归回调该组件 -->
        <MenuItem :navigation="item.children">
        </MenuItem>
      </el-submenu>
      <el-menu-item
        v-else
        v-show="item.route.meta.permissionCode.includes(role)"
        :key="index"
        :index="item.route.path"
      >
        <i
          v-if="item.icon && item.icon.length"
          :class="item.icon"
        ></i>
        <span>{{$t(item.name)}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  // 导航栏数据
  @Prop() navigation: any;

  // 用户权限
  role: string = 'TEST';
}
</script>
