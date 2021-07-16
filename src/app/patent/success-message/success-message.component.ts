import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
