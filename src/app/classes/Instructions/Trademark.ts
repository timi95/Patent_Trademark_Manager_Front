import { Action } from 'src/app/interfaces/Action';
import { InstructionImage } from 'src/app/interfaces/InstructionImage';
import { Instruction } from '../../interfaces/Instruction';

export class Trademark implements Instruction {
    constructor(parameters) {}
    
    id: string;
    type_id: string;
    action_list: Action[];
 
}
