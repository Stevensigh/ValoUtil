import {Agent} from "@/model/Agent";
import {Map} from "@/model/Map";
import {AgentType} from "@/types/AgentType";
import {MapType} from "@/types/MapType";


//Agent List
export const BREACH = "Breach";
export const BRIMSTONE = "Brimstone";
export const CYPHER = "Cypher";
export const JETT = "Jett";
export const OMEN = "Omen";
export const PHOENIX = "Phoenix";
export const RAZE = "Raze";
export const REYNA = "Reyna";
export const SAGE = "Sage";
export const SOVA = "Sova";
export const VIPER = "Viper";

//Map List
export const ASCENT = "Ascent";
export const BIND = "Bind";
export const HAVEN = "Haven";
export const SPLIT = "Split";

export const AGENT_LIST: Agent[] = [
    {name: AgentType.BREACH, released: false},
    {name: AgentType.BRIMSTONE, released: false},
    {name: AgentType.CYPHER, released: false},
    {name: AgentType.JETT, released: false},
    {name: AgentType.OMEN, released: false},
    {name: AgentType.PHOENIX, released: false},
    {name: AgentType.RAZE, released: false},
    {name: AgentType.REYNA, released: false},
    {name: AgentType.SAGE, released: false},
    {name: AgentType.SOVA, released: false},
    {name: AgentType.VIPER, released: false},
];

export const MAP_LIST: Map[] = [
    {name: MapType.ascent},
    {name: MapType.bind},
    {name: MapType.haven},
    {name: MapType.split},
];

