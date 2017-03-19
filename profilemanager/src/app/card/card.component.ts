import { Component, OnInit,Output } from '@angular/core';
import {paula} from './../../assets/data/paula'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // declare variable
  selectedValue: string;
  title: string;
  componentName: string = 'Card Component';
  profile:any;
  label:string;

  // declare the output variable
  @Output() socialmedialist;

  // contructor
  constructor() { }

  // initialization of component
  ngOnInit() {
    this.profile = paula;
    this.selectInformation('name');
    this.socialmedialist= this.profile.socialmedialist;
  }

  selectInformation(label){
    this.label =label;
    if(label === 'name') {
      this.selectedValue = this.profile.name.title + " "+ this.profile.name.first+" "+this.profile.name.last;

      this.title= "Hi, My name is";
    }
    else if(label === 'email') {
      this.selectedValue = this.profile.email;

      this.title= "My email address is";
    }
    else if(label === 'location') {
      this.selectedValue = this.profile.location.street + " "+ this.profile.location.city+" "+this.profile.location.state;

      this.title= "My address is";
    }
    else if(label === 'pass') {
      this.selectedValue = this.profile.login.password;

      this.title= "My password is";
    }
    else if(label === 'phone') {
      this.selectedValue = this.profile.phone;

      this.title= "My phone number is";
    }
    else if(label === 'birthday') {
      this.selectedValue = this.profile.dob;

      this.title= "My birthday is";
    }
  }

}
