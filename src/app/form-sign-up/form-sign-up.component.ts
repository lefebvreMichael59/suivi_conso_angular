import {Component, Inject, OnInit} from '@angular/core';
import {UserSignUp} from '../model/UserSignUp';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SignUpService} from '../service/signup.service';



@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {


  ///////////////////////////////////////////////
  //              VARIABLES
  ///////////////////////////////////////////////
  public newUserSignUp = new UserSignUp();
  public username = '';
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';

  constructor(private signUpService: SignUpService,
              public dialogRef: MatDialogRef<FormSignUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
  }

  public async saveUser(event, newUserSignUp): Promise<void>{
    console.log(newUserSignUp);
    await this.signUpService.createUser(newUserSignUp);
    this.dialogRef.close();

  }

}
