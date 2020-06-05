import { Injectable } from '@angular/core';
import { uuid } from 'uuidv4';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  constructor() { }

  generateId() {
    return uuid();
  }

}
