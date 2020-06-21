<template>
  <div class="container">
    <div class="title">
      Valorant
    </div>
    <div class="subtitle">
      A breakdown of agent utility lineups
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {}
</script>
<style scoped lang="scss">
.container {
  text-align: center;
}
.title {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2%;
}
</style>
