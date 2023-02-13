import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  SearchComponent,
  CourseCardComponent,
} from "./components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const components = [
  HeaderComponent,
  ButtonComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [components]
})
export class SharedModule { }
