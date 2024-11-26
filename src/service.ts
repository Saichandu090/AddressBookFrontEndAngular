import { http } from './http';
export class Service {
  constructor() {
    http.get('/addressBook'); // Now works correctly
  }
}