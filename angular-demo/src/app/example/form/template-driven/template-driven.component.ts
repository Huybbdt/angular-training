import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   model = {
    email: '',
    password: '',
  };

  onSubmit(form) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  goToPage() {
    this.router.navigate(['/multiple-components/reactive-form']);
  }
}
