# PatentTrademarkManagerFront
## Revised use-case plan
- A Patent/Trademark document is a combination of Instruction(Patent/Trademark) Particulars,and Actions
- When viewing created Patents/Trademarks, Along with the Particulars of the Instruction, there will be a list of all Actions taken on the document.
- Current action field should be automatically filled based on the latest created Action on the instruction.

## Planned Structure of Entities
```json
Trademark:{
  trademark_detail_one
  trademark_detail_two
  ...
  action_list<Action>: [current_action,
  ...
  first_action
  ]  
}
Patent:{
  patent_detail_one
  patent_detail_two
  ...
  action_list<Action>: [current_action,
  ...
  first_action
  ]  
}
Action:{
  action_details
  ...
  patent_or_trademark_I_belong_to
}
```
