import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from "./header.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
