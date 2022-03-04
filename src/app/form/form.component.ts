import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  public editing: boolean = false;
  public index: any = null;
  public id: number = 0;
  public firstName: string = '';
  public lastName: string = '';
  public mob: any = null;
  public dob: string = '';
  public email: string = '';
  public information: any = [];

  onCreateSave() {
    this.information.push({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mob: this.mob,
      dob: this.dob,
      email: this.email,
    });
    localStorage.setItem('Users', JSON.stringify([...this.information]));

    console.log(this.information);
    this.id++;
    this.firstName = '';
    this.lastName = '';
    this.mob = null;
    this.dob = '';
    this.email = '';
  }

  onEdit(index: any) {
    this.editing = true;

    this.index = index;
    this.firstName = this.information[index].firstName;
    this.lastName = this.information[index].lastName;
    this.dob = this.information[index].dob;
    this.mob = this.information[index].mob;
    this.email = this.information[index].email;
  }

  onEditSave() {
    this.information[this.index] = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      mob: this.mob,
      dob: this.dob,
      email: this.email,
    };

    console.log(this.information);
    this.id++;
    this.firstName = '';
    this.lastName = '';
    this.mob = null;
    this.dob = '';
    this.email = '';
  }

  ngOnInit(): void {
    if (this.information.length === 0) {
      console.log('information is null');

      console.log('before push', this.information);
      if (localStorage.getItem('Users') != null) {
        let temporary: any = localStorage.getItem('Users');
        this.information = [...JSON.parse(temporary)];
        console.log('after push', this.information);
        console.log('before id : ', this.id);
        console.log(this.information.length);
        this.id = this.information[this.information.length - 1].id + 1;

        console.log('after id : ', this.id);
      }
    }
  }

  onDelete(index: any) {
    this.information.splice(index, 1);

    console.log(this.information);

    localStorage.setItem('Users', JSON.stringify(this.information));

    // console.log(tempVar);
  }

  // onEdit(index: any) {
  //   this.editing = true;

  //   this.index = index;
  //   this.firstName = this.information[index].firstName;
  //   this.lastName = this.information[index].lastName;
  //   this.dob = this.information[index].dob;
  //   this.mob = this.information[index].mob;
  //   this.email = this.information[index].email;
  // }

  // onEditSave() {
  //   // this.information[this.id] = { "id": this.id, "firstName": this.firstName, "lastName": this.lastName, "mob": this.mob, "dob": this.dob, "email": this.email};
  //   this.information[this.index] = {
  //     id: this.id,
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     mob: this.mob,
  //     dob: this.dob,
  //     email: this.email,
  //   };

  //   console.log(this.information);
  //   this.id++;
  //   this.firstName = '';
  //   this.lastName = '';
  //   this.mob = null;
  //   this.dob = '';
  //   this.email = '';
  // }

  // onCreateSave() {
  //   this.information.push({
  //     id: this.id,
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     mob: this.mob,
  //     dob: this.dob,
  //     email: this.email,
  //   });

  //   console.log(this.information);
  //   this.id++;
  //   this.firstName = '';
  //   this.lastName = '';
  //   this.mob = null;
  //   this.dob = '';
  //   this.email = '';
  // }

  // onDelete(index: any) {
  //   this.information.splice(index, 1);
  // }
}
