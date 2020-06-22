import {Agent} from "@/model/Agent";
import { Map } from "@/model/Map";
import {AgentType} from "@/types/AgentType";
import {SideType} from "@/types/SideType";
import {MapType} from "@/types/MapType";
import {SkillType} from "@/types/SkillType";

export interface RootState {
    agentList: Agent[],
    mapList: Map[],
    sideList: SideType[],
    selectedSide?: SideType,
    selectedAgent?: AgentType,
    selectedMap?: MapType,
    selectedSkill?: SkillType,

}