<template>
  <div class="container">
    <div class="title">
      Select the map
    </div>
    <div v-for="map in maps" :key="map.name">
      <button>{{ map.name }}</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { State } from "vuex-class";
import { Map } from "@/model/Map";
import { RootState } from "@/model/RootState";
@Component
export default class Maps extends Vue {
  @State((state: RootState) => state.mapList)
  private readonly maps!: Map[];
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
