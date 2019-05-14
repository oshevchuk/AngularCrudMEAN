import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUnitService {

  constructor() { }

  addUnit(name, price) {
    console.log(name, price);
  }
}
