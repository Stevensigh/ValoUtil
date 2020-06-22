<template>
  <div class="home">
    <Title />
    <Selection />
    <div class="routes">
      <router-view name="main" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Selection from "@/components/Selection.vue";
@Component({ components: { Title, Selection } })
export default class Home extends Vue {}
</script>
<style lang="scss">
.routes {
  padding-top: 10%;
}
</style>
