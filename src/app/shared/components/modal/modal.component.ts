import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = ''
  @Input() message: string = ''
  @Input() okButtonText: string = ''
  @Input() cancelButtonText: string = ''
  @Input() openModalButtonText: string = ''

  showModal = false;
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
