import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms';
  usersForm: FormGroup;
  usersList: Array<any> = [];

  ngOnInit() {
    this.usersList = [
      {id: 133, email: 'testuser1@gmail.com', strength: 'sfgsdfgsdfg'},
      {id: 433, email: 'testuser2@gmail.com', strength: 'tryutuiytu'}
    ];
    this.initForm();
  } 

  initForm() {
    let userData = new FormArray([]);

    this.usersForm = new FormGroup({
      'userData': userData
    });
  }

  onAddUser() {
    (<FormArray>this.usersForm.get('userData')).push(
      new FormGroup({
      'id': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'strength': new FormControl(null, Validators.required),
      })
    );
  }

  onSubmit() {
      this.usersList.push(...this.usersForm.value.userData);
      this.initForm();
  }

}
