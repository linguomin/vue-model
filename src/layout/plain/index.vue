<template>
  <div class="plain-layout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class PlainLayout extends Vue {}
</script>

<style lang="scss">
.plain-layout {
  width: 100%;
  height: 100%;
}
</style>
