<template>
  <el-dropdown
    trigger="click"
    @command="handleCommand"
  >
    <span class="el-dropdown-link">
      {{ $t('SwitchLang') }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item,index) in langItem"
        :key="index"
        :command="index"
      >{{item}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import langItem from '@/i18n/lang/count';
import cache from '@/utils/util.cache';

@Component
export default class SwitchLang extends Vue {
  langItem: Object = langItem;

  handleCommand(command) {
    cache.localSet('lang', command); // 存到localStorage中
    this.$i18n.locale = command;
  }
}
</script>

<style lang="scss" scoped>
</style>