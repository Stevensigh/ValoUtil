<template>
  <div class="container">
    <div class="title">
      Select the map
    </div>
    <div class="options">
      <div v-for="side in sides" :key="side">
        <button @click="onClick(side)">{{ side }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { RootState } from "@/model/RootState";
import { State } from "vuex-class";
import { SideType } from "@/types/SideType";

@Component
export default class Sides extends Vue {
  @State((state: RootState) => state.sideList)
  private readonly sides!: SideType[];
}
</script>
