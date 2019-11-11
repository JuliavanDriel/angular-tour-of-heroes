import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // inject MessageService into property when creates MessageComponent
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
