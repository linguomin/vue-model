<template>
  <div class="demo" ref="demo">
    <p class="demo-title">欢迎来到vue架构模板</p>
    <p class="demo-count">接下来让我们来数钱</p>
    <p class="demo-number">${{ count }}</p>
    <p>
      <el-button type="primary" @click="increment">打赏</el-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';

@Component({
  computed: mapState('Demo/counter', ['count']),
  methods: mapMutations('Demo/counter', ['increment']),
})
export default class Demo extends Vue {
  readonly count!: number;
  readonly increment!: () => void;

  readonly $refs!: {
    demo: HTMLElement;
  };

  created() {}

  mounted() {}

  destroyed() {}
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
