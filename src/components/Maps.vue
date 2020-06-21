<template>
  <div class="container">
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
