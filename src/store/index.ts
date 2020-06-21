import Vue from "vue";
import Vuex, {ActionTree, GetterTree, MutationTree} from "vuex";
import {RootState} from "@/model/RootState";
import {AGENT_LIST, MAP_LIST} from "@/Config";

Vue.use(Vuex);

export function createInitialState(): RootState {
  //TODO: create state from config file
  return {
    agentList: AGENT_LIST,
    mapList: MAP_LIST,
  }
}

const getters: GetterTree<RootState, RootState> = {

};

const mutations: MutationTree<RootState> = {

};

const actions: ActionTree<RootState, RootState> = {

};

export default new Vuex.Store({
  state: createInitialState(),
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {}
});