import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie';

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
  fehlermeldung: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private cookie: CookieService) { }

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
      password: ['', [Validators.required]],
      merken: ['']
    });
    // Check LoggedIn
    if(this.cookie.get('email')){
      this.loginForm.setValue({
        email: this.cookie.get('email'),
        password: this.cookie.get('passwort'),
        merken: ""
      });
      this.onSubmit();
      this.hide();
    }

  }
  // convenience getter for easy access to form fields
  get inputValues() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.fehlermeldung = " ";
    this.submitted = true;

    JSON.stringify(this.loginForm.value);
    
    // HTTP-Post Request
    this.http.post<any>("http://localhost/tarifrechner/getUser.php", this.loginForm.value).subscribe( data => {
      this.User = data;
      
      // Check login Daten 
      if(this.loginForm.value.email ==  this.User[0].email){
        if(this.loginForm.value.password == this.User[0].passwort){
          this.hide();
          // Cookies setzen
          if(this.loginForm.value.merken == true){
            this.cookie.put("email", this.loginForm.value.email);
            this.cookie.put("passwort", this.loginForm.value.password);
          }
        }else{
          this.fehlermeldung = "Passwort falsch eingegeben.";
        }
      }else{
        this.fehlermeldung = "E-Mail falsch eingegeben.";
      }
    });
  }
}
