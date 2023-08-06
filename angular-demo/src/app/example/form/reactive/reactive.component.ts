import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  SignupForm: FormGroup;
  forbiddenUserNames = ['test'];
  constructor(private router: Router) {}
  ngOnInit() {
    this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.CustomValidate.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.asyncValidateEmails
        ),
      }),
    });
  }

  onSubmit() {
    console.log(this.SignupForm.value.userData);
  }

  // custom  validate reactive form
  CustomValidate(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) != -1) {
      return { isNameNotTest: true };
    }

    return null;
  }

  // custom Async validate reactive form
  asyncValidateEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ isEmailNotTest: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  goToPage() {
    this.router.navigate(['/multiple-components']);
  }
}
