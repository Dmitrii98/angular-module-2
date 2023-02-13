import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() authors: Array<string> = []
  @Input() duration: number = 0
  @Input() date: string = ''
}
