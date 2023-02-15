import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from "./search.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
