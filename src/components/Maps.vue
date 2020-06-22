<template>
  <div class="container">
    <div class="title">
      Select the map
    </div>
    <div class="options">
      <div v-for="map in maps" :key="map.name">
        <button @click="onClick(map.name)">{{ map.name }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { State } from "vuex-class";
import { Map } from "@/model/Map";
import { RootState } from "@/model/RootState";
import { MapType } from "@/types/MapType";
import { MutationType } from "@/types/MutationType";
@Component
export default class Maps extends Vue {
  @State((state: RootState) => state.mapList)
  private readonly maps!: Map[];

  private onClick(name: MapType) {
    this.$store.commit(MutationType.SetMap, name);
    this.$router.push("/agents");
  }
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  padding: 10%;
}
.options {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-evenly;
}
</style>
