import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CourseCardComponent } from "./course-card.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [CourseCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [CourseCardComponent]
})
export class CourseCardModule { }
