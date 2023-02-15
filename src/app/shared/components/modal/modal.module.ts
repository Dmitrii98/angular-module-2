import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
