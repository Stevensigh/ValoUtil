<template>
  <div class="container">
    <div class="title">
      Select the agent
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Agents extends Vue {}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
