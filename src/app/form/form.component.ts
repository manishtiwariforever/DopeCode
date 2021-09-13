import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Data } from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {



  data = new Data('Rahul', 'mobile', 'abc@gmail.com', 1234567898, 'Click here to select options', 'Shop Website', 'Click here to select options');
  submitted = false;
  onSubmit() { this.submitted = true; }

}

