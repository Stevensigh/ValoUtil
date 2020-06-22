import Vue from "vue";
import Vuex, {ActionTree, GetterTree, MutationTree} from "vuex";
import {RootState} from "@/model/RootState";
import {AGENT_LIST, MAP_LIST} from "@/Config";
import {AgentType} from "@/types/AgentType";
import {MutationType} from "@/types/MutationType";
import {MapType} from "@/types/MapType";
import {SideType} from "@/types/SideType";
import { GetterType } from '@/types/GetterType';
import {SkillType} from "@/types/SkillType";

Vue.use(Vuex);

export function createInitialState(): RootState {
  //TODO: create state from config file
  return {
    agentList: AGENT_LIST,
    mapList: MAP_LIST,
    sideList: [SideType.attacker, SideType.defender]
  }
}

const getters: GetterTree<RootState, RootState> = {
    [GetterType.GetAgent](state: RootState): AgentType | undefined {
        return state.selectedAgent;
    },
    [GetterType.GetMap](state: RootState): MapType | undefined {
        return state.selectedMap;
    },
    [GetterType.GetSide](state: RootState): SideType | undefined {
        return state.selectedSide;
    },
    [GetterType.GetSkill](state: RootState): SkillType | undefined {
        return state.selectedSkill;
    },
    [GetterType.GetQuery](state:RootState): string {
        const query = [];
        if(state.selectedAgent) { query.push(state.selectedAgent); }
        if(state.selectedMap) { query.push(state.selectedMap); }
        if(state.selectedSide) {query.push(state.selectedSide); }
        return query.join(', ');
    }
};

const mutations: MutationTree<RootState> = {
 [MutationType.SetMap](state: RootState, map:MapType) {
     Vue.set(state, 'selectedMap', map);
 },
  [MutationType.SetAgent](state: RootState, agent:AgentType) {
     Vue.set(state, 'selectedAgent', agent);
  },
  [MutationType.SetSide](state: RootState, side: SideType) {
     Vue.set(state, 'selectedSide', side);
  },
  [MutationType.ClearSearch](state: RootState) {
   state.selectedAgent = undefined;
   state.selectedMap = undefined;
   state.selectedSide = undefined;
   state.selectedSkill = undefined;
  },
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