import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {VehiculeService} from './service/vehicule.service';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListVehiculeComponent,
    LoginComponent,
    MenuComponent,
    FormSignUpComponent,
    MainComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
