import { AddUnitService } from './../../add-unit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  // form: FormGroup;
  name = '';
  price = '';

  constructor(private addUNitService: AddUnitService, private formBuilder: FormBuilder) {
    // this.createForm();
  }

  // createForm() {
  //   this.form = this.formBuilder.group({
  //     unitName: ['', Validators.required],
  //     unitPrice: ['', Validators.required]
  //   });
  // }

  addUnit() {
    
    this.addUNitService.addUnit(this.name, this.price);
  }

  ngOnInit() {
  }

}
