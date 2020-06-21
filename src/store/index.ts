import Vue from "vue";
import Vuex, {ActionTree, GetterTree, MutationTree} from "vuex";
import {RootState} from "@/model/RootState";

Vue.use(Vuex);

export function createInitialState(): RootState {
  //TODO: create state from config file
  return {
    agentList: [{name: 'test'}],
    mapList: [{name: 'one'}, {name: 'two'}],
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