import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../service/person-service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  personsform: FormGroup;
  public personList: any[];
  public checked = true;
  public addPers = false;
  public personData;

  constructor(private personService: PersonServiceService) { }

  ngOnInit() {
    this.personsform = new FormGroup({
      CARD: new FormControl(),
      LASTNAME: new FormControl(),
      FIRSTNAME: new FormControl(),
      PATRONYMIC: new FormControl(),
      IDPERSON: new FormControl(),
      STATUSNAME: new FormControl(),
      ACC1NUM: new FormControl(),
      CARDTEMPLNAME: new FormControl(),
      ORGNAMESHORT: new FormControl(),
      PERSONTYPENAME: new FormControl(),
      CURRNAME: new FormControl(),
      IDCARD: new FormControl(),
      BIRTHDATE: new FormControl(),
      DOCSERIES: new FormControl(),
      DOCNUM: new FormControl(),
      IDTASKAUTHSTATUS: new FormControl(),
      DOCTYPENAME: new FormControl(),

    });
    this.personService.IsClose$.subscribe(i => {
      if (i) {
        this.addPers = false;
      }
    });
    this.getDataFromJson();
  }

  getDataFromJson() {
    this.personService.getPerson();
    this.personService.persons$.subscribe(getPersons => {
      this.personList = getPersons;
      console.log(this.personList);
    });
  }

  deletePerson(i: number) {
    this.personList.splice(i, 1);
  }

  checkedPerson(person: any) {
    this.personData = person;
    if (this.checked === true) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }

  addModal() {
    this.addPers = true;
  }

  onSubmit() {
    console.log(this.personList);
  }

}
