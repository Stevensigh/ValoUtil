<template>
  <div class="select">
    <div v-if="!!query">
      Query: <span class="bold">{{ query }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { RootState } from "@/model/RootState";
import { Getter, State } from "vuex-class";
import { GetterType } from "@/types/GetterType";

@Component
export default class Selection extends Vue {
  @State((state: RootState) => state)
  private readonly state!: RootState;

  @Getter(GetterType.GetQuery)
  private readonly query!: string;
}
</script>

<style scoped lang="scss">
.bold {
  font-weight: bold;
}
.select {
  text-align: center;
}
</style>
