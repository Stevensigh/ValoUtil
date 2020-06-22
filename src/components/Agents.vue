<template>
  <div class="container">
    <div class="title">
      Select the agent
    </div>
    <div class="options">
      <div v-for="agent in agents" :key="agent.name">
        <button @click="onClick(agent.name)">{{ agent.name }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { Agent } from "@/model/Agent";
import { RootState } from "@/model/RootState";
import { MutationType } from "@/types/MutationType";
import { AgentType } from "@/types/AgentType";

@Component
export default class Agents extends Vue {
  @State((state: RootState) => state.agentList)
  private readonly agents!: Agent[];

  private onClick(agent: AgentType) {
    this.$store.commit(MutationType.SetAgent, agent);
    this.$router.push("/sides");
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
