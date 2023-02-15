import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from "./shared/components/modal/modal.module";
import { CoursesModule } from "./features/courses/courses.module";
import { HeaderModule } from "./shared/components/header/header.module";
import { ButtonModule } from "./shared/components/button/button.module";
import { SearchModule } from "./shared/components/search/search.module";
import { CourseCardModule } from "./shared/components/course-card/course-card.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    CoursesModule,
    HeaderModule,
    ButtonModule,
    SearchModule,
    CourseCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
