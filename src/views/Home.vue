<template>
  <div class="home">
    <Title />

    <router-view name="main"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Title from "@/components/Title.vue";
@Component({ components: { Title } })
export default class Home extends Vue {}
</script>
