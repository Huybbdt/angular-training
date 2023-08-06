import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ShareServiceService } from 'src/app/modules/shared/share-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent, {static: true}) childComponentVC;
  parentMessageInput: string = 'Input';
  childMessageOutput: string;
  childMessageViewChild: string = '';
  serviceMessage: string = '';
  constructor(private ref: ChangeDetectorRef,private shareSerive: ShareServiceService) {

   }

  ngOnInit() {
    this.getMessage();
  }
  getMessageChild(event) {
    this.childMessageOutput = event
  }
  ngAfterViewInit() {
    this.childMessageViewChild = this.childComponentVC.MessageViewChild;
    this.ref.detectChanges();
  }
  getMessage() {
    this.shareSerive.currentMessageService.subscribe((value)=> {
      console.log('value', value);
      
      this.serviceMessage = value;
    })
  }
}
