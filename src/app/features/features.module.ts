import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CoursesComponent } from "./index";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [CoursesComponent]
})
export class FeaturesModule { }
