import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'src/app/modules/shared/share-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'angular-demo';
  phone = '0763768586'
  constructor(private shareSerive: ShareServiceService) { }

  ngOnInit(): void {
  }
  setMessage() {
    this.shareSerive.setMassage('Service')
  }
}
