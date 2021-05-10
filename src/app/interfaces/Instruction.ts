import { Action } from 'src/app/interfaces/Action';


export interface Instruction {
    id: string;
    type_id: string;
    action_list: Action[];
}
