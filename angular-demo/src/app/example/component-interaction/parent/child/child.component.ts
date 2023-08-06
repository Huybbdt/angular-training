import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentMessage;
  @Output () childMessage  = new EventEmitter();
  MessageViewChild = 'ViewChild'
  constructor() { }

  ngOnInit(): void {
  }
  sendParentMessageOutput(): void  {
    this.childMessage.emit('(Output & EventEmitter)');
  }
  sendParentMessageViewChild(): void  {
    this.MessageViewChild = 'ViewChild'
  }

}
