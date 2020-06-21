import {Agent} from "@/model/Agent";
import { Map } from "@/model/Map";

export interface RootState {
    agentList: Agent[],
    mapList: Map[]
}