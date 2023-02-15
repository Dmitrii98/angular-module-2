import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoursesComponent } from "./courses.component";
import { CourseCardModule } from "../../shared/components/course-card/course-card.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseCardModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
