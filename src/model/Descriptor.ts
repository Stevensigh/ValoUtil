import {AgentType} from "@/types/AgentType";
import {MapType} from "@/types/MapType";
import {SideType} from "@/types/SideType";

export interface Descriptor {
    title: string;
    youtubeId: string;
    description: string;
    agent: AgentType;
    map: MapType;
    side: SideType;
}