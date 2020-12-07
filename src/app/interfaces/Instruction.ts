import { Action } from '../classes/Action';


export interface Instruction {
    id: string;
    type_id: string;
    action_list: Action[];
}