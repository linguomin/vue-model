<template>
  <div class="nav-top">
    <div class="nav-top__title">
      Test Model Logo
    </div>
    <div class="nav-top__user">
      <div class="switch-lang">
        <switch-lang />
      </div>
      <el-dropdown @command="handleCommand">
        <div class="user_detail">
          <el-avatar
            :size="50"
            :src="avatorUrl"
          ></el-avatar>
          <div class="user_detail_info">
            <p>{{ userName }}</p>
            <p>{{ userRole }}</p>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NavTop extends Vue {
  userName: string = 'username';
  userRole: string = 'role';
  avatorUrl: string = require('./images/defalt_avatar.png');

  handleCommand(command) {
    switch (command) {
      case 'a':
        this.$router.replace({
          name: 'auth-login',
        });
        break;
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
