import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface User {
  email: string;
  passwort: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showModal: boolean;
  loginForm: FormGroup;
  submitted = false;
  User!: User[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.show();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get inputValues() { 
    return this.loginForm.controls; 
  }
  onSubmit() {
    this.submitted = true;

    // Tarif Erstellen 
    JSON.stringify(this.loginForm.value);
    this.http.post<any>("http://localhost/tarifrechner/getUser.php", this.loginForm.value).subscribe( data => {
      this.User = data;
      if(this.loginForm.value.email == this.User[0].email && this.loginForm.value.password == this.User[0].passwort){
        this.hide();
        console.log("Klappt");
      }else{
        console.log("nicht");
      }
    });
  }
}
