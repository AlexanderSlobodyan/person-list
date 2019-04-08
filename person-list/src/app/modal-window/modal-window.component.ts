import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../service/person-service.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  public isClose = false;
  constructor(private personService: PersonServiceService) { }

  ngOnInit() {
  }

  closeModal() {
    this.personService.modalClosed(true);
  }

}
