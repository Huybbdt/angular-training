import { Component, OnInit } from '@angular/core';

export interface menuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  listMenu: menuItem[] = [
    {
      name: 'Component Interaction',
      url: 'component-interaction',
    },
    {
      name: 'Multiple Components',
      url: 'multiple-components',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
