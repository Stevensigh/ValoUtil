import {AgentType} from "@/types/AgentType";
import {SkillType} from "@/types/SkillType";

export interface Agent {
    name: AgentType;
    skills?: SkillType[];
    released: boolean;
}